const crypto = require("crypto");
const LRU = require("lru-cache");
const EventEmitter = require("events");
const constants = require("../../../common/constants");
const { defaultTheme } = require("../../../common/themes");
const isRouteAllowed = require("../../../common/isRouteAllowed");

/**
 * Render and/or cache the page using Next.JS
 */
class Render extends EventEmitter {
  constructor(app, i18n, helpers) {
    super();

    this.app = app;
    this.i18n = i18n;
    this.helpers = helpers;

    this.numPages = _.keys(constants.pages).length * i18n.locales.length;
    this.usersCache = null;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "middleware.render";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["app", "i18n", "middleware.helpers"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = Promise.resolve();
    this.usersCache = new LRU(this.app.config.appOnlineUsers);
    this.app.server.once("listening", () => this.preCachePages({ user: null }));
  }

  async express(express) {
    express.get("*", async (req, res, next) => {
      try {
        req.cookieHeader = req.get("Cookie");
        req.csrfHeader = _.isFunction(req.csrfToken) ? req.csrfToken() : "none";

        const { page, query } = await this.app.analyzeRequest(req);
        if (!page) return this.app.nextHandler(req, res, next);

        let user = await req.getUser();
        if (!isRouteAllowed(req.path, user ? user.roles : [])) {
          if (req.path === "/" || !!user) {
            res.status(403);
          } else {
            return res.redirect(
              `/?redirect=${encodeURIComponent(req.originalUrl)}`
            );
          }
        }

        if (process.env.NODE_ENV !== "production")
          return this.app.next.render(req, res, page, query);

        let render = this.getRender({ req, res, page, query, user });
        if (!render) return this.app.next.render(req, res, page, query);

        render
          .then(html => res.send(html))
          .catch(error => {
            if (!res.headersSent)
              this.app.next.renderError(error, req, res, page, query);
          });
      } catch (error) {
        next(error);
      }
    });
  }

  async getRender({ req, res, page, query, user, force }) {
    const id = (user && user.id) || null;
    const name = (user && user.email) || "unauthenticated";
    const cache = this.usersCache.has(id)
      ? this.usersCache.get(id).cache
      : new LRU(this.numPages);

    const hash = crypto.createHash("md5");
    hash.update(JSON.stringify(query));

    const key = query.locale + ":" + req.path + ":" + hash.digest("hex");

    if (user && (!req.cookieHeader || !req.csrfHeader)) {
      // just invalidate the cached version when not enough data to render
      if (cache.has(key)) {
        cache.del(key);
        console.log(`> Invalidated ${key} for ${name}`);
      }
      return Promise.resolve();
    }

    if (!force && cache.has(key)) {
      console.log(`> Cache hit ${key} for ${name}`);
      return cache.get(key);
    }

    // render and cache the page
    cache.set(
      key,
      new Promise(async (resolve, reject) => {
        try {
          let html = await this.app.next.renderToHTML(req, res, page, query);
          if (res.statusCode !== 200)
            throw new Error(`Could not render ${key} [User: ${name}]`);
          console.log(`> Cached ${key} for ${name}`);
          resolve(html);
        } catch (error) {
          reject(error);
        }
      })
    );

    this.usersCache.set(id, { cache, user });
    return cache.get(key);
  }

  async preCachePages({ user, path }) {
    if (process.env.NODE_ENV !== "production") return;

    try {
      let promises = [];

      const pages = _.isUndefined(path)
        ? _.keys(constants.pages)
        : _.isArray(path)
        ? path
        : [path];

      const users = _.isUndefined(user)
        ? _.map(Array.from(this.usersCache.values()), "user")
        : _.isArray(user)
        ? user
        : [user];

      for (let user of users) {
        for (let route of pages) {
          if (!isRouteAllowed(route, user ? user.roles : [])) continue;
          for (let locale of this.i18n.locales) {
            let req = {
              path: route,
              locale,
              theme: defaultTheme,
              getUser: () =>
                new Promise(resolve => setTimeout(() => resolve(user)))
            };
            this.helpers.setHelpers(req, {});
            let { page, query } = await this.app.analyzeRequest(req);
            let render = this.getRender({
              req,
              res: { statusCode: 200 },
              page,
              query,
              user,
              force: true
            });
            if (render) promises.push(render);
          }
        }
      }

      await Promise.all(promises);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Render;
