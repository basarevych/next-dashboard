const debug = require("debug")("app:auth");

class AuthRepository {
  constructor(di, auth, user, userClient, usersRepo, cache) {
    this.di = di;
    this.auth = auth;
    this.user = user;
    this.userClient = userClient;
    this.usersRepo = usersRepo;
    this.cache = cache;
  }

  static get $provides() {
    return "repository.auth";
  }

  static get $requires() {
    return [
      "di",
      "auth",
      "model.user",
      "model.user.client",
      "repository.users",
      "cache"
    ];
  }

  isValid(context) {
    return context.token !== false;
  }

  isAllowed(context) {
    const { type, user, client } = context.token || {};
    return type === "access" && !!user && !!client;
  }

  async getStatus(context) {
    return this.auth.getStatus(context);
  }

  async signIn(context, { email, password }) {
    debug("signIn");

    let user = await this.user.model.findOne({ email });
    if (!user || !(await this.auth.checkPassword(password, user.password)))
      return { success: false };

    let client;
    let { user: curUser, client: curClient } = context.token || {};
    if (curUser && curClient) {
      if (curUser.id === user.id) {
        // reuse the client if this is the same user
        client = curClient;
      } else {
        await this.auth.signOut(context, curUser, curClient);
      }
    }

    let { accessToken, refreshToken } = await this.auth.signIn(
      context,
      user,
      client
    );
    return { success: true, accessToken, refreshToken };
  }

  async signUp(context, { email, password, locale }) {
    debug("signUp");

    if (await this.user.model.findOne({ email })) return { success: false };

    let user = new this.user.model({
      email: email,
      emailToken: this.auth.createEmailSecret(),
      password: password && (await this.auth.encryptPassword(password))
    });

    let client = new this.userClient.model({
      agent: context.get("User-Agent"),
      ip: context.ip
    });
    user.clients.push(client.toObject());

    await user.validateField("password", password); // before it is encrypted
    await user.validate();
    await user.save();
    await this.auth.sendVerificationEmail(context, user, locale);
    await this.usersRepo.publish("userCreated", user);

    let { user: curUser, client: curClient } = context.token || {};
    if (curUser && curClient)
      await this.auth.signOut(context, curUser, curClient);

    let { accessToken, refreshToken } = await this.auth.signIn(
      context,
      user,
      client
    );
    return { success: true, accessToken, refreshToken };
  }

  async signOut(context) {
    debug("signOut");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    let { user: curUser, client: curClient } = context.token || {};
    if (curUser && curClient)
      await this.auth.signOut(context, curUser, curClient);

    return { success: true };
  }

  async getToken(context, { type, token }) {
    debug("getToken");

    let decoded = (await this.auth.useToken(token)) || {};

    if (
      !_.includes(["refresh", "oneTime"], decoded.type) ||
      !decoded.user ||
      !decoded.client ||
      !_.includes(["access", "oneTime"], type)
    ) {
      return { success: false };
    }

    let newToken = await this.auth.createToken(
      type,
      decoded.user,
      decoded.client
    );
    let refreshToken = null;
    if (type === "access") {
      refreshToken = await this.auth.createToken(
        "refresh",
        decoded.user,
        decoded.client
      );
    }
    return { success: true, token: newToken, refreshToken };
  }

  async requestEmailVerification(context, { locale }) {
    debug("requestEmailVerification");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    let { user } = context.token || {};
    user.emailToken = this.auth.createEmailSecret();

    await user.validate();
    await user.save();
    await this.auth.sendVerificationEmail(context, user, locale);
    await this.usersRepo.publish("userUpdated", user);
    return { success: true };
  }

  async verifyEmail(context, { token }) {
    debug("verifyEmail");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");

    let user = await this.user.model.findOne({ emailToken: token });
    if (!user || user.isEmailVerified) return { success: false };

    user.emailToken = null;
    user.isEmailVerified = true;

    await user.validate();
    await user.save();
    this.usersRepo.publish("userUpdated", user);

    let client;
    let { user: curUser, client: curClient } = context.token || {};
    if (curUser && curClient) {
      if (curUser.id === user.id) {
        // reuse the client if this is the same user
        client = curClient;
      } else {
        await this.auth.signOut(context, curUser, curClient);
      }
    }

    let { accessToken, refreshToken } = await this.auth.signIn(
      context,
      user,
      client
    );
    return { success: true, accessToken, refreshToken };
  }

  async unlinkProvider(context, { provider }) {
    debug("unlinkProvider");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    if (!provider) return { success: false };

    let { user } = context.token || {};
    for (let item of user.providers) {
      if (_.lowerCase(item.name) === _.lowerCase(provider)) {
        item.remove();
        await user.validate();
        await user.save();
        await this.usersRepo.publish("userUpdated", user);
        return { success: true };
      }
    }

    return { success: false };
  }

  async updateProfile(context, { name, email, password }) {
    debug("updateProfile");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    let { user } = context.token || {};

    user.name = name;
    if (email !== user.email) {
      user.email = email;
      user.isEmailVerified = false;
    }
    if (password) {
      await user.validateField("password", password); // before it is encrypted
      user.password = await this.auth.encryptPassword(password);
    }

    await user.validate();
    await user.save();
    await this.usersRepo.publish("userUpdated", user);
    return { success: true };
  }

  async deleteProfile(context) {
    debug("deleteProfile");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    let { user: curUser, client: curClient } = context.token || {};
    if (curUser && curClient)
      await this.auth.signOut(context, curUser, curClient);

    await this.user.model.deleteOne({ _id: curUser._id });
    await this.usersRepo.publish("userDeleted", curUser);
    return { success: true };
  }
}

module.exports = AuthRepository;
