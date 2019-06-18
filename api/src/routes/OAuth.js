const Router = require("express").Router;
const constants = require("../../common/constants");

class OAuthRoute {
  constructor(config, auth) {
    this.config = config;
    this.auth = auth;
    this.router = Router();
  }

  static get $provides() {
    return "route.oauth";
  }

  static get $requires() {
    return ["config", "auth"];
  }

  async init() {
    if (this.promise) return this.promse;

    this.promise = Promise.resolve();

    // Add routes for each provider
    for (let provider of this.auth.providers) {
      // Route to start sign in
      this.router.get(
        `/oauth/${provider.providerName}`,
        this.saveToken(provider.providerName),
        this.authenticate(provider.providerName, provider.providerOptions)
      );

      // Route to call back to after signing in
      this.router.get(
        `/oauth/${provider.providerName}/callback`,
        this.authenticate(provider.providerName, {
          failureRedirect: this.config.apiAppServer + "/auth/error?type=oauth"
        }),
        this.successRedirect(provider.providerName)
      );
    }
  }

  saveToken(/* provider */) {
    return (req, res, next) => {
      let token = req.query.token || "";
      let redirect = req.query.redirect || "";
      req.session.token = token;
      req.session.redirect = redirect;
      next();
    };
  }

  authenticate(...args) {
    return (req, res, next) => {
      this.auth.passport.initialize()(req, res, error => {
        if (error) return next(error);
        this.auth.passport.authenticate(...args)(req, res, next);
      });
    };
  }

  successRedirect(/* provider */) {
    return async (req, res, next) => {
      res.clearCookie("token", { path: constants.apiBase + "/oauth" });
      res.clearCookie("redirect", { path: constants.apiBase + "/oauth" });

      let redirect = req.session.redirect || "";
      let { user, client } = req.token || {};
      if (!user || !client)
        return res.redirect(this.config.apiAppServer + "/auth/error");

      let token = await this.auth.createToken("oneTime", user, client);
      res.redirect(
        this.config.apiAppServer +
          "/auth/return?token=" +
          encodeURIComponent(token) +
          (redirect ? "&redirect=" + encodeURIComponent(redirect) : "")
      );
    };
  }
}

module.exports = OAuthRoute;
