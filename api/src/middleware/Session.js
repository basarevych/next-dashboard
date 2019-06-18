const session = require("express-session");
const RedisStore = require("connect-redis")(session);

/**
 * User sessions
 */
class Session {
  constructor(config, cache) {
    this.config = config;
    this.cache = cache;
    this.cookie = "connect.sid";
  }

  static get $provides() {
    return "middleware.session";
  }

  static get $requires() {
    return ["config", "cache"];
  }

  async init() {}

  async accept({ express }) {
    const store = new RedisStore({ client: this.cache.cacheRedis });

    express.use(
      session({
        name: this.cookie,
        secret: this.config.sessionSecret,
        store,
        resave: false,
        rolling: false,
        saveUninitialized: false,
        cookie: {
          httpOnly: true,
          secure: false,
          maxAge: this.config.sessionMaxAge
        }
      })
    );
  }
}

module.exports = Session;
