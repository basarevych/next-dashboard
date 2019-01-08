const debug = require("debug")("app:users");
const EventEmitter = require("events");
const { cursorToDocument } = require("graphql-relay-connection");
const constants = require("../../../common/constants");

const accessLevel = constants.roles.ADMIN;

class UsersRepository extends EventEmitter {
  constructor(auth, user, getState, dispatch) {
    super();

    this.auth = auth;
    this.user = user;
    this.getState = getState;
    this.dispatch = dispatch;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.users";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["auth", "model.user", "getState", "dispatch"];
  }

  async getUser(context, { id }) {
    debug("getUser");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel)) return null;

    return this.user.model.findById(id);
  }

  async getUsers(context, { after, first, before, last } = {}) {
    debug("getUsers");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel)) return [];

    const docAfter = cursorToDocument(after);
    const docBefore = cursorToDocument(before);

    // eslint-disable-next-line lodash/prefer-lodash-method
    let query = this.user.model
      .find({
        _id: {
          $gt: docAfter && docAfter._id,
          $lt: docBefore && docBefore._id
        }
      })
      .sort("_id");
    if (first || last) query = query.limit(Math.min(first, last) + 1); // add +1 for hasNextPage
    return query.exec();
  }

  async createUser(context, { email, name, password, roles }) {
    debug("createUser");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel)) return null;

    if (await this.user.model.findOne({ email })) return null;

    let user = new this.user.model({
      email,
      name,
      password: password && (await this.auth.encryptPassword(password)),
      roles
    });

    await user.validateField({ field: "password", value: password }); // before it is encrypted
    await user.validate();
    await user.save();
    context.preCachePages({ path: "/users" }).catch(console.error);
    return user;
  }

  async editUser(context, { id, email, name, password, roles }) {
    debug("editUser");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel)) return null;

    let user = await this.user.model.findById(id);
    if (!user) return null;

    user.email = email;
    user.name = name;
    if (password) {
      await user.validateField({ field: "password", value: password }); // before it is encrypted
      user.password = await this.auth.encryptPassword(password);
    }
    user.roles = roles;

    await user.validate();
    await user.save();
    context.preCachePages({ path: "/users" }).catch(console.error);
    return user;
  }

  async deleteUser(context, { id }) {
    debug("deleteUser");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel)) return null;

    let user = await this.user.model.findById(id);
    if (!user) return null;

    await user.remove();
    context.preCachePages({ path: "/users" }).catch(console.error);
    return user;
  }
}

module.exports = UsersRepository;
