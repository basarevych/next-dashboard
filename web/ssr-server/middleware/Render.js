/**
 * Render and possibly cache the page using Next.JS
 */
class Render {
  constructor(app) {
    this.app = app;
  }

  async accept({ express }) {
    express.get("*", this.renderPage.bind(this));
    express.get("/_next/*", this.app.next.getRequestHandler());
  }

  async renderPage(req, res, next) {
    const userId = _.get(req, "session.user.userId", null);
    const { page, query, isAllowed } = await this.app.analyzeRequest(req);
    if (!page) return next();

    if (isAllowed && !isAllowed(req.session.user))
      res.status(_.get(req, "session.user.isAuthenticated") ? 403 : 401);

    try {
      let html = null;
      if (process.env.NODE_ENV === "production")
        html = await this.app.cache.getPage({ page, query, userId });
      if (!html) {
        html = await this.app.next.renderToHTML(req, res, page, query);
        if (
          process.env.NODE_ENV === "production" &&
          html &&
          res.statusCode === 200
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
