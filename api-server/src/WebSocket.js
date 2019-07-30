const IO = require("socket.io");
const constants = require("../../common/constants");
const frontPackage = require("../../web/package.json");

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
      const commands = this.di.get(/^ws\..+$/); // names starting with "ws."
      const inst = Array.from(commands.values());
      await Promise.all(_.invokeMap(inst, "init"));
      _.forEach(inst, command => command.accept({ socket }));
      socket.emit(constants.messages.HELLO, {
        version: frontPackage.version
      });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = WebSocket;
