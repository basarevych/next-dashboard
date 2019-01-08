const debug = require("debug")("app:employees");
const EventEmitter = require("events");
const { cursorToDocument } = require("graphql-relay-connection");
const constants = require("../../../common/constants");

const accessLevel = constants.roles.AUTHENTICATED;

class EmployeesRepository extends EventEmitter {
  constructor(employee, getState, dispatch) {
    super();

    this.employee = employee;
    this.getState = getState;
    this.dispatch = dispatch;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.employees";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["model.employee", "getState", "dispatch"];
  }

  async getEmployee(context, { id }) {
    debug("getEmployee");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel)) return null;

    return this.employee.model.findById(id);
  }

  async getEmployees(context, { after, first, before, last } = {}) {
    debug("getEmployees");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel)) return [];

    if (!last && !first) first = 10;
    const docAfter = cursorToDocument(after);
    const docBefore = cursorToDocument(before);

    // eslint-disable-next-line lodash/prefer-lodash-method
    let query = this.employee.model
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

  async createEmployee(
    context,
    { checked, name, dept, title, country, salary }
  ) {
    debug("createEmployee");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel)) return null;

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
    return employee;
  }

  async editEmployee(
    context,
    { id, checked, name, dept, title, country, salary }
  ) {
    debug("editEmployee");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel)) return null;

    let employee = await this.employee.model.findById(id);
    if (!employee) return null;

    if (_.isBoolean(checked)) employee.checked = checked;
    if (_.isString(name)) employee.name = name;
    if (_.isString(dept)) employee.dept = dept;
    if (_.isString(title)) employee.title = title;
    if (_.isString(country)) employee.country = country;
    if (_.isFinite(salary)) employee.salary = salary;

    await employee.validate();
    await employee.save();
    context.preCachePages({ path: ["/", "/tables"] }).catch(console.error);
    return employee;
  }

  async deleteEmployee(context, { id }) {
    debug("deleteEmployee");

    let requester = await context.getUser();
    if (!requester || !_.includes(requester.roles, accessLevel)) return null;

    let employee = await this.employee.model.findById(id);
    if (!employee) return null;

    await employee.remove();
    context.preCachePages({ path: ["/", "/tables"] }).catch(console.error);
    return employee;
  }
}

module.exports = EmployeesRepository;
