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
    for (let path of Object.keys(constants.pages)) {
      this.app.express.get(path, this.renderPage.bind(this, path));
    }
  }

  async getUser(req) {
    if (req.session.user) return req.session.user;
    const user = getCurrentUser(this.app.config.appSsrApiServer, null);
    if (!user) throw new Error("Could not get default user");
    return user;
  }

  async renderPage(path, req, res, next) {
    const { page } = constants.pages[path];
    const query = await this.app.getQuery(path, req);
    const userId = (await this.getUser(req)).userId;

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
          (await this.getUser(req)).userId === userId
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
