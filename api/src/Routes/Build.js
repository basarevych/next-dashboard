const debug = require("debug")("app:build");
const path = require("path");
const fs = require("fs-extra");
const EventEmitter = require("events");
const Router = require("express").Router;

/**
 * Build Info route
 */
class BuildRoute extends EventEmitter {
  constructor() {
    super();

    this.router = Router();
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "routes.build";
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = Promise.resolve();
    this.router.get("/build.json", this.getBuildInfo.bind(this));
  }

  /**
   * GET /build.json
   * Returns build ID and all the file names in /static directory
   * @param {object} req
   * @param {object} res
   * @param {function} next
   */
  async getBuildInfo(req, res, next) {
    debug("Got request");

    try {
      let root = path.join(__dirname, "..", "..", "..");
      let info = {
        assets: []
      };
      try {
        info.buildId = _.trim(
          await fs.readFile(path.join(root, ".next", "BUILD_ID"), "utf8")
        );
      } catch (error) {
        // do nothing
      }
      const scanStatic = async dir => {
        for (let name of await fs.readdir(path.join(root, dir))) {
          let relative = path.join(dir, name);
          let stats;
          try {
            stats = await fs.lstat(path.join(root, relative));
          } catch (error) {
            console.error(error.message);
            continue;
          }
          if (stats.isSymbolicLink()) continue;
          if (stats.isDirectory()) await scanStatic(relative);
          if (stats.isFile()) info.assets.push(path.join("/", relative));
        }
      };

      await scanStatic("static");

      res.json(info);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = BuildRoute;
