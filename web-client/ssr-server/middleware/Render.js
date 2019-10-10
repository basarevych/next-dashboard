/**
 * Render and possibly cache the page using Next.JS
 */
class Render {
  constructor(app) {
    this.app = app;
  }

  async accept({ express }) {
    express.get("*", this.renderPage.bind(this));
    //express.get(this.app.next.getRequestHandler());
  }

  async renderPage(req, res, next) {
    const { page, query, isAllowed } = await this.app.analyzeRequest(req);
    if (!page) return next();

    const user = req.session.user || {};
    const userId = user.userId || null;
    if (typeof isAllowed === "function" && !isAllowed(user))
      res.status(user.isAuthenticated ? 403 : 401);

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
