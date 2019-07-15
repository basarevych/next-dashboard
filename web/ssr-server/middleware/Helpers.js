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

  async accept({ express }) {
    express.use(async (req, res, next) => {
      try {
        // Set locale
        let locale = null;
        if (l10n.locales.length) {
          if (req.cookies && _.includes(l10n.locales, req.cookies.locale))
            locale = req.cookies.locale;
          if (!locale && req.acceptsLanguages)
            locale = req.acceptsLanguages(l10n.locales);
        }
        if (!locale) locale = l10n.defaultLocale;
        req.locale = locale;

        // Set theme
        let theme = null;
        if (req.cookies && _.includes(themes.names, req.cookies.theme))
          theme = req.cookies.theme;
        if (!theme && themes.defaultTheme) theme = themes.defaultTheme;
        if (!theme && themes.names.length) theme = themes.names[0];
        req.theme = theme;

        // Set tokens
        req.setTokens = async (accessToken, refreshToken) => {
          req.session.user = null;
          req.session.accessToken = null;
          req.session.refreshToken = null;

          if (accessToken) {
            const response = await fetch(
              this.app.config.appApiServer + constants.graphqlBase,
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
                        email
                        roles
                      }
                    }
                  }`
                })
              }
            );
            if (response.status === 200) {
              const result = await response.json();
              req.session.user = _.get(result, "data.viewer.me", null);
              req.session.accessToken = accessToken;
              req.session.refreshToken = refreshToken;
            }
          }
        };

        return next();
      } catch (error) {
        return next(error);
      }
    });
  }
}

module.exports = Helpers;
