"use strict";

const styles = require("../../common/themes");

// Alias app services on request object
module.exports = app => {
  const auth = app.di.get("auth");

  const setHelpers = req => {
    req.di = app.di;
    req.preCachePages = app.preCachePages;
    req.getAuthStatus = async () =>
      app.di.get("auth").getStatus(await req.getUser());
  };

  const setLocale = req => {
    let locale = null;

    const i18n = app.di.get("i18n");
    if (i18n.locales.length) {
      if (req.cookies && _.includes(i18n.locales, req.cookies.locale))
        locale = req.cookies.locale;
      if (!locale && req.acceptsLanguages)
        locale = req.acceptsLanguages(i18n.locales);
    }

    if (!locale) locale = i18n.defaultLocale;

    req.locale = locale;
  };

  const setTheme = req => {
    let theme = null;

    let themes = _.keys(styles.themes);
    if (req.cookies && _.includes(themes, req.cookies.theme))
      theme = req.cookies.theme;
    if (!theme && styles.defaultTheme) theme = styles.defaultTheme;
    if (!theme && themes.length) theme = themes[0];

    req.theme = theme;
  };

  const loadUser = async req =>
    new Promise(resolve => {
      auth.passport.initialize()(req, req.res, error => {
        if (error) {
          console.error(`While initializing session user: ${error.message}`);
          req.user = null;
          resolve(null);
        }

        auth.passport.session()(req, req.res, error => {
          if (error) {
            console.error(`While loading session user: ${error.message}`);
            req.user = null;
            resolve(null);
          }

          resolve(req.user);
        });
      });
    });

  const recreateSession = async req =>
    new Promise(resolve => {
      if (!req.session) return resolve();
      req.session.regenerate(error => {
        if (error)
          console.error(`While recreating the session: ${error.message}`);
        req.user = null;
        resolve();
      });
    });

  const saveSession = async req =>
    new Promise(resolve => {
      if (!req.session) return resolve();
      req.session.save(error => {
        if (error) console.error(`While saving the session: ${error.message}`);
        resolve();
      });
    });

  const loadSession = async req =>
    new Promise(resolve => {
      if (!req.session) return resolve();
      req.session.reload(async error => {
        if (error) {
          console.error(`While loading the session: ${error.message}`);
          await app.di.get("auth").signOut(req);
          await recreateSession(req);
          await saveSession(req);
        }
        await loadUser(req);
        resolve();
      });
    });

  return {
    setHelpers,
    express: (req, res, next) => {
      try {
        setHelpers(req);
        setLocale(req);
        setTheme(req);

        req.recreateSession = async () => recreateSession(req);
        req.saveSession = async () => saveSession(req);
        req.loadSession = async () => loadSession(req);

        req.getSession = async () => req.session;
        req.getUser = async () => loadUser(req);

        return next();
      } catch (error) {
        console.error(error);
        return next(error);
      }
    },
    socket: (socket, next) => {
      try {
        setHelpers(socket.request);

        socket.request.recreateSession = async () =>
          recreateSession(socket.request);
        socket.request.saveSession = async () => saveSession(socket.request);
        socket.request.loadSession = async () => loadSession(socket.request);

        socket.request.getSession = async () =>
          loadSession(socket.request).then(() => socket.request.session);
        socket.request.getUser = async () =>
          loadSession(socket.request).then(() => socket.request.user);

        return next();
      } catch (error) {
        console.error(error);
        return next(error);
      }
    }
  };
};
