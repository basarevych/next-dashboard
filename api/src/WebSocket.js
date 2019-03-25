const debug = require("debug")("app:ws");
const pkg = require("../../package.json");
const IO = require("socket.io");
const EventEmitter = require("events");
const constants = require("../../common/constants");

class WebSocket extends EventEmitter {
  constructor(di, app, config, pubsub) {
    super();

    this.di = di;
    this.app = app;
    this.config = config;
    this.pubsub = pubsub;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "ws";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["di", "app", "config", "pubsub"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = Promise.resolve();

    if (this.app.server) {
      this.io = new IO(this.app.server, {
        path: constants.socketsBase
      });
      this.io.on("connection", this.onConnection.bind(this));
    }

    this.pubsub.subscribe("toast", ({ toast }) =>
      this.onToastBroadcasted({ toast })
    );
    this.pubsub.subscribe("signOut", ({ signOut }) =>
      this.onSessionDestroyed({ sessionId: signOut.sessionId })
    );
    this.pubsub.subscribe("userDeleted", ({ userDeleted }) =>
      this.onUserDestroyed({ userId: userDeleted.id })
    );
  }

  async checkUser(socket) {
    let user = await socket.request.getUser();
    if (user) return user;

    debug("Unauthorized socket dropped");
    socket.emit(
      constants.messages.SET_STATUS,
      this.di.get("auth").getStatus(null)
    );
    process.nextTick(() => socket.disconnect(true));
    return false;
  }

  emitUser(userId, message, data) {
    this.io.to(`user:${userId.toString()}`).emit(message, data);
  }

  emitSession(sessionId, message, data) {
    this.io.to(`session:${sessionId.toString()}`).emit(message, data);
  }

  async onConnection(socket) {
    try {
      let user = await this.checkUser(socket);
      if (!user) return;

      const userId = user.id.toString();
      const sessionId = _.get(socket, "request.session.id");

      debug(`Socket of user ${userId} connected`);
      if (userId) socket.join(`user:${userId}`);
      if (sessionId) socket.join(`session:${sessionId}`);
      socket.on("disconnect", this.onDisconnect.bind(this, userId, socket));
      socket.on(
        constants.messages.TOAST,
        this.onToastRequest.bind(this, userId, socket)
      );
      socket.emit(constants.messages.HELLO, { version: pkg.version });
    } catch (error) {
      console.error(error);
    }
  }

  async onToastRequest(userId, socket, msg) {
    let user = await this.checkUser(socket);
    if (!user) return;

    this.pubsub.publish("toast", { toast: msg });
  }

  async onDisconnect(userId) {
    try {
      debug(`Socket of user ${userId} disconnected`);
    } catch (error) {
      console.error(error);
    }
  }

  async onToastBroadcasted({ toast }) {
    this.io.emit(constants.messages.TOAST, toast);
  }

  async onSessionDestroyed({ sessionId }) {
    debug(`Session ${sessionId} destroyed`);
    return this.emitSession(
      sessionId,
      constants.messages.SET_STATUS,
      this.di.get("auth").getStatus(null)
    );
  }

  async onUserDestroyed({ userId }) {
    debug(`User ${userId} destroyed`);
    return this.emitUser(
      userId,
      constants.messages.SET_STATUS,
      this.di.get("auth").getStatus(null)
    );
  }
}

module.exports = WebSocket;
