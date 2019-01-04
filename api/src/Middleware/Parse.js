const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const EventEmitter = require("events");

/**
 * Parse request
 */
class Parse extends EventEmitter {
  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "middleware.parse";
  }

  async init() {}

  async express(express) {
    express.use(bodyParser.json());
    express.use(bodyParser.urlencoded({ extended: true }));
    express.use(cookieParser());
  }
}

module.exports = Parse;
