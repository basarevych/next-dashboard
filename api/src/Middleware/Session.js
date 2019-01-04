const csrf = require("csurf");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const EventEmitter = require("events");

/**
 * User sessions & CSRF protection
 */
class Session extends EventEmitter {
  constructor(app, db) {
    super();

    this.app = app;
    this.db = db;

    this.store = null;
    this.session = null;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "middleware.session";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["app", "db"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = new Promise(async (resolve, reject) => {
      try {
        await this.db.init();

        this.store = new MongoStore({
          mongooseConnection: this.db.mongoose.connection,
          collection: "frontSessions"
        });

        this.session = session({
          secret: this.app.config.sessionSecret,
          store: this.store,
          resave: false,
          rolling: false,
          saveUninitialized: false,
          cookie: {
            httpOnly: true,
            secure: false,
            maxAge: this.app.config.sessionMaxAge
          }
        });

        resolve();
      } catch (error) {
        reject(error);
      }
    });
    return this.promise;
  }

  async express(express) {
    express.use(this.session);
    if (process.env.NODE_ENV === "production") express.use(csrf());
  }

  async io(io) {
    io.use((socket, next) =>
      _.get(socket, "request.res")
        ? this.session(socket.request, socket.request.res, next)
        : next()
    );
  }
}

module.exports = Session;
