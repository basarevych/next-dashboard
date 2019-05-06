const debug = require("debug")("app:auth");
const Chance = require("chance");
const EventEmitter = require("events");
const constants = require("../../../common/constants");

class AuthRepository extends EventEmitter {
  constructor(auth, di, user, pubsub) {
    super();

    this.auth = auth;
    this.di = di;
    this.user = user;
    this.pubsub = pubsub;

    this.chance = new Chance();
  }

  static get $provides() {
    return "repository.auth";
  }

  static get $requires() {
    return ["auth", "di", "model.user", "pubsub"];
  }

  generateToken() {
    return this.chance.string({
      length: 32,
      pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    });
  }

  async signIn(context, { email, password }) {
    debug("signIn");

    let success = false;

    let cur = await context.getUser();
    if (cur) {
      // already signed in, kick the previous user if different
      if (email) {
        // normal sign-in
        if (
          _.includes(cur.roles, constants.roles.ANONYMOUS) ||
          cur.email !== email
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
      if (email && password) {
        // normal sign-in
        user = await this.user.model.findOne({ email });
        if (user && !(await this.auth.checkPassword(password, user.password)))
          user = null;
      } else {
        // anonymous sign-in
        user = await this.user.model.findOne({
          roles: { $in: constants.roles.ANONYMOUS }
        });
      }

      if (user) {
        context.preparePages({ user }).catch(console.error);
        await this.auth.signIn(user, context);
        success = true;
      }
    }

    return { success };
  }

  async signUp(context, { email, password }) {
    debug("signUp");

    if (await this.user.model.findOne({ email })) return { success: false };

    if (await context.getUser()) await this.auth.signOut(context);

    let user = new this.user.model({
      email: email,
      emailToken: this.generateToken(),
      password: password && (await this.auth.encryptPassword(password))
    });

    await user.validate();

    const { validator } = this.user.getValidator("password");
    try {
      await validator.bind(user)(password); // before it is encrypted
    } catch (error) {
      throw this.di.get("error.validation", {
        errors: { password: { message: error } }
      });
    }

    await user.save();
    this.pubsub.publish("userCreated", { userCreated: user });

    let success = false;
    if (user) {
      await this.auth.sendVerificationEmail(
        context,
        user.email,
        user.emailToken
      );
      context.preparePages({ user }).catch(console.error);
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
    if (user.isEmailVerified) return { success: false };

    user.emailToken = this.generateToken();

    await user.validate();
    await user.save();
    await this.auth.sendVerificationEmail(context, user.email, user.emailToken);
    return { success: true };
  }

  async verifyEmail(context, { token }) {
    debug("verifyEmail");

    if (!token) return { success: false };

    let user = await this.user.model.findOne({ emailToken: token });
    if (!user || _.includes(user.roles, constants.roles.ANONYMOUS))
      return { success: false };
    if (user.isEmailVerified) return { success: false };

    delete user.emailToken;
    user.isEmailVerified = true;

    await user.validate();
    await user.save();
    context.preparePages({ user, path: "/auth/profile" }).catch(console.error);

    let cur = await context.getUser();
    if (cur && cur.email !== user.email) {
      await this.auth.signOut(context);
      cur = null;
    }

    if (!cur) await this.auth.signIn(user, context);
    return { success: true };
  }

  async unlinkProvider(context, { provider }) {
    debug("unlinkProvider");

    if (!provider) return { success: false };

    let user = await context.getUser();
    if (!user || _.includes(user.roles, constants.roles.ANONYMOUS))
      return { success: false };

    for (let item of user.providers) {
      if (_.lowerCase(item.name) === _.lowerCase(provider)) {
        item.remove();
        await user.validate();
        await user.save();
        context
          .preparePages({ user, path: "/auth/profile" })
          .catch(console.error);
        return { success: true };
      }
    }

    return { success: false };
  }

  async updateProfile(context, { name, email, password }) {
    debug("updateProfile");

    let user = await context.getUser();
    if (!user || _.includes(user.roles, constants.roles.ANONYMOUS))
      return { success: false };

    if (email !== user.email) {
      user.email = email;
      user.isEmailVerified = false;
    }
    user.name = name;
    if (password) user.password = await this.auth.encryptPassword(password);

    await user.validate();

    if (password) {
      const { validator } = this.user.getValidator("password");
      try {
        await validator.bind(user)(password); // before it is encrypted
      } catch (error) {
        throw this.di.get("error.validation", {
          errors: { password: { message: error } }
        });
      }
    }

    await user.save();
    context.preparePages({ user, path: "/auth/profile" }).catch(console.error);
    return { success: true };
  }

  async deleteProfile(context) {
    debug("deleteProfile");

    let user = await context.getUser();
    if (!user || _.includes(user.roles, constants.roles.ANONYMOUS))
      return { success: false };

    await this.user.model.findById(user.id).remove();
    await this.auth.signOut(context);
    return { success: true };
  }
}

module.exports = AuthRepository;
