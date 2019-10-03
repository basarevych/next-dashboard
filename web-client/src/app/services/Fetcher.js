import fetch from "isomorphic-unfetch";
import { SubscriptionClient } from "subscriptions-transport-ws";
import constants from "../../../common/constants";
import { appSelectors, appOperations } from "../state";

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

    if (process.browser) {
      const handleIdentityChanged = () => {
        this.isStarted = true;
        window.removeEventListener(
          constants.events.IDENTITY_CHANGED,
          handleIdentityChanged
        );
      };
      window.addEventListener(
        constants.events.IDENTITY_CHANGED,
        handleIdentityChanged
      );
    }
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
        ? _.get(this.req, "session.accessToken")
        : this.storage.get("accessToken")) || null
    );
  }

  /**
   * Get refresh JWT
   */
  async getRefreshToken() {
    return (
      (this.isSsr
        ? _.get(this.req, "session.refreshToken")
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
            resource: appSelectors.getAppServer(this.getState()) + "/session",
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

        let result = _.get(data, "data.getToken.success", null);
        if (result === true) {
          let accessToken = _.get(data, "data.getToken.token", null);
          let refreshToken = _.get(data, "data.getToken.refreshToken", null);
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
      if (this.isSsr)
        resource = appSelectors.getSsrApiServer(this.getState()) + resource;
      else resource = appSelectors.getApiServer(this.getState()) + resource;
    }

    if (!/^https?:\/\//.test(resource)) {
      console.error(
        "Could not get absolute URL\n" +
          "ssrApiServer: " +
          appSelectors.getSsrApiServer(this.getState()) +
          "\napiServer: " +
          appSelectors.getApiServer(this.getState())
      );
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
        if (!process.browser) return { errors: [{ message: error.message }] };
        else await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }

  /**
   * Relay subscriptiton
   * @param {Object} config
   * @param {Object} variables
   * @param {Object} cacheConfig
   * @param {Object} observer
   */
  subscribe(config, variables, cacheConfig, observer) {
    if (!process.browser) return { dispose: _.noop };

    let isDestroyed = false;
    let isReconnecting = false;
    let client, observable;
    let connect, disconnect, reconnect, dispose, authUpdated;

    const handleConnected = async () => {
      if (process.env.NODE_ENV === "development")
        console.log(`[Subscription] ${config.name} connected`);
      await this.dispatch(
        appOperations.addActiveSubscription({ name: config.name })
      );

      if (isDestroyed) return disconnect();

      observable = client
        .request({
          query: config.text,
          variables
        })
        .subscribe({
          next: observer.onNext,
          complete: observer.onCompleted,
          error: observer.onError
        });
    };

    const handleDisconnected = async () => {
      observable = null;
      if (process.env.NODE_ENV === "development")
        console.log(`[Subscription] ${config.name} disconnected`);
      await this.dispatch(
        appOperations.removeActiveSubscription({ name: config.name })
      );
      if (!isDestroyed) reconnect(true);
    };

    connect = async () => {
      if (isDestroyed) return;

      client = new SubscriptionClient(
        appSelectors.getWsServer(this.getState()) + constants.graphqlBase,
        {
          reconnect: false,
          connectionParams: { token: await this.getAccessToken() }
        }
      );
      client.maxConnectTimeGenerator.duration = () =>
        client.maxConnectTimeGenerator.max;
      client.onConnected(handleConnected);
      client.onDisconnected(handleDisconnected);
      client.onError(async error => {
        if (process.env.NODE_ENV === "development")
          console.error(
            `[Subscription] ${config.name} error`,
            error.message || "Network error"
          );
        handleDisconnected();
      });
    };

    disconnect = async () => {
      if (client) {
        client.close();
        client = null;
      }
    };

    reconnect = async doRefreshTokens => {
      if (isDestroyed || isReconnecting) return;
      isReconnecting = true;
      await disconnect();
      if (doRefreshTokens && (await this.getRefreshToken()))
        await this.refreshTokens();
      setTimeout(async () => {
        isReconnecting = false;
        if (!isDestroyed) await connect();
      }, 1000);
    };

    authUpdated = async () => {
      reconnect(false);
    };

    dispose = async () => {
      if (isDestroyed) return;
      isDestroyed = true;
      window.removeEventListener(
        constants.events.IDENTITY_CHANGED,
        authUpdated
      );

      if (observable) {
        // graceful shutdown
        observable.unsubscribe();
        observable = null;
      }

      await disconnect();

      if (process.env.NODE_ENV === "development")
        console.log(`[Subscription] ${config.name} disposed`);
    };

    // postpone subscription to the first IDENTITY_CHNAGED event
    // which will fire authUpdated() above, otherwise connect immediately
    window.addEventListener(constants.events.IDENTITY_CHANGED, authUpdated);
    if (this.isStarted) connect().catch(console.error);

    return {
      dispose
    };
  }
}

export default Fetcher;
