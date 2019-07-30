const mongoose = require("mongoose");
const constants = require("../../common/constants");

class Database {
  constructor(config, di, fake) {
    this.config = config;
    this.di = di;
    this.fake = fake;

    this.mongoose = mongoose;
    this.mongoose.Promise = global.Promise;
    this.ObjectId = mongoose.Types.ObjectId;
  }

  static get $provides() {
    return "db";
  }

  static get $requires() {
    return ["config", "di", "fake"];
  }

  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    if (this.promise) return this.promise;

    this.promise = Promise.resolve()
      .then(async () => {
        const UserClient = this.di.get("model.user.client");
        this.UserClientSchema = UserClient.schema;
        this.UserClientModel = UserClient.model;

        const UserProvider = this.di.get("model.user.provider");
        this.UserProviderSchema = UserProvider.schema;
        this.UserProviderModel = UserProvider.model;

        const User = this.di.get("model.user");
        this.UserSchema = User.schema;
        this.UserModel = User.model;

        const Employee = this.di.get("model.employee");
        this.EmployeeSchema = Employee.schema;
        this.EmployeeModel = Employee.model;

        return new Promise((resolve, reject) => {
          this.mongoose.connect(
            this.config.mongoUrl,
            {
              useNewUrlParser: true
            },
            error => {
              if (error) return reject(error);
              if (process.env.NODE_ENV !== "test")
                console.log("> MongoDB is online");
              resolve();
            }
          );
        });
      })
      .then(async () => {
        if (this.config.rootLogin && this.config.rootPassword) {
          let user = await this.UserModel.findOne({
            email: this.config.rootLogin
          }); // eslint-disable-line lodash/prefer-lodash-method
          let msg;
          if (user) {
            user.email = this.config.rootLogin;
            user.password = await this.di
              .get("auth")
              .encryptPassword(this.config.rootPassword);
            user.roles = [constants.roles.ADMIN];
            msg = "> Admin user updated";
          } else {
            user = new this.UserModel({
              name: "Charlie Root",
              email: this.config.rootLogin,
              password: await this.di
                .get("auth")
                .encryptPassword(this.config.rootPassword),
              roles: [constants.roles.ADMIN]
            });
            msg = "> Admin user created";
          }
          await user.validate();
          await user.save();
          console.log(msg);
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
