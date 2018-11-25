const mongoose = require("mongoose");
const EventEmitter = require("events");
const Auth = require("./Auth");
const User = require("../models/User");
const Provider = require("../models/Provider");
const constants = require("../../common/constants");
const moment = require("../../common/moment");

class Database extends EventEmitter {
  constructor(app, config) {
    super();

    this.app = app;
    this.config = config;

    this.mongoose = mongoose;
    this.mongoose.Promise = global.Promise;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "db";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["app", "config"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  userTemplate(params = {}) {
    let now = Date.now();

    let roles = params.roles || [];
    if (!_.includes(roles, constants.roles.AUTHENTICATED))
      roles.push(constants.roles.AUTHENTICATED);
    if (_.includes(roles, constants.roles.ANONYMOUS))
      throw new Error("Cannot create a user with the ANONYMOUS role");

    return {
      ...params,
      whenCreated: params.whenCreated || now,
      whenUpdated: params.whenUpdated || now,
      isEmailVerified: params.isEmailVerified || false,
      roles,
      providers: params.providers || []
    };
  }

  userObject({ user }) {
    return {
      id: user._id.toString(),
      whenCreated: moment(user.whenCreated),
      whenUpdated: moment(user.whenUpdated),
      name: user.name,
      email: user.email,
      roles: Array.from(user.roles),
      providers: Array.from(user.providers)
    };
  }

  async init() {
    await new Promise((resolve, reject) => {
      try {
        this.ObjectId = this.mongoose.Types.ObjectId;

        this.ProviderSchema = Provider(this.app);
        this.UserSchema = User(this.app);

        this.ProviderModel = this.mongoose.model(
          "Provider",
          this.ProviderSchema
        );
        this.UserModel = this.mongoose.model("User", this.UserSchema);

        this.mongoose.connect(
          this.app.config.mongoUrl,
          { useNewUrlParser: true }
        );
        this.mongoose.connection
          .on("error", (...args) => {
            console.error("MongoDB error:", ...args);
            reject(args);
          })
          .once("open", () => {
            if (process.env.NODE_ENV !== "test")
              console.log("> MongoDB is online");
            resolve();
          });
      } catch (error) {
        reject(error);
      }
    });

    if (this.config.rootLogin && this.config.rootPassword) {
      let user = await this.UserModel.findOne({
        email: this.config.rootLogin
      }); // eslint-disable-line lodash/prefer-lodash-method
      if (!user) {
        user = new this.UserModel(
          this.userTemplate({
            email: this.config.rootLogin,
            password: await Auth.encryptPassword(this.config.rootPassword),
            roles: [constants.roles.ADMIN]
          })
        );
        await user.validate();
        await user.save();
        console.log("> Admin user created");
      }
    }

    this.anonymous = await this.UserModel.findOne({
      roles: constants.roles.ANONYMOUS
    });
    if (!this.anonymous) {
      let params = this.userTemplate({ email: "anonymous@example.com" });
      params.roles = _.filter(
        params.roles,
        item => item !== constants.roles.AUTHENTICATED
      );
      params.roles.push(constants.roles.ANONYMOUS);

      this.anonymous = new this.UserModel(params);
      await this.anonymous.validate();
      await this.anonymous.save();
      console.log("> Anonymous user created");
    }
  }
}

module.exports = Database;
