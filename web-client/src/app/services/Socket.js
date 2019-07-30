import io from "socket.io-client";
import { appSelectors, appOperations } from "../state";
import constants from "../../../common/constants";
import pkg from "../../../package.json";

class Socket {
  constructor(getState, dispatch, fetcher) {
    this.getState = getState;
    this.dispatch = dispatch;
    this.fetcher = fetcher;

    if (process.browser) {
      window.addEventListener(
        constants.events.IDENTITY_CHANGED,
        this.reconnect.bind(this)
      );
    }
  }

  static get $provides() {
    return "socket";
  }

  static get $requires() {
    return ["getState", "dispatch", "fetcher"];
  }

  static get $lifecycle() {
    return "singleton";
  }

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

  connect() {
    if (!process.browser || this.socket) return;

    const apiServer = appSelectors.getWsServer(this.getState());

    this.socket = io(apiServer, { path: constants.socketsBase });
    this.socket.on(constants.messages.HELLO, this.onHello.bind(this));
    this.socket.on(constants.messages.AUTH, this.onAuth.bind(this));
    this.socket.on(constants.messages.TOAST, this.onToast.bind(this));
    this.socket.on("disconnect", this.onDisconnect.bind(this));
  }

  disconnect() {
    if (!process.browser || !this.socket) return;

    this.socket.disconnect();
    this.socket = null;
  }

  reconnect() {
    this.disconnect();
    this.connect();
  }

  async onHello(msg) {
    try {
      if (process.env.NODE_ENV === "development")
        console.log(`[WS] <-- ${constants.messages.HELLO} v${msg.version}`);

      if (msg.version !== pkg.version) {
        window.__updateReady = true;
        window.dispatchEvent(new CustomEvent(constants.events.UPDATE_READY));
      }

      await this.dispatch(appOperations.setConnected({ isConnected: true }));

      this.emit(constants.messages.AUTH, {
        token: await this.fetcher.getAccessToken()
      });
    } catch (error) {
      console.error(error);
    }
  }

  async onAuth(msg) {
    try {
      if (process.env.NODE_ENV === "development")
        console.log(
          `[WS] <-- ${constants.messages.AUTH} (isValid: ${
            msg.isValid
          }, isAuthenticated: ${msg.isAuthenticated})`
        );

      if ((await this.fetcher.getRefreshToken()) && !msg.isValid)
        this.fetcher.refreshTokens().catch(console.error);
    } catch (error) {
      console.error(error);
    }
  }

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

  async onDisconnect() {
    try {
      if (process.env.NODE_ENV === "development")
        console.log("[WS] disconnected");

      await this.dispatch(appOperations.setConnected({ isConnected: false }));
    } catch (error) {
      console.error(error);
    }
  }
}

export default Socket;
