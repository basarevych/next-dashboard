const EventEmitter = require("events");
const styles = require("../../../common/themes");

/**
 * Helper functions on req/res objects
 */
class Helpers extends EventEmitter {
  constructor(app, auth, i18n) {
    super();

    this.app = app;
    this.auth = auth;
    this.i18n = i18n;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "middleware.helpers";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["app", "auth", "i18n"];
  }

  async init() {}

  accept({ express, io }) {
    express.use((req, res, next) => {
      try {
        this.setHelpers(req, res);
        this.setLocale(req, res);
        this.setTheme(req, res);

        req.recreateSession = async () => this.recreateSession(req, res);
        req.saveSession = async () => this.saveSession(req, res);
        req.loadSession = async () => this.loadSession(req, res);

        req.getSession = async () => req.session;
        req.getUser = async () => this.loadUser(req, res);

        return next();
      } catch (error) {
        console.error(error);
        return next(error);
      }
    });

    io.use((socket, next) => {
      try {
        this.setHelpers(socket.request, socket.request.res);

        socket.request.recreateSession = async () =>
          this.recreateSession(socket.request, socket.request.res);
        socket.request.saveSession = async () =>
          this.saveSession(socket.request, socket.request.res);
        socket.request.loadSession = async () =>
          this.loadSession(socket.request, socket.request.res);

        socket.request.getSession = async () =>
          this.loadSession(socket.request, socket.request.res).then(
            () => socket.request.session
          );
        socket.request.getUser = async () =>
          this.loadSession(socket.request, socket.request.res).then(
            () => socket.request.user
          );

        return next();
      } catch (error) {
        console.error(error);
        return next(error);
      }
    });
  }

  setHelpers(req /*, res */) {
    const render = this.app.middleware.get("render");

    req.cookieHeader = _.isFunction(req.get) ? req.get("Cookie") : null;
    req.csrfHeader = _.isFunction(req.csrfToken) ? req.csrfToken() : null;

    req.di = this.app.di;
    req.preparePages = render.preparePages.bind(render);
    req.getAuthStatus = async () => this.auth.getStatus(await req.getUser());
  }

  setLocale(req, res) {
    let locale = null;

    if (this.i18n.locales.length) {
      if (req.cookies && _.includes(this.i18n.locales, req.cookies.locale))
        locale = req.cookies.locale;
      if (!locale && req.acceptsLanguages)
        locale = req.acceptsLanguages(this.i18n.locales);
    }

    if (!locale) locale = this.i18n.defaultLocale;

    req.locale = locale;

    res.locals.translate = (key, values, locale = req.locale) =>
      this.i18n.translate(key, values, locale);
  }

  setTheme(req /*, res */) {
    let theme = null;

    let themes = _.keys(styles.themes);
    if (req.cookies && _.includes(themes, req.cookies.theme))
      theme = req.cookies.theme;
    if (!theme && styles.defaultTheme) theme = styles.defaultTheme;
    if (!theme && themes.length) theme = themes[0];

    req.theme = theme;
  }

  async loadUser(req, res) {
    return new Promise(resolve => {
      this.auth.passport.initialize()(req, res, error => {
        if (error) {
          console.error(
            `While initializing the session user: ${error.message}`
          );
          req.user = null;
          resolve(null);
        }

        this.auth.passport.session()(req, res, error => {
          if (error) {
            console.error(`While loading the session user: ${error.message}`);
            req.user = null;
            resolve(null);
          }

          resolve(req.user);
        });
      });
    });
  }

  async recreateSession(req /*, res */) {
    return new Promise(resolve => {
      if (!req.session) return resolve();
      req.session.regenerate(error => {
        if (error)
          console.error(`While recreating the session: ${error.message}`);
        req.user = null;
        resolve();
      });
    });
  }

  async saveSession(req /*, res */) {
    return new Promise(resolve => {
      if (!req.session) return resolve();
      req.session.save(error => {
        if (error) console.error(`While saving the session: ${error.message}`);
        resolve();
      });
    });
  }

  async loadSession(req, res) {
    return new Promise(resolve => {
      if (!req.session) return resolve();
      req.session.reload(async error => {
        if (error) {
          console.error(`While loading the session: ${error.message}`);
          await this.auth.signOut(req);
          await this.recreateSession(req, res);
          await this.saveSession(req, res);
        }
        await this.loadUser(req, res);
        resolve();
      });
    });
  }
}

module.exports = Helpers;
