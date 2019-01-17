const debug = require("debug")("app:token");
const jwt = require("jsonwebtoken");
const EventEmitter = require("events");
const Router = require("express").Router;

/**
 * JWT Token route
 */
class TokenRoute extends EventEmitter {
  constructor(config) {
    super();

    this.config = config;
    this.router = Router();
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "route.token";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["config"];
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = Promise.resolve();
    this.router.get("/token", this.getToken.bind(this));
  }

  /**
   * GET /token
   * @param {object} req
   * @param {object} res
   * @param {function} next
   */
  async getToken(req, res, next) {
    debug("Got request");

    try {
      const user = await req.getUser();
      jwt.sign(
        { userId: user.id },
        this.config.sessionSecret,
        { expiresIn: 10 * 60 },
        (error, token) => {
          if (error) return next(error);
          res.json({ token });
        }
      );
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = TokenRoute;
