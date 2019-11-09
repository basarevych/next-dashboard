import fetch from "isomorphic-unfetch";
import { Observable } from "relay-runtime";
import { SubscriptionClient } from "subscriptions-transport-ws";
import constants from "../../../common/constants";
import { appOperations } from "../state";

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

      if (!process.env.STATIC_SITE) {
        // Report the tokens to the SSR server
        try {
          await this.fetch({
            method: "POST",
            resource: process.env.APP_SERVER + "/session",
            data: {
              accessToken,
              refreshToken
            }
          });
        } catch (error) {
          console.error(error.message);
        }
      }

      window.dispatchEvent(new CustomEvent(constants.events.IDENTITY_CHANGED));
    }
  }

  /**
   * Get new JWTs
   */
  async getTokens() {
    const done = async (accessToken, refreshToken) => {
      try {
        await this.setTokens(accessToken, refreshToken);
      } catch (error) {
        console.log(error);
      }
    };

    for (;;) {
      try {
        let refreshToken = await this.getRefreshToken();
        if (!refreshToken) return done(null, null);

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

        if (response.status !== 200)
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
        console.error(error);
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
    this.refreshingPromise = this.getTokens().then(() => {
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

        if (response.status !== 200)
          throw new Error(`GraphQL: Response ${response.status}`);

        let result = await response.json();

        let isUnauthorized = false;
        if (token && result.errors) {
          for (let error of result.errors) {
            if (error.code === "E_UNAUTHORIZED") {
              isUnauthorized = true;
              break;
            }
          }
        }
        if (isUnauthorized) await this.refreshTokens();
        else return result;
      } catch (error) {
        console.error(error.message);
        if (process.browser || (this.req || {}).aborted === false) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        } else {
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

  subConnect() {
    if (this.subClient) return;

    this.subClient = new SubscriptionClient(
      process.env.WS_SERVER + constants.graphqlBase,
      {
        reconnect: true,
        reconnectionAttempts: Number.MAX_SAFE_INTEGER,
        connectionParams: async () => ({ token: await this.getAccessToken() })
      }
    );
    this.subClient.maxConnectTimeGenerator.duration = () =>
      this.subClient.maxConnectTimeGenerator.max;
    this.subClient.onConnected(this.onSubConnected.bind(this));
    this.subClient.onReconnected(this.onSubReconnected.bind(this));
    this.subClient.onDisconnected(this.onSubDisconnected.bind(this));
    this.subClient.onError(this.onSubError.bind(this));
  }

  subDisconnect() {
    if (this.subClient) {
      this.subClient.unsubscribeAll();
      this.subClient.close();
      this.subClient = null;
    }
  }

  async onSubConnected() {
    if (process.env.NODE_ENV === "development")
      console.log("[Subscription] connected");

    this.dispatch(appOperations.setSubscribed({ isSubscribed: true }));
  }

  async onSubReconnected() {
    if (process.env.NODE_ENV === "development")
      console.log("[Subscription] reconnected");

    this.dispatch(appOperations.setSubscribed({ isSubscribed: true }));
  }

  async onSubDisconnected() {
    if (process.env.NODE_ENV === "development")
      console.log("[Subscription] disconnected");

    this.dispatch(appOperations.setSubscribed({ isSubscribed: false }));
  }

  onSubError(error) {
    if (process.env.NODE_ENV === "development")
      console.error("[Subscription] error", error);

    this.dispatch(appOperations.setSubscribed({ isSubscribed: false }));
  }
}

export default Fetcher;
