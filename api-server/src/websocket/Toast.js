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
    return Promise.all([this.ws.init(), this.cache.init()]);
  }

  async subscribe({ socket }) {
    this.socket = socket;

    this.toastSubscription = await this.cache.pubsub.subscribe(
      "toast",
      this.onToastBroadcast
    );

    socket.on(constants.messages.TOAST, this.onToastRequest);
  }

  async unsubscribe({ socket }) {
    this.socket = null;

    await this.cache.pubsub.unsubscribe(this.toastSubscription);

    socket.removeListener(constants.messages.TOAST, this.onToastRequest);
  }

  // when a WebSocket sends "toast", broadcast the event via PubSub
  async onToastRequest(toast) {
    debug("Toast requested");
    this.cache.pubsub.publish("toast", { toast });
  }

  // somebody broadcasted "toast", notify the connected socket
  async onToastBroadcast({ toast }) {
    if (!this.socket) return;
    debug("Toast broadcasted");
    this.socket.emit(constants.messages.TOAST, toast);
  }
}

module.exports = Toast;
