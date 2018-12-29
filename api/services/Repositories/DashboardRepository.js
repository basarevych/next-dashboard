const debug = require("debug")("app:dashboard");
const uuid = require("uuid");
const EventEmitter = require("events");
const moment = require("../../../common/moment");
const constants = require("../../../common/constants");
const countries = require("../../lib/countries");

class DashboardRepository extends EventEmitter {
  constructor(fake) {
    super();

    this.fake = fake;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.dashboard";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["fake"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    this.employees = [];
    let usedNames = [];
    let first = true;
    for (let dept of _.keys(constants.depts)) {
      let max = first ? 10 : this.fake.getInt(6, 10);
      first = false;
      for (let i = 0; i < max; i++)
        this.employees.push(this.createEmployee(usedNames, dept));
    }

    this.profit = [];
    let day = moment();
    for (let i = 0; i < 7; i++) {
      day.subtract(1, "day");
      let revenues = i
        ? this.fake.getInt(70000, 100000)
        : this.fake.getInt(110000, 120000);
      let expenses = i
        ? this.fake.getInt(10000, 50000)
        : this.fake.getInt(10000, 11000);
      this.profit.unshift({
        date: day,
        revenues,
        expenses,
        profit: revenues - expenses
      });
    }

    this.sales = [];
    day = moment();
    for (let i = 0; i < 7; i++) {
      day.subtract(1, "day");
      this.sales.unshift({
        date: day,
        sales: i ? this.fake.getInt(2000, 5000) : this.fake.getInt(5100, 6000)
      });
    }

    this.clients = [];
    day = moment();
    for (let i = 0; i < 7; i++) {
      day.subtract(1, "day");
      let prevClients = i
        ? this.clients[0].clients
        : this.fake.getInt(7000, 10000);
      this.clients.unshift({
        date: day,
        clients: i
          ? this.fake.getInt(prevClients - 100, prevClients - 700)
          : prevClients
      });
    }

    this.avgTime = [];
    day = moment();
    for (let i = 0; i < 7; i++) {
      day.subtract(1, "day");
      let prevAvgTime = i
        ? this.avgTime[0].avgTime
        : this.fake.getInt(30, 90) / 10;
      this.avgTime.unshift({
        date: day,
        avgTime: i
          ? this.fake.getInt(prevAvgTime * 10 + 10, prevAvgTime * 10 + 200) / 10
          : prevAvgTime
      });
    }
  }

  createEmployee(usedNames, dept) {
    let name;
    do name = this.fake.getName();
    while (_.includes(usedNames, name));
    usedNames.push(name);
    return {
      id: uuid.v4(),
      checked: Math.random() > 0.3,
      name,
      dept,
      title: this.fake.getTitle(),
      country: this.fake.getCountry(),
      salary: this.fake.getSalary()
    };
  }

  getCountries() {
    debug("getCountries");
    return countries;
  }

  getCountry(context, args) {
    debug("getCountry");
    return countries[args.code] || null;
  }

  getEmployees() {
    debug("getEmployees");
    return this.employees;
  }

  getProfit() {
    debug("getProfit");
    return this.profit;
  }

  getSales() {
    debug("getSales");
    return this.sales;
  }

  getClients() {
    debug("getClients");
    return this.clients;
  }

  getAvgTime() {
    debug("getAvgTime");
    return this.avgTime;
  }
}

module.exports = DashboardRepository;
