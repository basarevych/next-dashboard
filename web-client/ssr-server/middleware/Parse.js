const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

/**
 * Parse request
 */
class Parse {
  constructor(app) {
    this.app = app;
  }

  async init() {
    this.app.express.use(bodyParser.json());
    this.app.express.use(bodyParser.urlencoded({ extended: true }));
    this.app.express.use(cookieParser());
  }
}

module.exports = Parse;
