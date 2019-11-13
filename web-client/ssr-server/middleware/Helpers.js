const l10n = require("../../common/locales");
const themes = require("../../styles/themes");
const getCurrentUser = require("../../src/app/lib/getCurrentUser");

/**
 * Helper functions on req/res objects
 */
class Helpers {
  constructor(app) {
    this.app = app;
  }

  async init() {
    this.app.express.use(async (req, res, next) => {
      try {
        // Set locale
        let locale = null;
        if (l10n.locales.length) {
          if (req.cookies && l10n.locales.includes(req.cookies.locale))
            locale = req.cookies.locale;
          if (!locale && req.acceptsLanguages)
            locale = req.acceptsLanguages(l10n.locales);
        }
        if (!locale) locale = l10n.defaultLocale;
        req.locale = locale;

        // Set theme
        let theme = null;
        if (req.cookies && themes.names.includes(req.cookies.theme))
          theme = req.cookies.theme;
        if (!theme && themes.defaultTheme) theme = themes.defaultTheme;
        if (!theme && themes.names.length) theme = themes.names[0];
        req.theme = theme;

        // Save tokens
        req.setTokens = async (accessToken, refreshToken) => {
          const user = await getCurrentUser(
            this.app.config.appSsrApiServer,
            accessToken
          );
          if (!user) throw new Error("Could not fetch current user");

          req.session.user = user;
          req.session.accessToken = user.isAuthenticated ? accessToken : null;
          req.session.refreshToken = user.isAuthenticated ? refreshToken : null;

          return new Promise((resolve, reject) => {
            req.session.save(error => {
              if (error) return reject(error);
              resolve();
            });
          });
        };

        return next();
      } catch (error) {
        return next(error);
      }
    });
  }
}

module.exports = Helpers;
