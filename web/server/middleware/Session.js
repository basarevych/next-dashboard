const session = require("express-session");
const RedisStore = require("connect-redis")(session);

/**
 * User sessions
 */
class Session {
  constructor(app) {
    this.app = app;
    this.cookie = "connect.sid";
  }

  async accept({ express }) {
    const store = new RedisStore({ client: this.app.cache.redis });

    express.use(
      session({
        name: this.cookie,
        secret: this.app.config.sessionSecret,
        store,
        resave: false,
        rolling: false,
        saveUninitialized: false,
        cookie: {
          httpOnly: true,
          secure: false,
          maxAge: this.app.config.sessionMaxAge
        }
      })
    );
  }
}

module.exports = Session;
