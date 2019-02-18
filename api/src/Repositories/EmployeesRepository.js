const debug = require("debug")("app:employees");
const EventEmitter = require("events");
const { fetchConnectionFromArray } = require("fast-relay-pagination");
const jwt = require("jsonwebtoken");
const { withFilter } = require("graphql-subscriptions");
const constants = require("../../../common/constants");

const accessLevel = constants.roles.AUTHENTICATED;

class EmployeesRepository extends EventEmitter {
  constructor(
    di,
    config,
    user,
    employee,
    dashboardRepo,
    getState,
    dispatch,
    pubsub
  ) {
    super();

    this.di = di;
    this.config = config;
    this.user = user;
    this.employee = employee;
    this.dashboardRepo = dashboardRepo;
    this.getState = getState;
    this.dispatch = dispatch;
    this.pubsub = pubsub;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.employees";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return [
      "di",
      "config",
      "model.user",
      "model.employee",
      "repository.dashboard",
      "getState",
      "dispatch",
      "pubsub"
    ];
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

  async getEmployee(context, { id }) {
    debug("getEmployee");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    if (!id) return null;

    const employee = await this.employee.model.findById(id);
    if (!employee) throw this.di.get("error.entityNotFound");
    return employee;
  }

  async countEmployees(context, { dept }) {
    debug("countEmployees");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    return await this.employee.model.countDocuments(dept && { dept });
  }

  async getEmployeeConnection(
    context,
    { country, dept, sortBy, sortDir, after, first, before, last } = {}
  ) {
    debug("getEmployees");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    let filter;
    if (country && dept)
      filter = { $and: [{ "country.id": country }, { dept }] };
    else if (country) filter = { "country.id": country };
    else if (dept) filter = { dept };

    if (sortBy === "country") sortBy = "country.name";

    return fetchConnectionFromArray({
      dataPromiseFunc: this.employee.model.find.bind(this.employee.model),
      filter,
      after,
      first,
      before,
      last,
      orderFieldName: sortBy || "_id",
      sortType: sortDir === "desc" ? -1 : 1
    });
  }

  async createEmployee(
    context,
    { uid, checked, name, dept, title, country, salary }
  ) {
    debug("createEmployee");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    let countryModel = await this.dashboardRepo.getCountry(context, {
      id: country
    });
    if (!countryModel) throw this.di.get("error.entityNotFound");

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
    context.preCachePages({ path: ["/", "/tables"] }).catch(console.error);
    this.pubsub.publish("employeeCreated", { employeeCreated: employee });
    return employee;
  }

  async editEmployee(
    context,
    { id, uid, checked, name, dept, title, country, salary }
  ) {
    debug("editEmployee");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    let employee = await this.employee.model.findById(id);
    if (!employee) throw this.di.get("error.entityNotFound");

    if (_.isString(uid)) employee.uid = uid;
    if (_.isBoolean(checked)) employee.checked = checked;
    if (_.isString(name)) employee.name = name;
    if (_.isString(dept)) employee.dept = dept;
    if (_.isString(title)) employee.title = title;
    if (_.isString(country)) {
      let countryModel = await this.dashboardRepo.getCountry(context, {
        id: country
      });
      if (!countryModel) throw this.di.get("error.entityNotFound");
      employee.country = {
        id: countryModel.id,
        name: countryModel.name
      };
    }
    if (_.isFinite(salary)) employee.salary = salary;

    await employee.validate();
    await employee.save();
    context.preCachePages({ path: ["/", "/tables"] }).catch(console.error);
    this.pubsub.publish("employeeUpdated", { employeeUpdated: employee });
    return employee;
  }

  async deleteEmployee(context, { id }) {
    debug("deleteEmployee");

    let requester = await context.getUser();
    if (!this.isAllowed(requester)) throw this.di.get("error.access");

    let employee = await this.employee.model.findById(id);
    if (!employee) throw this.di.get("error.entityNotFound");

    await employee.remove();
    context.preCachePages({ path: ["/", "/tables"] }).catch(console.error);
    this.pubsub.publish("employeeDeleted", { employeeDeleted: employee });
    return employee;
  }
}

module.exports = EmployeesRepository;
