const debug = require("debug")("app:ws");
const uuid = require("uuid");
const pkg = require("../../package.json");
const IO = require("socket.io");
const EventEmitter = require("events");
const { usersOperations, usersSelectors } = require("../state/users");
const constants = require("../../common/constants");

class WebSocket extends EventEmitter {
  constructor(app, config, getState, dispatch) {
    super();

    this.app = app;
    this.config = config;
    this.getState = getState;
    this.dispatch = dispatch;

    this.sessionTimeout = 15 * 60 * 1000;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "ws";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["app", "config", "getState", "dispatch"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    this.io = new IO(this.app.server, {
      path: constants.socketsBase
    });
    this.io.on("connection", this.onConnection.bind(this));

    this.timer = setInterval(async () => {
      let offlineUsers = usersSelectors.getOfflineUsersList(this.getState(), {
        sessionTimeout: this.sessionTimeout
      });

      if (!offlineUsers.size) return;

      await Promise.all(
        offlineUsers // eslint-disable-line lodash/prefer-lodash-method
          .map(userId => {
            debug(`Destroying inactive user ${userId}`);
            this.dispatch(usersOperations.remove({ userId })).catch(
              console.error
            );
          })
          .toJS()
      );
    }, 60 * 1000);
  }

  emit(userId, message, data) {
    let sessions = usersSelectors.getSessionsMap(this.getState(), {
      userId
    });

    if (sessions && sessions.size) {
      // eslint-disable-next-line lodash/prefer-lodash-method
      sessions.forEach(session => {
        // eslint-disable-next-line lodash/prefer-lodash-method
        session
          .get("sockets")
          .forEach(
            info => info.get("socket") && info.get("socket").emit(message, data)
          );
      });
    }
  }

  async emitStatus(socket, user) {
    if (_.isUndefined(user)) user = await socket.request.getUser();
    socket.emit(
      constants.messages.SET_STATUS,
      socket.request.di.get("auth").getStatus(user)
    );
  }

  async onConnection(socket) {
    try {
      let user = await socket.request.getUser();
      if (!user) {
        debug("Unauthorized socket dropped");
        this.emitStatus(socket, null);
        return process.nextTick(() => socket.disconnect(true));
      }

      const userId = user._id.toString();
      const sessionId = socket.request.session.id;
      const socketId = uuid.v4();

      debug(`Socket ${socketId} connected`);

      socket.on(
        "disconnect",
        this.onDisconnect.bind(this, userId, sessionId, socketId)
      );

      await this.dispatch(
        usersOperations.addSocket({
          userId,
          sessionId,
          socketId,
          socket
        })
      );

      socket.emit(constants.messages.HELLO, { version: pkg.version });
    } catch (error) {
      console.error(error);
    }
  }

  async onDisconnect(userId, sessionId, socketId) {
    try {
      debug(`Socket ${socketId} disconnected`);
      await this.dispatch(
        usersOperations.removeSocket({ userId, sessionId, socketId })
      );
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = WebSocket;
