const debug = require("debug")("app:dashboard");
const EventEmitter = require("events");
const moment = require("../../../common/moment");
const { allCountries, iso2Lookup } = require("country-telephone-data");

class DashboardRepository extends EventEmitter {
  constructor(modelDashboard, fake) {
    super();

    this.modelDashboard = modelDashboard;
    this.fake = fake;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "repository.dashboard";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return ["model.dashboard", "fake"];
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {
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
      this.profit.unshift(
        this.modelDashboard.ProfitModel({
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
        this.modelDashboard.SalesModel({
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
        this.modelDashboard.ClientsModel({
          date: day,
          clients: i
            ? this.fake.getInt(prevClients - 100, prevClients - 700)
            : prevClients
        })
      );
    }

    this.avgTime = [];
    day = moment();
    for (let i = 0; i < 7; i++) {
      day.subtract(1, "day");
      let prevAvgTime = i
        ? this.avgTime[0].avgTime
        : this.fake.getInt(30, 90) / 10;
      this.avgTime.unshift(
        this.modelDashboard.AbgTimeModel({
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
    if (!requester) return null;

    debug("getCountry");
    const country = iso2Lookup[id];
    return country
      ? this.di.get("model.country", {
          id: country.iso2,
          name: country.name,
          callingCode: country.dialCode
        })
      : null;
  }

  async getCountries(context) {
    let requester = await context.getUser();
    if (!requester) return [];

    debug("getCountries");
    return _.map(allCountries, country =>
      this.di.get("model.country", {
        id: country.iso2,
        name: country.name,
        callingCode: country.dialCode
      })
    );
  }

  async getProfit(context) {
    let requester = await context.getUser();
    if (!requester) return [];

    debug("getProfit");
    return this.profit;
  }

  async getSales(context) {
    let requester = await context.getUser();
    if (!requester) return [];

    debug("getSales");
    return this.sales;
  }

  async getClients(context) {
    let requester = await context.getUser();
    if (!requester) return [];

    debug("getClients");
    return this.clients;
  }

  async getAvgTime(context) {
    let requester = await context.getUser();
    if (!requester) return [];

    debug("getAvgTime");
    return this.avgTime;
  }
}

module.exports = DashboardRepository;
