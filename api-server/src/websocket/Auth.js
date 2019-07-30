const debug = require("debug")("app:auth");
const constants = require("../../common/constants");

class Auth {
  constructor(ws, cache, auth) {
    this.ws = ws;
    this.cache = cache;
    this.auth = auth;
    this.socket = null;

    this.onAuth = this.onAuth.bind(this);
    this.onSignOut = this.onSignOut.bind(this);
    this.onUserDeleted = this.onUserDeleted.bind(this);
  }

  static get $provides() {
    return "ws.auth";
  }

  static get $requires() {
    return ["ws", "cache", "auth"];
  }

  async init() {
    if (this.promise) return this.promise;
    this.promise = Promise.all([this.ws.init(), this.cache.init()]);
    return this.promise;
  }

  accept({ socket }) {
    this.socket = socket;
    socket.on(constants.messages.AUTH, this.onAuth);

    this.cache.pubsub.subscribe("signOut", this.onSignOut);
    this.cache.pubsub.subscribe("userDeleted", this.onUserDeleted);
  }

  async useToken(token) {
    if (!token) {
      this.socket.request.token = undefined;
      return;
    }

    let decoded = await this.auth.useToken(token);
    if (
      !decoded ||
      decoded.type !== "access" ||
      !decoded.user ||
      !decoded.client
    ) {
      decoded = false;
    }
    this.socket.request.token = decoded;
  }

  async sendAuthMessage() {
    const msg = {
      isValid: this.socket.request.token !== false,
      isAuthenticated: !!this.socket.request.token
    };
    this.socket.emit(constants.messages.AUTH, msg);
  }

  async onAuth({ token }) {
    let { user: oldUser, client: oldClient } = this.socket.request.token || {};
    await this.useToken(token);
    let { user, client } = this.socket.request.token || {};

    this.socket.leave(`user:${oldUser ? _.toUpper(oldUser.id) : "anonymous"}`);
    this.socket.leave(
      `client:${oldClient ? _.toUpper(oldClient.id) : "unknown"}`
    );

    this.socket.join(`user:${user ? _.toUpper(user.id) : "anonymous"}`);
    this.socket.join(`client:${client ? _.toUpper(client.id) : "unknown"}`);

    await this.sendAuthMessage();

    debug(
      `Socket of ${user ? user.id : "anonymous"} (${
        client ? client.id : "unknown"
      }) authenticated`
    );
  }

  async onSignOut({ signOut }) {
    let { user: curUser, client: curClient } = this.socket.request.token || {};
    if (
      curUser &&
      curUser.id === signOut.user.id &&
      curClient &&
      curClient.id === signOut.client.id
    ) {
      this.socket.request.token = await this.auth.useToken(null);
      await this.sendAuthMessage();

      debug(
        `Socket of ${curUser ? curUser.id : "anonymous"} (${
          curClient ? curClient.id : "unknown"
        }) deauthenticated`
      );
    }
  }

  async onUserDeleted({ userDeleted }) {
    let { user: curUser, client: curClient } = this.socket.request.token || {};
    if (curUser && curUser.id === userDeleted.id) {
      this.socket.request.token = await this.auth.useToken(null);
      await this.sendAuthMessage();

      debug(
        `Socket of ${curUser ? curUser.id : "anonymous"} (${
          curClient ? curClient.id : "unknown"
        }) deleted`
      );
    }
  }
}

module.exports = Auth;
