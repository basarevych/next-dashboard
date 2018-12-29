const mongoose = require("mongoose");
const EventEmitter = require("events");
const User = require("../models/User");
const Provider = require("../models/Provider");
const constants = require("../../common/constants");

class Database extends EventEmitter {
  constructor(app, config, di) {
    super();

    this.app = app;
    this.config = config;
    this.di = di;

    this.mongoose = mongoose;
    this.mongoose.Promise = global.Promise;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "db";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["app", "config", "di"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
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
        user = new this.UserModel({
          email: this.config.rootLogin,
          password: await this.di
            .get("auth")
            .encryptPassword(this.config.rootPassword),
          roles: [constants.roles.ADMIN]
        });
        await user.validate();
        await user.save();
        console.log("> Admin user created");
      }
    }

    this.anonymous = await this.UserModel.findOne({
      roles: constants.roles.ANONYMOUS
    });
    if (!this.anonymous) {
      this.anonymous = new this.UserModel({
        email: "anonymous@example.com",
        roles: [constants.roles.ANONYMOUS]
      });
      await this.anonymous.validate();
      await this.anonymous.save();
      console.log("> Anonymous user created");
    }
  }
}

module.exports = Database;
