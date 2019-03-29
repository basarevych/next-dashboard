const crypto = require("crypto");
const LRU = require("lru-cache");
const EventEmitter = require("events");
const isRouteAllowed = require("../../../../common/isRouteAllowed");
const constants = require("../../../../common/constants");
const { locales } = require("../../../../common/locales");
const { defaultTheme } = require("../../../../common/themes");

/**
 * Render and/or cache the page using Next.JS
 */
class CachingProxy extends EventEmitter {
  constructor(app, helpers, renderer) {
    super();

    this.app = app;
    this.helpers = helpers;
    this.renderer = renderer;

    this.numPages = _.keys(constants.pages).length * locales.length;

    //  UserID => { cache: LRU(numPages), user: Object }
    this.caches = new LRU(_.get(app, "config.appOnlineUsers") || 50);
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "middleware.render.cachingProxy";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["app", "middleware.helpers", "middleware.render.nextRenderer"];
  }

  getKey({ req, query }) {
    const hash = crypto.createHash("md5");
    hash.update(JSON.stringify(query));
    return query.locale + ":" + req.path + ":" + hash.digest("hex");
  }

  canRender(...args) {
    return this.renderer.canRender(...args);
  }

  /**
   * Returns either HTML string or null when the default Next
   * request handler should be used instead
   */
  async renderPage({ req, res, page, query, user }) {
    const userId = (user && user.id) || null;
    const name = (user && user.email) || "unauthenticated";
    const key = this.getKey({ req, query });

    let cache = this.caches.has(userId) && this.caches.get(userId).cache;
    if (!cache) cache = new LRU(this.numPages);

    if (cache.has(key)) {
      return cache.get(key).then(html => {
        if (html && res.statusCode === 200 && process.env.NODE_ENV !== "test")
          console.log(`> Cache hit for ${key} for ${name}`);
        return html;
      });
    }

    const delCache = () => {
      let cache = this.caches.has(userId) && this.caches.get(userId).cache;
      if (cache && cache.has(key)) {
        cache.del(key);
        this.caches.set(userId, { cache, user });
      }
    };

    let promise = new Promise(async (resolve, reject) => {
      try {
        const html = await this.renderer.renderPage({
          req,
          res,
          page,
          query,
          user
        });
        if (html && res.statusCode === 200) {
          promise.isDone = true;
          if (process.env.NODE_ENV !== "test")
            console.log(`> Cached ${key} for ${name}`);
        } else {
          delCache();
        }
        resolve(html);
      } catch (error) {
        delCache();
        reject(error);
      }
    });
    promise.isDone = false;
    cache.set(key, promise);
    this.caches.set(userId, { cache, user });
    return promise;
  }

  /**
   * Pre-cache the pages
   */
  async preparePages({ user, path }) {
    try {
      const pages = path
        ? _.isArray(path)
          ? path
          : [path]
        : _.keys(constants.pages);

      const users = _.isUndefined(user)
        ? _.map(Array.from(this.caches.values()), "user") // already cached users
        : _.isArray(user)
        ? user
        : [user];

      for (let user of users) {
        for (let route of pages) {
          for (let locale of locales) {
            if (!isRouteAllowed(route, user ? user.roles : [])) continue;

            const req = {
              path: route,
              locale,
              theme: defaultTheme,
              getUser: () =>
                new Promise(resolve => setTimeout(() => resolve(user)))
            };
            this.helpers.setHelpers(req, {});

            const { page, query } = await this.app.analyzeRequest(req);
            const key = this.getKey({ req, query });
            this.invalidate({ userId: user ? user.id : null, key });

            await this.renderPage({
              req,
              res: { statusCode: 200 },
              page,
              query,
              user
            });
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Remove pages from the cache
   */
  invalidate({ userId, key }) {
    const { cache, user } = this.caches.has(userId)
      ? this.caches.get(userId)
      : {};
    if (!cache) return;

    let [locale, path] = _.split(key, ":");
    for (let item of cache.keys()) {
      if (!_.startsWith(item, `${locale}:${path}:`)) continue;
      let promise = cache.get(item);
      cache.del(item);
      this.caches.set(userId, { cache, user });
      if (promise.isDone && process.env.NODE_ENV !== "test") {
        const name = (user && user.email) || "unauthenticated";
        console.log(`> Invalidated ${item} for ${name}`);
      }
    }
  }
}

module.exports = CachingProxy;
