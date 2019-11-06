const constants = require("../../common/constants");
const l10n = require("../../common/locales");
const themes = require("../../styles/themes");

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
          let user = null;
          if (accessToken) {
            const response = await fetch(
              this.app.config.appSsrApiServer + constants.graphqlBase,
              {
                method: "POST",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                  query: `{
                      viewer {
                        me {
                          isAuthenticated
                          userId
                        }
                      }
                    }`
                })
              }
            );
            if (response.status === 200) {
              const result = await response.json();
              user = ((result.data || {}).viewer || {}).me || null;
            }
          }

          const isAuthenticated = user && user.isAuthenticated;
          req.session.userId = isAuthenticated ? user.userId : null;
          req.session.accessToken = isAuthenticated ? accessToken : null;
          req.session.refreshToken = isAuthenticated ? refreshToken : null;

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
