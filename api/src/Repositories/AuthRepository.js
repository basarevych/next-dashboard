const debug = require("debug")("app:auth");
const Chance = require("chance");
const EventEmitter = require("events");
const constants = require("../../../common/constants");

class AuthRepository extends EventEmitter {
  constructor(di, auth, db) {
    super();

    this.di = di;
    this.auth = auth;
    this.db = db;

    this.chance = new Chance();
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.auth";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["di", "auth", "db"];
  }

  async getStatus(context) {
    debug("getStatus");

    return context.getAuthStatus();
  }

  generateToken() {
    return this.chance.string({
      length: 32,
      pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    });
  }

  async signIn(context, args) {
    debug("signIn");

    let success = false;

    let cur = await context.getUser();
    if (cur) {
      // already signed in, kick the previous user if different
      if (args.email) {
        // normal sign-in
        if (
          _.includes(cur.roles, constants.roles.ANONYMOUS) ||
          cur.email !== args.email
        ) {
          await this.auth.signOut(context);
        } else {
          success = true;
        }
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
          !(await this.auth.checkPassword(args.password, user.password))
        ) {
          user = null;
        }
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
      throw this.di.get("error.validation", [
        { key: "password", message: "ERROR_FIELD_REQUIRED" }
      ]);
    }

    let success = false;

    if (await context.getUser()) await this.auth.signOut(context);

    let user = new this.db.UserModel({
      email: args.email,
      emailToken: this.generateToken(),
      password: await this.auth.encryptPassword(args.password)
    });

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
    if (!user || _.includes(user.roles, constants.roles.ANONYMOUS))
      return { success: false };
    if (user.emailVerified) return { success: false };

    user.emailToken = this.generateToken();
    user.isEmailVerified = false;

    await user.validate();
    await user.save();
    await this.auth.sendVerificationEmail(context, user.email, user.emailToken);
    return { success: true };
  }

  async verifyEmail(context, args) {
    debug("verifyEmail");

    if (!args.token) return { success: false };

    let user = await this.db.UserModel.findOne({ emailToken: args.token });
    if (!user || _.includes(user.roles, constants.roles.ANONYMOUS))
      return { success: false };
    if (user.isEmailVerified) return { success: false };

    delete user.emailToken;
    user.isEmailVerified = true;

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

    if (args.email !== user.email) {
      user.email = args.email;
      user.isEmailVerified = false;
    }
    user.name = args.name;
    if (args.password)
      user.password = await this.auth.encryptPassword(args.password);

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

    await this.db.UserModel.findById(user.id).remove();
    await this.auth.signOut(context);
    return { success: true };
  }
}

module.exports = AuthRepository;
