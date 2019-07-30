const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

/**
 * Parse request
 */
class Parse {
  constructor(di, auth) {
    this.di = di;
    this.auth = auth;
  }

  static get $provides() {
    return "middleware.parse";
  }

  static get $requires() {
    return ["di", "auth"];
  }

  async init() {}

  accept({ express }) {
    express.use(bodyParser.json());
    express.use(bodyParser.urlencoded({ extended: true }));
    express.use(cookieParser());
    express.use(this.extractToken.bind(this));
  }

  async extractToken(req, res, next) {
    let auth = _.split(req.headers.authorization || "", " ");
    let token = auth.length === 2 && auth[0] === "Bearer" && auth[1];

    // req.token is:
    //    undefined - when no token was provided (anonymous),
    //    false - token is invalid
    //    payload - token payload when token is valid

    if (token) {
      /* eslint-disable require-atomic-updates */
      req.token = await this.auth.useToken(token);
      if (req.token && !_.includes(["access", "oneTime"], req.token.type))
        req.token = false;
      /* eslint-enable require-atomic-updates */
    }

    next();
  }
}

module.exports = Parse;
