const debug = require("debug")("app:sitemap");
const EventEmitter = require("events");
const Router = require("express").Router;
const constants = require("../../../common/constants");

/**
 * Sitemap route
 */
class SitemapRoute extends EventEmitter {
  constructor(config) {
    super();

    this.config = config;
    this.router = Router();
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "route.sitemap";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["config"];
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = Promise.resolve();
    this.router.get("/sitemap.xml", this.getSitemap.bind(this));
  }

  /**
   * GET /sitemap.xml
   * @param {object} req
   * @param {object} res
   * @param {function} next
   */
  async getSitemap(req, res, next) {
    debug("Got request");

    let urls = _.flatMap(this.config.appOrigins, url =>
      _.compact(
        _.map(constants.pages, (info, path) =>
          info.roles ? false : "<url><loc>" + url + path + "</loc></url>"
        )
      )
    ).join("\n");

    let response = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

    res.set("content-type", "application/xml; charset=utf-8");
    res.send(response);
  }
}

module.exports = SitemapRoute;
