const debug = require("debug")("app:dashboard");
const EventEmitter = require("events");
const moment = require("../../../common/moment");
const { allCountries, iso2Lookup } = require("../../../common/countries");

class DashboardRepository extends EventEmitter {
  constructor(di, dashboard, fake) {
    super();

    this.di = di;
    this.dashboard = dashboard;
    this.fake = fake;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.dashboard";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["di", "model.dashboard", "fake"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    this.profits = [];
    let day = moment();
    for (let i = 0; i < 7; i++) {
      day.subtract(1, "day");
      let revenues = i
        ? this.fake.getInt(70000, 100000)
        : this.fake.getInt(110000, 120000);
      let expenses = i
        ? this.fake.getInt(10000, 50000)
        : this.fake.getInt(10000, 11000);
      this.profits.unshift(
        new this.dashboard.ProfitValueModel({
          date: day,
          revenues,
          expenses,
          profit: revenues - expenses
        })
      );
    }

    this.sales = [];
    day = moment();
    for (let i = 0; i < 7; i++) {
      day.subtract(1, "day");
      this.sales.unshift(
        new this.dashboard.SalesValueModel({
          date: day,
          sales: i ? this.fake.getInt(2000, 5000) : this.fake.getInt(5100, 6000)
        })
      );
    }

    this.clients = [];
    day = moment();
    for (let i = 0; i < 7; i++) {
      day.subtract(1, "day");
      let prevClients = i
        ? this.clients[0].clients
        : this.fake.getInt(7000, 10000);
      this.clients.unshift(
        new this.dashboard.ClientsValueModel({
          date: day,
          clients: i
            ? this.fake.getInt(prevClients - 100, prevClients - 700)
            : prevClients
        })
      );
    }

    this.avgTimes = [];
    day = moment();
    for (let i = 0; i < 7; i++) {
      day.subtract(1, "day");
      let prevAvgTime = i
        ? this.avgTimes[0].avgTime
        : this.fake.getInt(30, 90) / 10;
      this.avgTimes.unshift(
        new this.dashboard.AvgTimeValueModel({
          date: day,
          avgTime: i
            ? this.fake.getInt(prevAvgTime * 10 + 10, prevAvgTime * 10 + 200) /
              10
            : prevAvgTime
        })
      );
    }
  }

  async getCountry(context, { id }) {
    debug("getCountry");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    const country = allCountries[iso2Lookup[id]];
    if (!country) throw this.di.get("error.entityNotFound");
    return new this.dashboard.CountryModel({
      id: country.iso2,
      name: country.name,
      callingCode: country.dialCode
    });
  }

  async countCountries(context) {
    debug("countCountries");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    return allCountries.length;
  }

  async getCountries(context) {
    debug("getCountries");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    return _.map(
      allCountries,
      country =>
        new this.dashboard.CountryModel({
          id: country.iso2,
          name: country.name,
          callingCode: country.dialCode
        })
    );
  }

  async getProfitValue(context, { id }) {
    debug("getProfitValue");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    const profit = _.find(this.profits, ["id", id]);
    if (!profit) throw this.di.get("error.entityNotFound");
    return profit;
  }

  async countProfitValues(context) {
    debug("countProfitValues");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    return this.profits.length;
  }

  async getProfitValues(context) {
    debug("getProfitValues");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    return this.profits;
  }

  async getSalesValue(context, { id }) {
    debug("getSalesValue");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    const sales = _.find(this.sales, ["id", id]);
    if (!sales) throw this.di.get("error.entityNotFound");
    return sales;
  }

  async countSalesValues(context) {
    debug("countSalesValues");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    return this.sales.length;
  }

  async getSalesValues(context) {
    debug("getSalesValues");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    return this.sales;
  }

  async getClientsValue(context, { id }) {
    debug("getClientsValue");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    const clients = _.find(this.clients, ["id", id]);
    if (!clients) throw this.di.get("error.entityNotFound");
    return clients;
  }

  async countClientsValues(context) {
    debug("countClientsValues");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    return this.clients.length;
  }

  async getClientsValues(context) {
    debug("getClientsValues");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    return this.clients;
  }

  async getAvgTimeValue(context, { id }) {
    debug("getAvgTimeValue");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    const avgTime = _.find(this.avgTimes, ["id", id]);
    if (!avgTime) throw this.di.get("error.entityNotFound");
    return avgTime;
  }

  async countAvgTimeValues(context) {
    debug("countAvgTimeValues");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    return this.avgTimes.length;
  }

  async getAvgTimeValues(context) {
    debug("getAvgTimeValues");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    return this.avgTimes;
  }
}

module.exports = DashboardRepository;
