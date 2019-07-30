const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passport = require("passport");
const validator = require("validator");
const Chance = require("chance");
const constants = require("../common/constants");

class Auth {
  constructor(config, user, userClient, userProvider, i18n, cache, mailer) {
    this.config = config;
    this.user = user;
    this.userClient = userClient;
    this.userProvider = userProvider;
    this.i18n = i18n;
    this.cache = cache;
    this.mailer = mailer;

    this.passport = passport;
    this.chance = new Chance();

    this.tokenLifetime = {
      refresh: "30d",
      access: "10m",
      oneTime: "1h"
    };
  }

  static get $provides() {
    return "auth";
  }

  static get $requires() {
    return [
      "config",
      "model.user",
      "model.user.client",
      "model.user.provider",
      "i18n",
      "cache",
      "mailer"
    ];
  }

  static get $lifecycle() {
    return "singleton";
  }

  get googleProvider() {
    if (!this.config.googleAuthId || !this.config.googleAuthSecret) return null;

    return {
      providerName: _.toLower(constants.oauthProviders.GOOGLE),
      providerOptions: {
        scope: ["profile", "email"]
      },
      Strategy: require("passport-google-oauth").OAuth2Strategy,
      strategyOptions: {
        clientID: this.config.googleAuthId,
        clientSecret: this.config.googleAuthSecret
      }
    };
  }

  get facebookProvider() {
    if (!this.config.facebookAuthId || !this.config.facebookAuthSecret)
      return null;

    return {
      providerName: _.toLower(constants.oauthProviders.FACEBOOK),
      providerOptions: {
        scope: ["email", "public_profile"]
      },
      Strategy: require("passport-facebook").Strategy,
      strategyOptions: {
        clientID: this.config.facebookAuthId,
        clientSecret: this.config.facebookAuthSecret
      }
    };
  }

  get twitterProvider() {
    if (!this.config.twitterAuthKey || !this.config.twitterAuthSecret)
      return null;

    return {
      providerName: _.toLower(constants.oauthProviders.TWITTER),
      providerOptions: {
        scope: []
      },
      Strategy: require("passport-twitter").Strategy,
      strategyOptions: {
        consumerKey: this.config.twitterAuthKey,
        consumerSecret: this.config.twitterAuthSecret,
        userProfileURL:
          "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true"
      }
    };
  }

  get providers() {
    return _.compact([
      this.googleProvider,
      this.facebookProvider,
      this.twitterProvider
    ]);
  }

  async init() {
    if (this.promise) return this.promise;
    this.promise = Promise.resolve();

    /*
     * Return user ID property from a user object
     */
    this.passport.serializeUser(async (user, next) =>
      next(null, user ? user.id : false)
    );

    /*
     * Return user from a user ID
     */
    this.passport.deserializeUser(async (id, next) => {
      try {
        let user = id && (await this.user.model.findById(id));
        return next(null, user || false);
      } catch (error) {
        return next(error, false);
      }
    });

    const getEmail = profile => {
      for (let item of profile.emails) {
        if (item.type === "work" && validator.isEmail(item.value))
          return item.value;
      }

      for (let item of profile.emails)
        if (validator.isEmail(item.value)) return item.value;

      return null;
    };

    // Define a Passport strategy for the providers
    for (let provider of this.providers) {
      if (!provider.strategyOptions.callbackURL) {
        provider.strategyOptions.callbackURL =
          this.config.apiOrigins[0] +
          constants.apiBase +
          "/oauth/" +
          provider.providerName +
          "/callback";
      }
      provider.strategyOptions.passReqToCallback = true;

      this.passport.use(
        // inspired by next-auth
        new provider.Strategy(
          _.assign(
            {
              profileFields: ["id", "displayName", "email", "photos"]
            },
            provider.strategyOptions
          ),
          async (req, accessToken, refreshToken, profile, next) => {
            const returnSuccess = async (user, client) => {
              try {
                if (client) {
                  client.agent = req.get("User-Agent");
                  client.ip = req.ip;
                } else {
                  client = new this.userClient.model({
                    agent: req.get("User-Agent"),
                    ip: req.ip
                  });
                  user.clients.push(client.toObject());
                }

                await user.validate();
                await user.save();

                /* eslint-disable require-atomic-updates */
                req.user = user;
                req.client = client;
                /* eslint-enable require-atomic-updates */

                next(null, user);
              } catch (error) {
                next(error, false);
              }
            };

            const returnFailure = () => next(null, false);

            const returnError = error =>
              next(error || new Error("An error occured"), false);

            req.user = null;
            req.client = null;

            try {
              // Token bearer
              let curUser, curClient;
              if (req.session.userId) {
                curUser = await this.user.model.findById(req.session.userId);
                if (curUser && req.session.clientId)
                  curClient = curUser.clients.id(req.session.clientId);
              }

              // Look in the database for a user associated with this account.
              let user = await this.user.model.findOne({
                "providers.name": provider.providerName,
                "providers.profile.id": profile.id
              });

              if (curUser) {
                // This section handles scenarios when a user is already signed in.

                if (user) {
                  // This section handles if the user is already logged in
                  if (user.id === curUser.id) {
                    // This section handles if the user is already logged in and is
                    // already linked to local account they are signed in with.
                    // If they are, all we need to do is update their profile and
                    // OAuth tokens
                    for (let item of user.providers) {
                      if (
                        item.name === provider.providerName &&
                        item.profile.id === profile.id
                      ) {
                        item.profile = profile;
                        if (accessToken) item.accessToken = accessToken;
                        if (refreshToken) item.refreshToken = refreshToken;
                        return returnSuccess(
                          user,
                          user.clients.id(curClient.id) // try to reuse the client
                        );
                      }
                    }

                    // never reached
                    return returnError();
                  } else {
                    // This section handles if a user is logged in but the oAuth
                    // account they are trying to link to is already linked to a
                    // different local account.

                    // This prevents users from linking an oAuth account to more
                    // than one local account at the same time.
                    return returnFailure();
                  }
                } else {
                  // This secion handles if a user is already logged in and is
                  // trying to link a new account.

                  // If we don't already have a name for the user, use value the
                  // name value specfied in their profile on the remote service.
                  if (!curUser.name && profile.displayName)
                    curUser.name = profile.displayName;

                  // If we don't have a real email address for the user, use the
                  // email value specified in their profile on the remote service.
                  if (!curUser.email && profile.emails.length) {
                    let email = getEmail(profile);
                    if (email) {
                      curUser.email = email;
                      curUser.isEmailVerified = false;
                    }
                  }

                  // Save Profile ID, Access Token and Refresh Token values
                  // to the users local account, which links the accounts.
                  let prov = new this.userProvider.model({
                    name: provider.providerName,
                    profile,
                    accessToken,
                    refreshToken
                  });
                  curUser.providers.push(prov.toObject());

                  return returnSuccess(curUser, curClient);
                }
              } else {
                // This section handles scenarios when a user is not logged in.

                if (user) {
                  // This section handles senarios where the user is not logged in
                  // but they seem to have an account already
                  // Update Access and Refresh Tokens for the user if we got them.
                  for (let item of user.providers) {
                    if (
                      item.name === provider.providerName &&
                      item.profile.id === profile.id
                    ) {
                      item.profile = profile;
                      if (accessToken) item.accessToken = accessToken;
                      if (refreshToken) item.refreshToken = refreshToken;

                      return returnSuccess(user, null);
                    }
                  }

                  // never reached
                  return returnError();
                } else {
                  // This section handles senarios where the user is not logged in
                  // and they don't have a local account already.

                  // First we check to see if a local account with the same email
                  // address as the one associated with their oAuth profile exists.
                  //
                  // This is so they can't accidentally end up with two accounts
                  // linked to the same email address.
                  let email = getEmail(profile);
                  if (!email) return returnFailure();

                  // If we already have a local account associated with their
                  // email address, the user should sign in with that account -
                  // and then they can link accounts if they wish.
                  //
                  // Note: Automatically linking them here could expose a
                  // potential security exploit allowing someone to pre-register
                  // or create an account elsewhere for another users email
                  // address then trying to sign in from it, so don't do that.
                  user = await this.user.model.findOne({ email });
                  if (user) return returnFailure();

                  // If an account does not exist, create one for them
                  let prov = new this.userProvider.model({
                    name: provider.providerName,
                    profile,
                    accessToken,
                    refreshToken
                  });
                  user = new this.user.model({
                    email,
                    name: profile.displayName,
                    // random password because the field cannot be empty
                    password: this.chance.string({ length: 30 }),
                    clients: [],
                    providers: [prov.toObject()]
                  });

                  return returnSuccess(user, null);
                }
              }
            } catch (error) {
              return returnError(error);
            }
          }
        )
      );
    }
  }

  async checkPassword(password, hash) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, hash, (error, res) => {
        if (error) return reject(error);
        resolve(res);
      });
    });
  }

  async encryptPassword(password) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (error, hash) => {
        if (error) return reject(error);
        resolve(hash);
      });
    });
  }

  createTokenSecret() {
    return this.chance.string({ length: 20 });
  }

  createEmailSecret() {
    return this.chance.string({
      length: 20,
      pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    });
  }

  async createToken(type, user, client, payload = {}) {
    if (!user) throw new Error("createToken: No user");
    if (!client) throw new Error("createToken: No client");
    if (type === "oneTime") {
      payload.secret = this.createTokenSecret();
      await this.cache.createOneTimeToken(payload.secret);
    }
    let data = _.assign(
      {
        type,
        userId: user.id,
        clientId: client.id
      },
      payload
    );
    return jwt.sign(data, this.config.jwtSecret, {
      expiresIn: this.tokenLifetime[type] || "10m"
    });
  }

  async useToken(token) {
    try {
      const decoded = jwt.verify(token || "", this.config.jwtSecret);
      if (!decoded.type || !decoded.userId || !decoded.clientId) return false;

      let user = await this.user.model.findById(decoded.userId);
      if (!user) return false;

      let client = user && user.clients.id(decoded.clientId);
      if (!client) return false;

      if (decoded.type === "oneTime") {
        let exists = await this.cache.useOneTimeToken(decoded.secret);
        if (!exists) return false;

        delete decoded.secret;
      }

      return _.assign(decoded, { user, client });
    } catch (err) {
      return false;
    }
  }

  async getStatus(context) {
    const { type, user, client } = context.token || {};

    const isAuthenticated =
      _.includes(["access", "oneTime"], type) && !!user && !!client;

    const providers = [];
    for (let item of this.providers) {
      let isLinked = false;
      if (user) {
        for (let linked of user.providers) {
          if (linked.name === item.providerName) {
            isLinked = true;
            break;
          }
        }
      }
      providers.push({
        name: item.providerName,
        isLinked
      });
    }

    return {
      isAuthenticated,
      userId: user ? user.id : null,
      email: user ? user.email : null,
      isEmailVerified: user ? user.isEmailVerified : false,
      name: user ? user.name : "Anonymous",
      roles: user ? user.roles : [],
      providers
    };
  }

  async signIn(context, user, client) {
    if (client) {
      client.agent = context.get("User-Agent");
      client.ip = context.ip;
    } else {
      client = new this.userClient.model({
        agent: context.get("User-Agent"),
        ip: context.ip
      });
      user.clients.push(client.toObject());
    }

    await user.validate();
    await user.save();

    this.cache.pubsub.publish("signIn", {
      signIn: {
        user: user.toObject({ getters: true, virtuals: true }),
        client: client.toObject({ getters: true, virtuals: true })
      }
    });

    let refreshToken = await this.createToken("refresh", user, client);
    let accessToken = await this.createToken("access", user, client);

    return { refreshToken, accessToken };
  }

  async signOut(context, user, client) {
    client.remove();
    await user.validate();
    await user.save();

    this.cache.pubsub.publish("signOut", {
      signOut: {
        user: user.toObject({ getters: true, virtuals: true }),
        client: client.toObject({ getters: true, virtuals: true })
      }
    });
  }

  sendVerificationEmail(context, user, locale) {
    let url = `${this.config.apiAppServer}/auth/verify?token=${
      user.emailToken
    }`;
    return this.mailer.send({
      to: user.email,
      from: this.config.emailFrom,
      subject: this.i18n.translate("VERIFY_EMAIL_SUBJECT", { url }, locale),
      text: this.i18n.translate("VERIFY_EMAIL_TEXT", { url }, locale),
      html: this.i18n.translate("VERIFY_EMAIL_HTML", { url }, locale)
    });
  }
}

module.exports = Auth;
