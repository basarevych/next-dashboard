const constants = require("../../common/constants");

/**
 * Render and possibly cache the page using Next.JS
 */
class Render {
  constructor(app) {
    this.app = app;
  }

  async init() {
    for (let path of Object.keys(constants.pages)) {
      this.app.express.get(
        path,
        this.renderPage.bind(this, constants.pages[path])
      );
    }
  }

  async renderPage(route, req, res, next) {
    const { page } = route;
    const query = await this.app.getQuery(req);
    const userId = req.session.userId || null;

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
          req.session.userId === userId
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
