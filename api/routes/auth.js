const constants = require("../../common/constants");
const BaseRoute = require("./base");

/**
 * Authentification route
 */
class AuthRoute extends BaseRoute {
  /**
   * Constructor
   * @param {App} app
   */
  constructor(app) {
    super(app);

    // Add routes for each provider
    for (let provider of this.app.di.get("auth").providers) {
      // Route to start sign in
      this.router.get(
        `/oauth/${_.toLower(provider.providerName)}`,
        this.authenticate(
          _.toLower(provider.providerName),
          provider.providerOptions
        )
      );

      // Route to call back to after signing in
      this.router.get(
        `/oauth/${_.toLower(provider.providerName)}/callback`,
        this.authenticate(_.toLower(provider.providerName), {
          successRedirect: `${constants.apiBase}/redirect`,
          failureRedirect: `/auth/error?action=signin&type=oauth&service=${
            provider.providerName
          }`
        })
      );
    }
  }

  authenticate(...args) {
    return (req, res, next) => {
      this.app.di.get("auth").passport.initialize()(req, res, error => {
        if (error) return next(error);

        this.app.auth.passport.authenticate(...args)(req, res, next);
      });
    };
  }
}

module.exports = AuthRoute;
