"use strict";

const crypto = require("crypto");
const LRU = require("lru-cache");
const helpers = require("./helpers");
const constants = require("../../common/constants");
const { locales } = require("../../common/locales");
const { defaultTheme } = require("../../common/themes");
const isRouteAllowed = require("../../common/isRouteAllowed");

const numPages = _.keys(constants.pages).length * locales.length;
let usersCache = null;

async function getRender({ app, req, res, page, query, user, force }) {
  const id = user && user._id.toString();
  const name = (user && user.login) || "unauthenticated";
  const cache = usersCache.has(id)
    ? usersCache.get(id).cache
    : new LRU(numPages);

  const hash = crypto.createHash("md5");
  hash.update(JSON.stringify(query));

  const key =
    query.locale +
    ":" +
    (req.originalUrl || req.path) +
    ":" +
    hash.digest("hex");

  if (!force && cache.has(key)) {
    console.log(`> Cache hit ${key} for ${name}`);
    return cache.get(key);
  }

  cache.set(
    key,
    new Promise(async (resolve, reject) => {
      try {
        let html = await app.next.renderToHTML(req, res, page, query);
        if (res.statusCode !== 200) {
          return reject(new Error(`Could not render ${key} [User: ${name}]`));
        }
        resolve(html);
      } catch (error) {
        reject(error);
      }
    }).then(html => {
      console.log(`> Cached ${key} for ${name}`);
      return html;
    })
  );

  usersCache.set(id, { cache, user });
  return cache.get(key);
}

async function preCachePages(app, { user, path }) {
  if (process.env.NODE_ENV !== "production") return;

  try {
    let promises = [];

    const { setHelpers } = helpers(app);

    const pages = _.isUndefined(path)
      ? _.keys(constants.pages)
      : _.isArray(path)
      ? path
      : [path];

    const users = _.isUndefined(user)
      ? _.map(Array.from(usersCache.values()), "user")
      : _.isArray(user)
      ? user
      : [user];

    for (let user of users) {
      for (let path of pages) {
        if (!isRouteAllowed(path, user ? user.roles : [])) continue;
        for (let locale of locales) {
          let req = {
            path,
            cookies: { locale, theme: defaultTheme },
            getUser: () =>
              new Promise(resolve => setTimeout(() => resolve(user)))
          };
          setHelpers(req);
          let { page, query } = await app.analyzeRequest(req);
          let render = getRender({
            app,
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

module.exports = function(app) {
  if (!usersCache) usersCache = new LRU(app.config.appOnlineUsers);

  return {
    renderPage: async (req, res, next) => {
      const { page, query } = await app.analyzeRequest(req);

      if (!page) return app.nextHandler(req, res, next);

      let user = await req.getUser();
      if (!isRouteAllowed(req.pathname, user ? user.roles : []))
        return res.redirect("/");

      if (process.env.NODE_ENV !== "production")
        return app.next.render(req, res, page, query);

      let render = getRender({ app, req, res, page, query, user });
      if (!render) return app.next.render(req, res, page, query);

      render
        .then(html => res.send(html))
        .catch(error => {
          if (!res.headersSent)
            app.next.renderError(error, req, res, page, query);
        });
    },

    preCachePages: (params = {}) => preCachePages(app, params)
  };
};
