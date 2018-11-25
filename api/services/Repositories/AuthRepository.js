const debug = require("debug")("app:auth");
const EventEmitter = require("events");
const ValidationError = require("../../lib/ValidationError");
const getRandomString = require("../../../common/getRandomString");
const constants = require("../../../common/constants");

class AuthRepository extends EventEmitter {
  constructor(auth, db) {
    super();

    this.auth = auth;
    this.db = db;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.auth";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["auth", "db"];
  }

  async getStatus(context) {
    debug("getStatus");

    return context.getAuthStatus();
  }

  async signIn(context, args) {
    debug("signIn");

    let success = false;

    let cur = await context.getUser();
    if (cur) {
      // already signed in
      if (args.email) {
        // normal sign-in
        if (cur.email === args.email) success = true;
        else await this.auth.signOut(context);
      } else {
        // anonymous sign-in
        if (_.includes(cur.roles, constants.roles.ANONYMOUS)) success = true;
        else await this.auth.signOut(context);
      }
    }

    if (!success) {
      // new sign-in
      let user;
      if (args.email && args.password) {
        // normal sign-in
        user = await this.db.UserModel.findOne({ email: args.email });
        if (
          user &&
          !(await this.auth.constructor.checkPassword(
            args.password,
            user.password
          ))
        )
          user = null;
      } else {
        // anonymous sign-in
        user = await this.db.UserModel.findOne({
          roles: { $in: constants.roles.ANONYMOUS }
        });
      }

      if (user) {
        context.preCachePages({ user }).catch(console.error);
        await this.auth.signIn(user, context);
        success = true;
      }
    }

    return { success };
  }

  async signUp(context, args) {
    debug("signUp");

    if (!args.password) {
      throw new ValidationError([
        { key: "password", message: "ERROR_FIELD_REQUIRED" }
      ]);
    }

    let success = false;

    if (await context.getUser()) await this.auth.signOut(context);

    let user = new this.db.UserModel(
      this.db.userTemplate({
        email: args.email,
        emailToken: getRandomString(32),
        password: await this.auth.constructor.encryptPassword(args.password)
      })
    );

    await user.validate();
    await user.save();

    if (user) {
      await this.auth.sendVerificationEmail(
        context,
        user.email,
        user.emailToken
      );
      context.preCachePages({ user }).catch(console.error);
      await this.auth.signIn(user, context);
      success = true;
    }

    return { success };
  }

  async signOut(context) {
    debug("signOut");

    let success = false;

    if (await context.getUser()) {
      await this.auth.signOut(context);
      success = true;
    }

    return { success };
  }

  async requestEmailVerification(context) {
    debug("requestEmailVerification");

    let user = await context.getUser();
    if (!user || user.emailVerified) return { success: false };

    user.emailToken = getRandomString(32);
    user.isEmailVerified = false;
    user.whenUpdated = Date.now();

    await user.validate();
    await user.save();
    await this.auth.sendVerificationEmail(context, user.email, user.emailToken);
    return { success: true };
  }

  async verifyEmail(context, args) {
    debug("verifyEmail");

    if (!args.token) return { success: false };

    let user = await this.db.UserModel.findOne({ emailToken: args.token });
    if (!user || user.isEmailVerified) return { success: false };

    delete user.emailToken;
    user.isEmailVerified = true;
    user.whenUpdated = Date.now();

    await user.validate();
    await user.save();
    context.preCachePages({ user, path: "/auth/profile" }).catch(console.error);
    return { success: true };
  }

  async unlinkProvider(context, args) {
    debug("unlinkProvider");

    if (!args.provider) return { success: false };

    let user = await context.getUser();
    if (!user || _.includes(user.roles, constants.roles.ANONYMOUS))
      return { success: false };

    for (let provider of user.providers) {
      if (_.lowerCase(provider.name) === _.lowerCase(args.provider)) {
        provider.remove();
        user.whenUpdated = Date.now();
        await user.validate();
        await user.save();
        context
          .preCachePages({ user, path: "/auth/profile" })
          .catch(console.error);
        return { success: true };
      }
    }

    return { success: false };
  }

  async updateProfile(context, args) {
    debug("updateProfile");

    let user = await context.getUser();
    if (!user || _.includes(user.roles, constants.roles.ANONYMOUS))
      return { success: false };

    user.whenUpdated = Date.now();
    if (args.email !== user.email) {
      user.email = args.email;
      user.isEmailVerified = false;
    }
    user.name = args.name;
    if (args.password)
      user.password = await this.auth.constructor.encryptPassword(
        args.password
      );

    await user.validate();
    await user.save();
    context.preCachePages({ user, path: "/auth/profile" }).catch(console.error);
    return { success: true };
  }

  async deleteProfile(context) {
    debug("deleteProfile");

    let user = await context.getUser();
    if (!user || _.includes(user.roles, constants.roles.ANONYMOUS))
      return { success: false };

    await this.db.UserModel.findOne({ _id: user._id }).remove();
    await this.auth.signOut(context);
    return { success: true };
  }
}

module.exports = AuthRepository;
