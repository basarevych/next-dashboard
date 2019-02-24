const mongoose = require("mongoose");
const EventEmitter = require("events");
const constants = require("../../common/constants");

class Database extends EventEmitter {
  constructor(app, config, di, fake) {
    super();

    this.app = app;
    this.config = config;
    this.di = di;
    this.fake = fake;

    this.mongoose = mongoose;
    this.mongoose.Promise = global.Promise;
    this.ObjectId = mongoose.Types.ObjectId;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "db";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["app", "config", "di", "fake"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = new Promise(async (resolve, reject) => {
      try {
        const Provider = this.di.get("model.provider");
        this.ProviderSchema = Provider.schema;
        this.ProviderModel = Provider.model;

        const User = this.di.get("model.user");
        this.UserSchema = User.schema;
        this.UserModel = User.model;

        const Employee = this.di.get("model.employee");
        this.EmployeeSchema = Employee.schema;
        this.EmployeeModel = Employee.model;

        this.mongoose.connect(this.app.config.mongoUrl, {
          useNewUrlParser: true
        });
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
    }).then(async () => {
      if (this.config.rootLogin && this.config.rootPassword) {
        let user = await this.UserModel.findOne({
          email: this.config.rootLogin
        }); // eslint-disable-line lodash/prefer-lodash-method
        if (!user) {
          user = new this.UserModel({
            name: "Charlie Root",
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
          name: "Anonymous",
          email: "anonymous@example.com",
          password: this.fake.getString(64),
          roles: [constants.roles.ANONYMOUS]
        });
        await this.anonymous.validate();
        await this.anonymous.save();
        console.log("> Anonymous user created");
      }

      // eslint-disable-next-line lodash/prefer-lodash-method
      let count = await this.EmployeeModel.countDocuments();
      if (!count) {
        let employees = [];
        let usedNames = [];
        for (let i = 0; i < 100 * _.keys(constants.depts).length; i++) {
          employees.push(
            new this.EmployeeModel(this.fake.createRandomEmployee(usedNames))
          );
        }
        _.shuffle(employees);
        for (let employee of employees) await employee.save();
        console.log("> Employees created");
      }
    });

    return this.promise;
  }
}

module.exports = Database;
