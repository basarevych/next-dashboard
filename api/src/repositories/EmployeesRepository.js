const debug = require("debug")("app:employees");
const { fetchConnectionFromArray } = require("fast-relay-pagination");
const { withFilter } = require("graphql-subscriptions");

class EmployeesRepository {
  constructor(di, config, user, employee, dashboardRepo, cache) {
    this.di = di;
    this.config = config;
    this.user = user;
    this.employee = employee;
    this.dashboardRepo = dashboardRepo;
    this.cache = cache;
  }

  static get $provides() {
    return "repository.employees";
  }

  static get $requires() {
    return [
      "di",
      "config",
      "model.user",
      "model.employee",
      "repository.dashboard",
      "cache"
    ];
  }

  isValid(context) {
    return context.token !== false;
  }

  isAllowed(/* context */) {
    return true;
  }

  subscribe(topics) {
    return withFilter(
      () => this.cache.pubsub.asyncIterator(topics),
      async (payload, args, context) =>
        this.isValid(context) && this.isAllowed(context)
    );
  }

  async publish(topic, employee) {
    this.cache.delPage({ page: "/tables", query: "*", userId: "*" });
    this.cache.delPage({ page: "/", query: "*", userId: "*" });
    this.cache.pubsub.publish(topic, {
      [topic]: employee.toObject({ getters: true, virtuals: true })
    });
  }

  async getEmployee(context, { id }) {
    debug("getEmployee");

    if (!id) return null;

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    const employee = await this.employee.model.findById(id);
    if (!employee) throw this.di.get("error.notFound");
    return employee;
  }

  async countEmployees(context, { dept }) {
    debug("countEmployees");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    return await this.employee.model.countDocuments(dept && { dept });
  }

  async getEmployeeConnection(
    context,
    { country, dept, sortBy, sortDir, after, first, before, last } = {}
  ) {
    debug("getEmployees");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    let filter;
    if (country && dept)
      filter = { $and: [{ "country.id": country }, { dept }] };
    else if (country) filter = { "country.id": country };
    else if (dept) filter = { dept };

    if (sortBy === "country") sortBy = "country.name";

    const connection = await fetchConnectionFromArray({
      dataPromiseFunc: this.employee.model.find.bind(this.employee.model),
      filter,
      after,
      first,
      before,
      last,
      orderFieldName: sortBy || "_id",
      sortType: sortDir === "desc" ? -1 : 1
    });
    connection.totalCount = await this.countEmployees(context, { dept });
    return connection;
  }

  async createEmployee(
    context,
    { uid, checked, name, dept, title, country, salary }
  ) {
    debug("createEmployee");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    let countryModel = await this.dashboardRepo.getCountry(context, {
      id: country
    });
    if (!countryModel) throw this.di.get("error.notFound");

    if (uid) {
      uid = parseInt(uid);
      if (!uid) {
        throw this.di.get("error.validation", {
          errors: { uid: "ERROR_INVALID_PATTERN" }
        });
      }
      uid = _.padStart(uid, 6, "0");
    }

    let employee = new this.employee.model({
      uid,
      checked,
      name,
      dept,
      title,
      country: {
        id: countryModel.id,
        name: countryModel.name
      },
      salary
    });

    await employee.validate();
    await employee.save();
    await this.publish("employeeCreated", employee);
    return employee;
  }

  async editEmployee(
    context,
    { id, uid, checked, name, dept, title, country, salary }
  ) {
    debug("editEmployee");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    let employee = await this.employee.model.findById(id);
    if (!employee) throw this.di.get("error.notFound");

    if (_.isString(uid)) {
      uid = parseInt(uid);
      if (!uid) {
        throw this.di.get("error.validation", {
          errors: { uid: "ERROR_INVALID_PATTERN" }
        });
      }
      employee.uid = _.padStart(uid, 6, "0");
    }
    if (_.isBoolean(checked)) employee.checked = checked;
    if (_.isString(name)) employee.name = name;
    if (_.isString(dept)) employee.dept = dept;
    if (_.isString(title)) employee.title = title;
    if (_.isString(country)) {
      let countryModel = await this.dashboardRepo.getCountry(context, {
        id: country
      });
      if (!countryModel) throw this.di.get("error.notFound");
      employee.country = {
        id: countryModel.id,
        name: countryModel.name
      };
    }
    if (_.isFinite(salary)) employee.salary = salary;

    await employee.validate();
    await employee.save();
    await this.publish("employeeUpdated", employee);
    return employee;
  }

  async deleteEmployee(context, { id }) {
    debug("deleteEmployee");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    let employee = await this.employee.model.findById(id);
    if (!employee) throw this.di.get("error.notFound");

    await this.employee.model.deleteOne({ _id: employee._id });
    await this.publish("employeeDeleted", employee);
    return employee;
  }
}

module.exports = EmployeesRepository;
