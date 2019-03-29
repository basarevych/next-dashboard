const debug = require("debug")("app:render");
const EventEmitter = require("events");
const isRouteAllowed = require("../../../common/isRouteAllowed");

/**
 * Render and/or cache the page using Next.JS
 */
class Render extends EventEmitter {
  constructor(app, renderer) {
    super();

    this.app = app;
    this.renderer = renderer;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "middleware.render";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return [
      "app",
      process.env.NODE_ENV === "production" // we are caching in production only
        ? "middleware.render.cachingProxy"
        : "middleware.render.nextRenderer"
    ];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    if (this.promise) return this.promise;
    this.promise = Promise.resolve();
    this.app.server.once("listening", () => this.preparePages({ user: null }));
  }

  accept({ express }) {
    express.get("*", this.renderPage.bind(this));
    express.get("*", this.app.next.getRequestHandler());
  }

  async renderPage(req, res, next) {
    const { page, query } = await this.app.analyzeRequest(req);
    if (!page) {
      // Don't try doing SSR for the resource files
      return next();
    }

    try {
      const user = await req.getUser();
      if (!isRouteAllowed(req.path, user ? user.roles : [])) {
        if (req.path !== "/" && !user)
          return res.redirect(`/?redirect=${encodeURIComponent(req.path)}`);
        res.status(403);
        return this.app.next.render(req, res, page, query);
      }

      const html = await this.renderer.renderPage({
        req,
        res,
        page,
        query,
        user
      });
      if (html) res.send(html);
      else this.app.next.render(req, res, page, query);
    } catch (error) {
      debug(`Renderer: ${error.message}`);
      if (res.headersSent) next(error);
      else this.app.next.renderError(error, req, res, page, query);
    }
  }

  async preparePages(...args) {
    return this.renderer.preparePages(...args);
  }
}

module.exports = Render;
