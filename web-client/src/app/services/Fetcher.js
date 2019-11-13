import fetch from "isomorphic-unfetch";
import { Observable } from "relay-runtime";
import { SubscriptionClient } from "subscriptions-transport-ws";
import constants from "../../../common/constants";
import { appOperations } from "../state";
import getCurrentUser from "../lib/getCurrentUser";

/**
 * Fetch API facade
 */
class Fetcher {
  /**
   * Constructor
   * @param {*} di
   * @param {*} getState
   * @param {*} dispatch
   * @param {*} storage
   */
  constructor(di, getState, dispatch, storage) {
    this.di = di;
    this.getState = getState;
    this.dispatch = dispatch;
    this.storage = storage;
  }

  /**
   * DI name
   */
  static get $provides() {
    return "fetcher";
  }

  /**
   * DI dependecies
   */
  static get $requires() {
    return ["di", "getState", "dispatch", "storage"];
  }

  /**
   * DI lifecycle
   */
  static get $lifecycle() {
    return "singleton";
  }

  /**
   * Switch to SSR mode
   * @param {Object} req
   * @param {Object} res
   */
  setSsrMode(req, res) {
    this.isSsr = true;
    this.req = req;
    this.res = res;
  }

  /**
   * Get access JWT
   */
  async getAccessToken() {
    return (
      (this.isSsr
        ? (this.req.session || {}).accessToken
        : this.storage.get("accessToken")) || null
    );
  }

  /**
   * Get refresh JWT
   */
  async getRefreshToken() {
    return (
      (this.isSsr
        ? (this.req.session || {}).refreshToken
        : this.storage.get("refreshToken")) || null
    );
  }

  /**
   * Refresh SSR server session by reporting the tokens
   * and get the current user info into Redux
   */
  async refreshSession() {
    try {
      let user = null;
      if (process.env.STATIC_SITE) {
        // in static export mode we don't have an SSR server
        // so we get the current user info by ourself
        user = await getCurrentUser(
          process.env.API_SERVER,
          await this.getAccessToken()
        );
      } else if (this.isSsr) {
        // in the SSR phase the user info has been fetched already
        user = ((this.req || {}).session || {}).user || null;
      } else {
        // otherwise the SSR server will report the current user info
        // after refreshing the session
        const response = await this.fetch({
          method: "POST",
          resource: process.env.APP_SERVER + "/session",
          data: {
            accessToken: await this.getAccessToken(),
            refreshToken: await this.getRefreshToken()
          }
        });
        if (response.ok) {
          const data = await response.json();
          if (data.success) user = data.user;
        }
      }

      await this.dispatch(appOperations.setUser({ user }));
    } catch (error) {
      console.error(error.message);
    }
  }

  /**
   * Store JWTs
   * @param {string} accessToken
   * @param {string} refreshToken
   */
  async setTokens(accessToken, refreshToken) {
    if (this.isSsr) {
      await this.req.setTokens(accessToken, refreshToken);
    } else {
      this.storage.set("accessToken", accessToken);
      this.storage.set("refreshToken", refreshToken);
    }
    return this.refreshSession();
  }

  /**
   * Get new JWTs
   */
  async fetchTokens() {
    const started = Date.now();

    const done = async (accessToken, refreshToken) => {
      try {
        await this.setTokens(accessToken, refreshToken);
      } catch (error) {
        console.log(error);
      }

      // fetching tokens takes at least one second
      // to limit the rate of our requests
      const delta = Date.now() - started;
      if (delta < 1000)
        await new Promise(resolve => setTimeout(resolve, delta));
    };

    for (;;) {
      try {
        let refreshToken = await this.getRefreshToken();
        if (!refreshToken) return done(null, null);

        if (process.env.NODE_ENV === "development")
          console.log("Fetching new tokens...");

        const params = {
          method: "POST",
          resource: constants.graphqlBase,
          data: {
            query: `mutation GetTokenMutation( $input: GetTokenInput! ) {
              getToken(input: $input) {
                success
                token
                refreshToken
              }
            }`,
            variables: {
              input: {
                type: "access",
                token: refreshToken
              }
            }
          }
        };

        const response = await this.fetch(params);

        if (!response.ok)
          throw new Error(`GraphQL: GetToken Response ${response.status}`);

        let data = await response.json();

        let result = ((data.data || {}).getToken || {}).success || null;
        if (result === true) {
          let accessToken = ((data.data || {}).getToken || {}).token || null;
          let refreshToken =
            ((data.data || {}).getToken || {}).refreshToken || null;
          if (!accessToken || !refreshToken) return done(null, null);
          return done(accessToken, refreshToken);
        } else if (result === false) {
          return done(null, null);
        }
      } catch (error) {
        console.error(error.message);
      }

      if (!process.browser) return done(null, null);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  /**
   * Refresh the JWTs
   */
  async refreshTokens() {
    if (this.refreshingPromise) return this.refreshingPromise;
    this.refreshingPromise = this.fetchTokens().then(() => {
      this.refreshingPromise = null;
    });
    return this.refreshingPromise;
  }

  /**
   * Fetch the resource
   * @param {Object} params
   * @param {string} [params.method]
   * @param {string} params.resource
   * @param {Object} [params.data]
   * @param {string} [params.token]
   */
  async fetch({ method, resource, data, token }) {
    if (!/^https?:\/\//.test(resource)) {
      if (this.isSsr) resource = process.env.SSR_API_SERVER + resource;
      else resource = process.env.API_SERVER + resource;
    }

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json"
    };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    return fetch(resource, {
      method: method || "GET",
      mode: "cors",
      credentials: "include",
      headers,
      body: data && JSON.stringify(data)
    });
  }

  /**
   * Relay query
   * @param {Object} operation
   * @param {Object} variables
   */
  async query(operation, variables /*, cacheConfig, uploadables */) {
    for (;;) {
      try {
        const token = await this.getAccessToken();
        const params = {
          method: "POST",
          resource: constants.graphqlBase,
          data: {
            query: operation.text, // GraphQL text from input
            variables
          }
        };
        if (token) params.token = token;

        const response = await this.fetch(params);

        if (!response.ok)
          throw new Error(`GraphQL: Response ${response.status}`);

        let result = await response.json();

        let isUnauthorized = false;
        if (token && result.errors) {
          for (let error of result.errors) {
            if (error.code === "E_UNAUTHORIZED") {
              // we get this code when we supply an expired token
              isUnauthorized = true;
              break;
            }
          }
        }
        if (isUnauthorized) {
          // refresh the tokens and retry immediately
          await this.refreshTokens();
        } else {
          // return what we got
          return result;
        }
      } catch (error) {
        console.error(error.message);
        if (process.browser || (this.req || {}).aborted === false) {
          // wait a bit and retry
          await new Promise(resolve => setTimeout(resolve, 1000));
        } else {
          // fail the request
          return { errors: [{ message: error.message }] };
        }
      }
    }
  }

  /**
   * Relay subscriptiton
   * @param {Object} operation
   * @param {Object} variables
   * @param {Object} cacheConfig
   */
  subscribe(operation, variables /*, cacheConfig */) {
    this.subConnect();

    const { text: query, name: operationName } = operation;
    return Observable.from(
      this.subClient.request({
        operationName,
        query,
        variables
      })
    );
  }

  /**
   * Connect subscription socket
   */
  subConnect() {
    if (this.subClient) return;

    this.subClient = new SubscriptionClient(
      process.env.WS_SERVER + constants.graphqlBase,
      {
        reconnect: true,
        connectionParams: async () => {
          if (this.refreshingPromise) await this.refreshingPromise;
          return { token: await this.getAccessToken() };
        }
      }
    );
    this.subClient.maxConnectTimeGenerator.duration = () =>
      this.subClient.maxConnectTimeGenerator.max;
    this.subClient.onConnected(this.onSubConnected.bind(this));
    this.subClient.onReconnected(this.onSubReconnected.bind(this));
    this.subClient.onDisconnected(this.onSubDisconnected.bind(this));
    this.subClient.onError(this.onSubError.bind(this));
  }

  /**
   * Disconnect subsctiption socket
   */
  subDisconnect() {
    if (this.subClient) {
      this.subClient.unsubscribeAll();
      this.subClient.close();
      this.subClient = null;
    }
  }

  /**
   * Subscription socket has connected
   */
  async onSubConnected() {
    if (process.env.NODE_ENV === "development")
      console.log("[Subscription] connected");

    this.dispatch(appOperations.setSubscribed({ isSubscribed: true }));
  }

  /**
   * Subscription socket has reconnected
   */
  async onSubReconnected() {
    if (process.env.NODE_ENV === "development")
      console.log("[Subscription] reconnected");

    this.dispatch(appOperations.setSubscribed({ isSubscribed: true }));
  }

  /**
   * Subscription socket has disconnected
   */
  async onSubDisconnected() {
    if (process.env.NODE_ENV === "development")
      console.log("[Subscription] disconnected");

    this.dispatch(appOperations.setSubscribed({ isSubscribed: false }));

    // there is no way with this transport to see why we are disconnected
    // so let's refresh tokens in case the reason was an expired token
    // refreshing tokens is rate limited anyway
    await this.refreshTokens();
  }

  /**
   * An error in subsction socket
   */
  onSubError(error) {
    if (process.env.NODE_ENV === "development") {
      console.error(
        `[Subscription] error: ${
          error.message ? error.message : JSON.stringify(error)
        }`
      );
    }
  }
}

export default Fetcher;
