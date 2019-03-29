const EventEmitter = require("events");
const constants = require("../../../common/constants");

class Toast extends EventEmitter {
  constructor(ws, pubsub) {
    super();

    this.ws = ws;
    this.pubsub = pubsub;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "ws.toast";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["ws", "pubsub"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = Promise.resolve();

    this.pubsub.subscribe("toast", ({ toast }) =>
      this.onToastBroadcasted({ toast })
    );
  }

  accept({ userId, sessionId, socket }) {
    socket.on(
      constants.messages.TOAST,
      this.onToastRequest.bind(this, { userId, sessionId, socket })
    );
  }

  async onToastBroadcasted({ toast }) {
    this.ws.io.emit(constants.messages.TOAST, toast);
  }

  async onToastRequest({ /* userId, sessionId, */ socket }, msg) {
    let user = await this.ws.checkUser(socket);
    if (!user) return;

    this.pubsub.publish("toast", { toast: msg });
  }
}

module.exports = Toast;
