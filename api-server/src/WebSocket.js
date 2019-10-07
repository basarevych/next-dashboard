const debug = require("debug")("app:ws");
const IO = require("socket.io");
const constants = require("../../common/constants");
const frontPackage = require("../../web-client/package.json");

class WebSocket {
  constructor(app, di) {
    this.app = app;
    this.di = di;
  }

  static get $provides() {
    return "ws";
  }

  static get $requires() {
    return ["app", "di"];
  }

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

    return this.promise;
  }

  emitAll(message, data) {
    this.io.emit(message, data);
  }

  emitUser(userId, message, data) {
    this.io.to(`user:${userId.toString()}`).emit(message, data);
  }

  emitClient(clientId, message, data) {
    this.io.to(`client:${clientId.toString()}`).emit(message, data);
  }

  async onConnection(socket) {
    try {
      let { user: curUser, client: curClient } = socket.request.token || {};
      debug(
        `Socket of ${curUser ? curUser.id : "anonymous"} (${
          curClient ? curClient.id : "unknown"
        }) connected`
      );

      const handlers = this.di.get(/^ws\..+$/); // names starting with "ws."

      // Initialize
      await Promise.all(Array.from(handlers.values(), item => item.init()));

      // Subscribe
      await Promise.all(
        Array.from(handlers.values(), item => item.subscribe({ socket }))
      );

      socket.on("disconnect", async () => {
        let { user: curUser, client: curClient } = socket.request.token || {};
        debug(
          `Socket of ${curUser ? curUser.id : "anonymous"} (${
            curClient ? curClient.id : "unknown"
          }) disconnected`
        );

        // Unsubscribe
        await Promise.all(
          Array.from(handlers.values(), item => item.unsubscribe({ socket }))
        );
      });

      // Start
      socket.emit(constants.messages.HELLO, {
        version: frontPackage.version
      });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = WebSocket;
