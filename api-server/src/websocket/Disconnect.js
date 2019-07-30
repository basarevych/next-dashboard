const debug = require("debug")("app:disconnect");

class Disconnect {
  constructor(ws) {
    this.ws = ws;
    this.socket = null;
  }

  static get $provides() {
    return "ws.disconnect";
  }

  static get $requires() {
    return ["ws"];
  }

  async init() {
    if (this.promise) return this.promise;
    this.promise = await this.ws.init();
    return this.promise;
  }

  accept({ socket }) {
    this.socket = socket;
    socket.on("disconnect", this.onDisconnect.bind(this));
  }

  async onDisconnect() {
    let { user: curUser, client: curClient } = this.socket.request.token || {};
    debug(
      `Socket of ${curUser ? curUser.id : "anonymous"} (${
        curClient ? curClient.id : "unknown"
      }) disconnected`
    );
  }
}

module.exports = Disconnect;
