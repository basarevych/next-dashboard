const debug = require("debug")("app:users");
const EventEmitter = require("events");
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

    return _.invokeMap(
      // eslint-disable-next-line lodash/prefer-lodash-method
      await this.db.UserModel.find(),
      "toSanitizedObject"
    );
  }

  async createUser(context, args) {
    debug("createUser");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel))
      return { success: false };

    if (await this.db.UserModel.findOne({ email: args.email }))
      return { success: false };

    let target = new this.db.UserModel({
      email: args.email,
      password:
        args.password && (await this.auth.encryptPassword(args.password)),
      roles: args.roles || []
    });

    await target.validateField({ field: "password", value: args.password }); // before it is encrypted
    await target.validate();
    await target.save();
    context.preCachePages({ path: "/users" }).catch(console.error);
    return { success: true, id: target.id };
  }

  async editUser(context, args) {
    debug("editUser");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel))
      return { success: false };

    let target = await this.db.UserModel.findById(args.id);
    if (!target) return { success: false };

    target.email = args.email;
    if (args.password) {
      await target.validateField({ field: "password", value: args.password }); // before it is encrypted
      target.password = await this.auth.encryptPassword(args.password);
    }
    target.roles = args.roles;

    await target.validate();
    await target.save();
    context.preCachePages({ path: "/users" }).catch(console.error);
    return { success: true, id: target.id };
  }

  async deleteUser(context, args) {
    debug("deleteUser");

    let user = await context.getUser();
    if (!user || !_.includes(user.roles, accessLevel))
      return { success: false };

    let target = await this.db.UserModel.findById(args.id);
    if (!target) return { success: false };

    await target.remove();
    context.preCachePages({ path: "/users" }).catch(console.error);
    return { success: true, id: args.id };
  }
}

module.exports = UsersRepository;
