import io from "socket.io-client";
import { appOperations, appSelectors } from "../state";
import constants from "../../../common/constants";
import pkg from "../../../package.json";

/**
 * WebSocket facade
 */
class Socket {
  /**
   * Constructor
   * @param {*} getState
   * @param {*} dispatch
   * @param {*} fetcher
   */
  constructor(getState, dispatch, fetcher) {
    this.getState = getState;
    this.dispatch = dispatch;
    this.fetcher = fetcher;

    if (process.browser) {
      window.addEventListener(
        constants.events.IDENTITY_CHANGED,
        this.onIdentityChanged.bind(this)
      );
      this.connect();
    }
  }

  /**
   * DI name
   */
  static get $provides() {
    return "socket";
  }

  /**
   * DI dependencies
   */
  static get $requires() {
    return ["getState", "dispatch", "fetcher"];
  }

  /**
   * DI lifecycle
   */
  static get $lifecycle() {
    return "singleton";
  }

  /**
   * Send a message
   * @param {string*} message
   * @param {Object} data
   * @param {function} [cb]
   */
  emit(message, data, cb) {
    if (!process.browser && !this.socket) return;

    if (process.env.NODE_ENV === "development")
      console.log(`[WS] --> ${message}`);

    this.socket.emit(
      message,
      data,
      cb &&
        (response => {
          try {
            return cb(response);
          } catch (error) {
            console.log(error);
          }
        })
    );
  }

  /**
   * Connect to the server
   */
  connect() {
    if (!process.browser || this.socket) return;

    this.socket = io(process.env.WS_SERVER, { path: constants.socketsBase });
    this.socket.on(constants.messages.HELLO, this.onHello.bind(this));
    this.socket.on(constants.messages.AUTH, this.onAuth.bind(this));
    this.socket.on(constants.messages.TOAST, this.onToast.bind(this));
    this.socket.on("disconnect", this.onDisconnect.bind(this));
  }

  /**
   * Disconnect from the server
   */
  disconnect() {
    if (!process.browser || !this.socket) return;

    this.socket.disconnect();
    this.socket = null;
  }

  /**
   * Reconnect to the server
   */
  reconnect() {
    this.disconnect();
    this.connect();
  }

  /**
   * Send our identity to the server
   */
  async sendAuth() {
    try {
      // store last user ID so we could see when it changes
      const token = await this.fetcher.getAccessToken();
      const { userId } = appSelectors.getUser(this.getState());
      this.userId = userId;

      this.emit(constants.messages.AUTH, { token });
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * HELLO received
   * @param {Object} msg
   */
  async onHello(msg) {
    try {
      if (process.env.NODE_ENV === "development")
        console.log(`[WS] <-- ${constants.messages.HELLO} v${msg.version}`);

      if (msg.version !== pkg.version) {
        window.__updateReady = true;
        window.dispatchEvent(new CustomEvent(constants.events.UPDATE_READY));
      }

      await this.dispatch(appOperations.setConnected({ isConnected: true }));
      await this.sendAuth();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * AUTH received
   * @param {Object} msg
   */
  async onAuth(msg) {
    try {
      if (process.env.NODE_ENV === "development")
        console.log(
          `[WS] <-- ${constants.messages.AUTH} (isValid: ${msg.isValid}, isAuthenticated: ${msg.isAuthenticated})`
        );

      if ((await this.fetcher.getRefreshToken()) && !msg.isValid)
        await this.fetcher.refreshTokens();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * TOAST received
   * @param {Object} msg
   */
  async onToast(msg) {
    try {
      if (process.env.NODE_ENV === "development")
        console.log(`[WS] <-- ${constants.messages.TOAST}`);
      window.dispatchEvent(
        new CustomEvent(constants.events.TOAST, { detail: msg })
      );
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * The socket was disconnected
   */
  async onDisconnect() {
    try {
      if (process.env.NODE_ENV === "development")
        console.log("[WS] disconnected");

      this.userId = undefined;
      await this.dispatch(appOperations.setConnected({ isConnected: false }));
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * User identity has changed
   */
  async onIdentityChanged() {
    if (typeof this.userId !== "undefined") {
      const { userId } = appSelectors.getUser(this.getState());
      if (userId !== this.userId) return this.sendAuth();
    }
  }
}

export default Socket;
