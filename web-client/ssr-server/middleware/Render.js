const constants = require("../../common/constants");
const getCurrentUser = require("../../src/app/lib/getCurrentUser");

/**
 * Render and possibly cache the page using Next.JS
 */
class Render {
  constructor(app) {
    this.app = app;
  }

  async init() {
    this.defaultUser = getCurrentUser(this.app.config.appSsrApiServer, null);
    if (!this.defaultUser) throw new Error("Could not get default user");

    for (let path of Object.keys(constants.pages)) {
      this.app.express.get(path, this.renderPage.bind(this, path));
    }
  }

  async renderPage(path, req, res, next) {
    if (!req.session.user) req.session.user = this.defaultUser;

    const getUserId = () => ((req.session || {}).user || {}).userId || null;

    const { page } = constants.pages[path];
    const query = await this.app.getQuery(req);
    const userId = getUserId();

    try {
      let html = null;
      if (process.env.NODE_ENV === "production")
        html = await this.app.cache.getPage({ page, query, userId });
      if (!html) {
        html = await this.app.next.renderToHTML(req, res, page, query);
        if (
          process.env.NODE_ENV === "production" &&
          html &&
          res.statusCode === 200 &&
          getUserId() === userId
        ) {
          await this.app.cache.setPage({ page, query, userId, html });
        }
      }

      if (html) res.send(html);
      else next();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Render;
