const debug = require("debug")("app:users");
const EventEmitter = require("events");
const ValidationError = require("../../lib/ValidationError");
const constants = require("../../../common/constants");

const accessLevel = constants.roles.ADMIN;

class UsersRepository extends EventEmitter {
  constructor(auth, db, getState, dispatch) {
    super();

    this.auth = auth;
    this.db = db;
    this.getState = getState;
    this.dispatch = dispatch;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.users";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["auth", "db", "getState", "dispatch"];
  }

  async getUsers(context) {
    debug("getUsers");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel)) return [];

    return _.map(
      // eslint-disable-next-line lodash/prefer-lodash-method
      await this.db.UserModel.find(),
      user => this.db.userObject({ user })
    );
  }

  async createUser(context, args) {
    debug("createUser");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel))
      return { success: false };

    let errors = [];
    if (!args.login)
      errors.push({ key: "login", message: "ERROR_FIELD_REQUIRED" });
    if (!args.password)
      errors.push({ key: "password", message: "ERROR_FIELD_REQUIRED" });
    if (errors.length) throw new ValidationError(errors);

    let target = new this.db.UserModel(
      this.db.userTemplate({
        login: args.login,
        password: await this.auth.constructor.encryptPassword(args.password),
        roles: args.roles || []
      })
    );

    await target.validate();
    await target.save();
    context.preCachePages({ path: "/users" }).catch(console.error);
    return { success: true, id: target._id.toString() };
  }

  async editUser(context, args) {
    debug("editUser");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel))
      return { success: false };

    let target = await this.db.UserModel.findOne({
      _id: this.db.ObjectId(args.id)
    });
    if (!target) return { success: false };

    if (!args.login) {
      throw new ValidationError([
        { key: "login", message: "ERROR_FIELD_REQUIRED" }
      ]);
    }

    target.whenUpdated = Date.now();
    target.login = args.login;
    if (args.password)
      target.password = await this.auth.constructor.encryptPassword(
        args.password
      );
    target.roles = args.roles;

    await target.validate();
    await target.save();
    context.preCachePages({ path: "/users" }).catch(console.error);
    return { success: true, id: target._id.toString() };
  }

  async deleteUser(context, args) {
    debug("deleteUser");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel))
      return { success: false };

    await this.db.UserModel.findOne({
      _id: this.db.ObjectId(args.id)
    }).remove();
    context.preCachePages({ path: "/users" }).catch(console.error);
    return { success: true, id: args.id };
  }
}

module.exports = UsersRepository;
