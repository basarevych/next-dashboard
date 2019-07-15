const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

/**
 * Parse request
 */
class Parse {
  constructor(app) {
    this.app = app;
  }

  async accept({ express }) {
    express.use(bodyParser.json());
    express.use(bodyParser.urlencoded({ extended: true }));
    express.use(cookieParser());
  }
}

module.exports = Parse;
