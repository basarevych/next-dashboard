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
    return Promise.all([this.ws.init(), this.cache.init()]);
  }

  async subscribe({ socket }) {
    this.socket = socket;

    if (!this.signOutSubscription) {
      this.signOutSubscription = await this.cache.pubsub.subscribe(
        "signOut",
        this.onSignOut
      );
    }
    if (!this.userDeletedSubscription) {
      this.userDeletedSubscription = await this.cache.pubsub.subscribe(
        "userDeleted",
        this.onUserDeleted
      );
    }

    socket.on(constants.messages.AUTH, this.onAuth);
  }

  async unsubscribe({ socket }) {
    this.socket = null;

    if (this.signOutSubscription) {
      await this.cache.pubsub.unsubscribe(this.signOutSubscription);
      this.signOutSubscription = null;
    }
    if (this.userDeletedSubscription) {
      await this.cache.pubsub.unsubscribe(this.userDeletedSubscription);
      this.userDeletedSubscription = null;
    }

    socket.removeListener(constants.messages.AUTH, this.onAuth);
  }

  async useToken(token) {
    if (!token) {
      if (this.socket) this.socket.request.token = undefined;
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

    if (this.socket) this.socket.request.token = decoded;
  }

  async sendAuthMessage() {
    const msg = {
      isValid: this.socket && this.socket.request.token !== false,
      isAuthenticated: this.socket && !!this.socket.request.token
    };
    this.socket.emit(constants.messages.AUTH, msg);
  }

  async onAuth({ token }) {
    let { user: oldUser, client: oldClient } =
      (this.socket && this.socket.request.token) || {};

    await this.useToken(token);

    let { user, client } = (this.socket && this.socket.request.token) || {};
    debug(
      `Socket of ${user ? user.id : "anonymous"} (${
        client ? client.id : "unknown"
      }) authenticated`
    );

    if (!this.socket) return;

    this.socket.leave(
      `user:${oldUser ? oldUser.id.toUpperCase() : "anonymous"}`
    );
    this.socket.leave(
      `client:${oldClient ? oldClient.id.toUpperCase() : "unknown"}`
    );

    this.socket.join(`user:${user ? user.id.toUpperCase() : "anonymous"}`);
    this.socket.join(`client:${client ? client.id.toUpperCase() : "unknown"}`);

    return this.sendAuthMessage();
  }

  async onSignOut({ signOut }) {
    if (!this.socket) return;

    let { user: curUser, client: curClient } = this.socket.request.token || {};
    if (
      curUser &&
      curUser.id === signOut.user.id &&
      curClient &&
      curClient.id === signOut.client.id
    ) {
      debug(
        `Socket of ${curUser ? curUser.id : "anonymous"} (${
          curClient ? curClient.id : "unknown"
        }) deauthenticated`
      );

      await this.useToken(null);
      return this.sendAuthMessage();
    }
  }

  async onUserDeleted({ userDeleted }) {
    if (!this.socket) return;

    let { user: curUser, client: curClient } = this.socket.request.token || {};
    if (curUser && curUser.id === userDeleted.id) {
      debug(
        `Socket of ${curUser ? curUser.id : "anonymous"} (${
          curClient ? curClient.id : "unknown"
        }) deleted`
      );

      await this.useToken(null);
      return this.sendAuthMessage();
    }
  }
}

module.exports = Auth;
