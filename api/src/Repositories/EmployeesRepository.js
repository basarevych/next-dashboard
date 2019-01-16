const debug = require("debug")("app:employees");
const EventEmitter = require("events");
const {
  mongooseConnection: { cursorToDocument }
} = require("graphql-relay-connection");
const constants = require("../../../common/constants");

const accessLevel = constants.roles.AUTHENTICATED;

class EmployeesRepository extends EventEmitter {
  constructor(di, employee, getState, dispatch, pubsub) {
    super();

    this.di = di;
    this.employee = employee;
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
    return ["di", "model.employee", "getState", "dispatch", "pubsub"];
  }

  async getEmployee(context, { id }) {
    debug("getEmployee");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel))
      throw this.di.get("error.access");

    if (!id) return null;

    const employee = await this.employee.model.findById(id);
    if (!employee) throw this.di.get("error.entityNotFound");
    return employee;
  }

  async countEmployees(context) {
    debug("countEmployees");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel))
      throw this.di.get("error.access");

    return await this.employee.model.countDocuments();
  }

  async getEmployees(context, { after, first, before, last } = {}) {
    debug("getEmployees");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel))
      throw this.di.get("error.access");

    const docAfter = after && cursorToDocument(after);
    const docBefore = before && cursorToDocument(before);

    let params;
    if (docAfter || docBefore) {
      params = { _id: {} };
      if (docAfter) params._id.$gt = docAfter._id;
      if (docBefore) params._id.$lt = docBefore._id;
    }

    // eslint-disable-next-line lodash/prefer-lodash-method
    let query = this.employee.model.find(params).sort("_id");
    if (first || last) query = query.limit(Math.max(first, last) + 1); // add +1 for hasNextPage
    return await query;
  }

  async createEmployee(
    context,
    { checked, name, dept, title, country, salary }
  ) {
    debug("createEmployee");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel))
      throw this.di.get("error.access");

    let employee = new this.employee.model({
      checked,
      name,
      dept,
      title,
      country,
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
    { id, checked, name, dept, title, country, salary }
  ) {
    debug("editEmployee");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel))
      throw this.di.get("error.access");

    let employee = await this.employee.model.findById(id);
    if (!employee) throw this.di.get("error.entityNotFound");

    if (_.isBoolean(checked)) employee.checked = checked;
    if (_.isString(name)) employee.name = name;
    if (_.isString(dept)) employee.dept = dept;
    if (_.isString(title)) employee.title = title;
    if (_.isString(country)) employee.country = country;
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
    if (!requester || !_.includes(requester.roles, accessLevel))
      throw this.di.get("error.access");

    let employee = await this.employee.model.findById(id);
    if (!employee) throw this.di.get("error.entityNotFound");

    await employee.remove();
    context.preCachePages({ path: ["/", "/tables"] }).catch(console.error);
    this.pubsub.publish("employeeDeleted", { employeeDeleted: employee });
    return employee;
  }
}

module.exports = EmployeesRepository;
