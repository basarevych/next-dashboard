const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const EventEmitter = require("events");

/**
 * Parse request
 */
class Parse extends EventEmitter {
  static get $provides() {
    return "middleware.parse";
  }

  async init() {}

  accept({ express }) {
    express.use(bodyParser.json());
    express.use(bodyParser.urlencoded({ extended: true }));
    express.use(cookieParser());
  }
}

module.exports = Parse;
