const debug = require("debug")("app:dashboard");
const uuid = require("uuid");
const EventEmitter = require("events");
const moment = require("../../../common/moment");
const constants = require("../../../common/constants");
const countries = require("../../lib/countries");
const fakes = require("../../lib/fakes");

class DashboardRepository extends EventEmitter {
  constructor() {
    super();
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.dashboard";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return [];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    this.countries = countries;

    this.employees = [];
    let usedNames = [];
    let first = true;
    for (let dept of _.keys(constants.depts)) {
      let max = first ? 10 : fakes.getInt(6, 10);
      first = false;
      for (let i = 0; i < max; i++)
        this.employees.push(this.createEmployee(usedNames, dept));
    }

    this.profit = [];
    let day = moment();
    for (let i = 0; i < 7; i++) {
      day.subtract(1, "day");
      let revenues = i
        ? fakes.getInt(70000, 100000)
        : fakes.getInt(110000, 120000);
      let expenses = i
        ? fakes.getInt(10000, 50000)
        : fakes.getInt(10000, 11000);
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
        sales: i ? fakes.getInt(2000, 5000) : fakes.getInt(5100, 6000)
      });
    }

    this.clients = [];
    day = moment();
    for (let i = 0; i < 7; i++) {
      day.subtract(1, "day");
      let prevClients = i ? this.clients[0].clients : fakes.getInt(7000, 10000);
      this.clients.unshift({
        date: day,
        clients: i
          ? fakes.getInt(prevClients - 100, prevClients - 700)
          : prevClients
      });
    }

    this.avgTime = [];
    day = moment();
    for (let i = 0; i < 7; i++) {
      day.subtract(1, "day");
      let prevAvgTime = i ? this.avgTime[0].avgTime : fakes.getInt(30, 90) / 10;
      this.avgTime.unshift({
        date: day,
        avgTime: i
          ? fakes.getInt(prevAvgTime * 10 + 10, prevAvgTime * 10 + 200) / 10
          : prevAvgTime
      });
    }
  }

  createEmployee(usedNames, dept) {
    let name;
    do name = fakes.getName();
    while (_.includes(usedNames, name));
    usedNames.push(name);
    return {
      id: uuid.v4(),
      checked: Math.random() > 0.3,
      name,
      dept,
      title: fakes.getTitle(),
      country: fakes.getCountry(countries),
      salary: fakes.getSalary()
    };
  }

  getCountries() {
    debug("getCountries");
    return this.countries;
  }

  getCountry(context, args) {
    debug("getCountry");
    return this.countries[args.code] || null;
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
