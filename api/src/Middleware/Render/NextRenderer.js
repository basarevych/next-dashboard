const EventEmitter = require("events");

/**
 * Render and/or cache the page using Next.JS
 */
class NextRenderer extends EventEmitter {
  constructor(app) {
    super();

    this.app = app;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "middleware.render.nextRenderer";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["app"];
  }

  canRender({ req, user }) {
    // When we have a user their cookies and CSRF token must
    // be forwarded to our own GraphQL API when doing the SSR
    // for this user
    return !user || (!!req.cookieHeader && !!req.csrfHeader);
  }

  /**
   * Returns the page rendered into an HTML string
   * or null when can't render
   */
  async renderPage({ req, res, page, query, user }) {
    if (!this.canRender({ req, user })) return null;
    return this.app.next.renderToHTML(req, res, page, query);
  }

  async preparePages() {}
}

module.exports = NextRenderer;
