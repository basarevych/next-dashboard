const csrf = require("csurf");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const EventEmitter = require("events");

/**
 * User sessions with CSRF protection
 */
class Session extends EventEmitter {
  constructor(config, db) {
    super();

    this.config = config;
    this.db = db;

    this.store = null;
    this.session = null;
  }

  static get $provides() {
    return "middleware.session";
  }

  static get $requires() {
    return ["config", "db"];
  }

  static get collection() {
    return "frontSessions";
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = new Promise(async (resolve, reject) => {
      try {
        await this.db.init();

        this.store = new MongoStore({
          mongooseConnection: this.db.mongoose.connection,
          collection: this.constructor.collection
        });

        this.session = session({
          secret: this.config.sessionSecret,
          store: this.store,
          resave: false,
          rolling: false,
          saveUninitialized: false,
          cookie: {
            httpOnly: true,
            secure: false,
            maxAge: this.config.sessionMaxAge
          }
        });

        resolve();
      } catch (error) {
        reject(error);
      }
    });
    return this.promise;
  }

  accept({ express, io }) {
    express.use(this.session);
    if (process.env.NODE_ENV === "production") express.use(csrf());

    io.use((socket, next) =>
      _.get(socket, "request.res")
        ? this.session(socket.request, socket.request.res, next)
        : next()
    );
  }
}

module.exports = Session;
