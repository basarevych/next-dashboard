const debug = require("debug")("app:hello");
const constants = require("../../common/constants");

class Toast {
  constructor(ws, cache) {
    this.ws = ws;
    this.cache = cache;
    this.socket = null;

    this.onToastRequest = this.onToastRequest.bind(this);
    this.onToastBroadcast = this.onToastBroadcast.bind(this);
  }

  static get $provides() {
    return "ws.toast";
  }

  static get $requires() {
    return ["ws", "cache"];
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = Promise.all([this.ws.init(), this.cache.init()]);

    return this.promise;
  }

  accept({ socket }) {
    this.socket = socket;
    socket.on(constants.messages.TOAST, this.onToastRequest);
    this.cache.pubsub.subscribe("toast", this.onToastBroadcast);
  }

  // when a WebSocket sends "toast", broadcast the event via PubSub
  async onToastRequest(toast) {
    debug("Toast requested");
    this.cache.pubsub.publish("toast", { toast });
  }

  // somebody broadcasted "toast", notify the connected socket
  async onToastBroadcast({ toast }) {
    debug("Toast broadcasted");
    this.socket.emit(constants.messages.TOAST, toast);
  }
}

module.exports = Toast;
