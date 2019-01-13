import io from "socket.io-client";
import { appOperations, appSelectors } from "../state";
import { authOperations } from "../../auth/state";
import constants from "../../../common/constants";
import pkg from "../../../package.json";

class Socket {
  constructor(getState, dispatch) {
    if (!process.browser) return;

    this.getState = getState;
    this.dispatch = dispatch;

    this.socket = io({
      path: constants.socketsBase,
      autoConnect: false
    });
    this.socket.on(constants.messages.HELLO, this.onHello.bind(this));
    this.socket.on(constants.messages.SET_STATUS, this.onSetStatus.bind(this));
    this.socket.on("disconnect", this.onDisconnect.bind(this));
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "socket";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["getState", "dispatch"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  emit(message, data, cb) {
    if (!process.browser) return;

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
    if (!process.browser) return;

    if (!appSelectors.isConnected(this.getState())) this.socket.connect();
    this.emit(constants.messages.HELLO, { version: pkg.version });
  }

  disconnect() {
    if (!process.browser) return;

    if (appSelectors.isConnected(this.getState())) this.socket.disconnect();
  }

  async onHello(msg) {
    try {
      if (process.env.NODE_ENV === "development")
        console.log(`[WS] <-- ${constants.messages.HELLO} v${msg.version}`);

      if (msg.version !== pkg.version) {
        await this.dispatch(appOperations.stop());
        return setTimeout(() => window.location.reload(), 3000);
      }

      await this.dispatch(appOperations.setConnected({ isConnected: true }));
    } catch (error) {
      console.error(error);
    }
  }

  async onSetStatus(msg) {
    try {
      if (process.env.NODE_ENV === "development") {
        console.log(
          `[WS] <-- ${constants.messages.SET_STATUS} authenticated: ${
            msg.isAuthenticated
          }`
        );
      }

      await this.dispatch(authOperations.setStatus(msg));
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
