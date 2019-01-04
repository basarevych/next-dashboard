const EventEmitter = require("events");
const Router = require("express").Router;
const constants = require("../../../common/constants");

/**
 * Authentification route
 */
class AuthRoute extends EventEmitter {
  constructor(auth) {
    super();

    this.auth = auth;
    this.router = Router();
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "routes.auth";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["auth"];
  }

  async init() {
    if (this.promise) return this.promse;

    this.promise = Promise.resolve();

    // Add routes for each provider
    for (let provider of this.auth.providers) {
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
      this.auth.passport.initialize()(req, res, error => {
        if (error) return next(error);

        this.auth.passport.authenticate(...args)(req, res, next);
      });
    };
  }
}

module.exports = AuthRoute;
