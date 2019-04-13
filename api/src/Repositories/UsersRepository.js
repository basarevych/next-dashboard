const debug = require("debug")("app:users");
const EventEmitter = require("events");
const { fetchConnectionFromArray } = require("fast-relay-pagination");
const jwt = require("jsonwebtoken");
const { withFilter } = require("graphql-subscriptions");
const constants = require("../../../common/constants");

const accessLevel = constants.roles.ADMIN;

class UsersRepository extends EventEmitter {
  constructor(di, db, auth, config, user, pubsub) {
    super();

    this.di = di;
    this.db = db;
    this.auth = auth;
    this.config = config;
    this.user = user;
    this.pubsub = pubsub;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.users";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["di", "db", "auth", "config", "model.user", "pubsub"];
  }

  isAllowed(requester) {
    return requester && _.includes(requester.roles, accessLevel);
  }

  subscribe(topics) {
    return withFilter(
      (rootValue, args, context) => {
        const decoded = jwt.verify(args.token || "", this.config.sessionSecret);
        context.userId = decoded.userId;
        return this.pubsub.asyncIterator(topics);
      },
      async (payload, args, context) => {
        if (!context || !context.userId) return false;
        const user = await this.user.model.findById(context.userId);
        if (!user || !this.isAllowed(user)) return false;
        return true;
      }
    );
  }

  async destroyUserSessions(userId) {
    const Session = this.di.getClass("middleware.session");
    return new Promise((resolve, reject) => {
      this.db.mongoose.connection.db.collection(
        Session.collection,
        async (error, collection) => {
          if (error) return reject(error);
          try {
            await collection.remove({ "session.userId": userId });
          } catch (error) {
            return reject(error);
          }
          resolve();
        }
      );
    });
  }

  async getUser(context, { id }) {
    debug("getUser");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    if (!id) return null;

    const user = await this.user.model.findById(id);
    if (!user) throw this.di.get("error.entityNotFound");
    return user;
  }

  async countUsers(context) {
    debug("countUsers");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    return await this.user.model.countDocuments();
  }

  async getUserConnection(
    context,
    { sortBy, sortDir, after, first, before, last } = {}
  ) {
    debug("getUsers");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

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

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    if (await this.user.model.findOne({ email }))
      throw this.di.get("error.entityExists");

    let user = new this.user.model({
      email,
      name,
      password: password && (await this.auth.encryptPassword(password)),
      roles
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
    context.preparePages({ path: "/users" }).catch(console.error);
    this.pubsub.publish("userCreated", { userCreated: user });
    return user;
  }

  async editUser(context, { id, email, name, password, roles }) {
    debug("editUser");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    let user = await this.user.model.findById(id);
    if (!user) throw this.di.get("error.entityNotFound");

    user.email = email;
    user.name = name;
    if (password) user.password = await this.auth.encryptPassword(password);

    let isAnonymous = _.includes(user.roles, constants.roles.ANONYMOUS);
    user.roles = roles;
    if (isAnonymous && !_.includes(user.roles, constants.roles.ANONYMOUS))
      user.roles.push(constants.roles.ANONYMOUS);

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
    context.preparePages({ path: "/users" }).catch(console.error);
    this.pubsub.publish("userUpdated", { userUpdated: user });
    return user;
  }

  async deleteUser(context, { id }) {
    debug("deleteUser");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    let user = await this.user.model.findById(id);
    if (!user) throw this.di.get("error.entityNotFound");

    await user.remove();
    await this.destroyUserSessions(id);
    context.preparePages({ path: "/users" }).catch(console.error);
    this.pubsub.publish("userDeleted", { userDeleted: user });

    return user;
  }
}

module.exports = UsersRepository;
