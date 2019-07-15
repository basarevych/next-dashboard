const debug = require("debug")("app:users");
const { fetchConnectionFromArray } = require("fast-relay-pagination");
const { withFilter } = require("graphql-subscriptions");
const constants = require("../../common/constants");

const accessLevel = constants.roles.ADMIN;

class UsersRepository {
  constructor(di, auth, config, user, cache) {
    this.di = di;
    this.auth = auth;
    this.config = config;
    this.user = user;
    this.cache = cache;
  }

  static get $provides() {
    return "repository.users";
  }

  static get $requires() {
    return ["di", "auth", "config", "model.user", "cache"];
  }

  isValid(context) {
    return context.token !== false;
  }

  isAllowed(context) {
    const { type, user, client } = context.token || {};
    return (
      type === "access" &&
      !!user &&
      !!client &&
      _.includes(user.roles, accessLevel)
    );
  }

  subscribe(topics) {
    return withFilter(
      () => this.cache.pubsub.asyncIterator(topics),
      async (payload, args, context) =>
        this.isValid(context) && this.isAllowed(context)
    );
  }

  async publish(topic, user) {
    this.cache.delPage({ page: "/users", query: "*", userId: "*" });
    this.cache.delPage({ page: "*", query: "*", userId: user.id });
    this.cache.pubsub.publish(topic, {
      [topic]: user.toObject({ getters: true, virtuals: true })
    });
  }

  async getUser(context, { id }) {
    debug("getUser");

    if (!id) return null;

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    const user = await this.user.model.findById(id);
    if (!user) throw this.di.get("error.notFound");
    return user;
  }

  async countUsers(context) {
    debug("countUsers");

    if (context.token === false) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    return await this.user.model.countDocuments();
  }

  async getUserConnection(
    context,
    { sortBy, sortDir, after, first, before, last } = {}
  ) {
    debug("getUsers");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    const connection = await fetchConnectionFromArray({
      dataPromiseFunc: this.user.model.find.bind(this.user.model),
      after,
      first,
      before,
      last,
      orderFieldName: sortBy || "_id",
      sortType: sortDir === "desc" ? -1 : 1
    });
    connection.totalCount = await this.countUsers(context);
    return connection;
  }

  async createUser(context, { email, name, password, roles }) {
    debug("createUser");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    if (await this.user.model.findOne({ email }))
      throw this.di.get("error.exists");

    let user = new this.user.model({
      email,
      name,
      password: password && (await this.auth.encryptPassword(password)),
      roles
    });

    await user.validateField("password", password); // before it is encrypted
    await user.validate();
    await user.save();
    await this.publish("userCreated", user);
    return user;
  }

  async editUser(context, { id, email, name, password, roles }) {
    debug("editUser");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    let user = await this.user.model.findById(id);
    if (!user) throw this.di.get("error.notFound");

    user.email = email;
    user.name = name;
    if (password) {
      await user.validateField("password", password); // before it is encrypted
      user.password = await this.auth.encryptPassword(password);
    }
    user.roles = roles;

    await user.validate();
    await user.save();
    await this.publish("userUpdated", user);
    return user;
  }

  async deleteUser(context, { id }) {
    debug("deleteUser");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    let user = await this.user.model.findById(id);
    if (!user) throw this.di.get("error.notFound");

    await this.user.model.deleteOne({ _id: user._id });
    await this.publish("userDeleted", user);
    return user;
  }
}

module.exports = UsersRepository;
