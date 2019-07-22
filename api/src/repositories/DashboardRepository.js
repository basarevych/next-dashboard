const debug = require("debug")("app:dashboard");
const path = require("path");
const fs = require("fs-extra");
const parse = require("csv-parse");
const moment = require("../../common/src/moment");
const { allCountries } = require("../../common/src/countries");

class DashboardRepository {
  constructor(di, dashboard, fake) {
    this.di = di;
    this.dashboard = dashboard;
    this.fake = fake;
  }

  static get $provides() {
    return "repository.dashboard";
  }

  static get $requires() {
    return ["di", "model.dashboard", "fake"];
  }

  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    if (this.promise) return this.promise;
    this.promise = Promise.resolve().then(async () => {
      this.generateProfits();
      this.generateSales();
      this.generateClients();
      this.generateAvgTimes();

      this.countries = {};
      for (let country of allCountries) {
        const id = _.toUpper(country.iso2);
        this.countries[id] = new this.dashboard.CountryModel({
          id,
          name: country.name,
          callingCode: country.dialCode
        });
      }

      const text = await fs.readFile(
        path.join(__dirname, "..", "..", "data", "uscitiesv1.5.csv"),
        "utf8"
      );

      const data = await new Promise((resolve, reject) =>
        parse(
          text,
          {
            columns: true,
            skip_empty_lines: true
          },
          (error, output) => {
            if (error) return reject(error);
            resolve(output);
          }
        )
      );

      this.usStatesById = {};
      this.usStatesByName = {};
      this.usCities = {};
      for (let line of data) {
        const id = line.id.toString();
        const stateId = _.toUpper(line.state_id);
        const stateName = line.state_name;
        const lat = Number(line.lat);
        const lng = Number(line.lng);
        if (isNaN(lat) || isNaN(lng)) {
          console.log("Garbage data for: " + line.city);
          continue;
        }
        const model = new this.dashboard.USCityModel({
          id,
          name: line.city,
          stateId,
          stateName,
          lat,
          lng,
          population: Number(line.population)
        });
        this.usCities[id] = model;
        if (!this.usStatesById[stateId]) this.usStatesById[stateId] = [];
        this.usStatesById[stateId].push(model);
        if (!this.usStatesByName[stateName])
          this.usStatesByName[stateName] = [];
        this.usStatesByName[stateName].push(model);
      }

      for (let state of _.keys(this.usStatesById))
        this.usStatesById[state].sort((a, b) => b.population - a.population);
      for (let state of _.keys(this.usStatesByName))
        this.usStatesByName[state].sort((a, b) => b.population - a.population);
    });
    return this.promise;
  }

  generateProfits() {
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
          date: day.toDate(),
          revenues,
          expenses,
          profit: revenues - expenses
        })
      );
    }
  }

  generateSales() {
    this.sales = [];
    let day = moment();
    for (let i = 0; i < 7; i++) {
      day.subtract(1, "day");
      this.sales.unshift(
        new this.dashboard.SalesValueModel({
          date: day.toDate(),
          sales: i ? this.fake.getInt(2000, 5000) : this.fake.getInt(5100, 6000)
        })
      );
    }
  }

  generateClients() {
    this.clients = [];
    let day = moment();
    for (let i = 0; i < 7; i++) {
      day.subtract(1, "day");
      let prevClients = i
        ? this.clients[0].clients
        : this.fake.getInt(7000, 10000);
      this.clients.unshift(
        new this.dashboard.ClientsValueModel({
          date: day.toDate(),
          clients: i
            ? this.fake.getInt(prevClients - 100, prevClients - 700)
            : prevClients
        })
      );
    }
  }

  generateAvgTimes() {
    this.avgTimes = [];
    let day = moment();
    for (let i = 0; i < 7; i++) {
      day.subtract(1, "day");
      let prevAvgTime = i
        ? this.avgTimes[0].avgTime
        : this.fake.getInt(30, 90) / 10;
      this.avgTimes.unshift(
        new this.dashboard.AvgTimeValueModel({
          date: day.toDate(),
          avgTime: i
            ? this.fake.getInt(prevAvgTime * 10 + 10, prevAvgTime * 10 + 200) /
              10
            : prevAvgTime
        })
      );
    }
  }

  isValid(context) {
    return context.token !== false;
  }

  isAllowed(/* context */) {
    return true;
  }

  async getCountry(context, { id }) {
    debug("getCountry");

    if (!id) return null;

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    const country = this.countries[_.toUpper(id)];
    if (!country) throw this.di.get("error.notFound");
    return country;
  }

  async getCountries(context) {
    debug("getCountries");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    return _.map(_.keys(this.countries), id => this.countries[id]);
  }

  async getUSCity(context, { id }) {
    debug("getUSCity");

    if (!id) return null;

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    const city = this.usCities[id];
    if (!city) throw this.di.get("error.notFound");
    return city;
  }

  async getUSCities(context, { stateId, stateName, limit }) {
    debug("getUSCities");

    if (!stateId && !stateName) return [];
    if (!limit) limit = 10;

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    let cities = stateId
      ? this.usStatesById[stateId]
      : this.usStatesByName[stateName];
    if (!cities) throw this.di.get("error.notFound");

    let result = cities.slice(0, limit);
    result.otherPopulation = _.reduce(
      cities.slice(limit),
      (acc, cur) => acc + cur.population,
      0
    );
    return result;
  }

  async getProfitValue(context, { id }) {
    debug("getProfitValue");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    const profit = _.find(this.profits, ["id", id]);
    if (!profit) throw this.di.get("error.notFound");
    return profit;
  }

  async getProfitValues(context) {
    debug("getProfitValues");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    return this.profits;
  }

  async getSalesValue(context, { id }) {
    debug("getSalesValue");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    const sales = _.find(this.sales, ["id", id]);
    if (!sales) throw this.di.get("error.notFound");
    return sales;
  }

  async getSalesValues(context) {
    debug("getSalesValues");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    return this.sales;
  }

  async getClientsValue(context, { id }) {
    debug("getClientsValue");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    const clients = _.find(this.clients, ["id", id]);
    if (!clients) throw this.di.get("error.notFound");
    return clients;
  }

  async getClientsValues(context) {
    debug("getClientsValues");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    return this.clients;
  }

  async getAvgTimeValue(context, { id }) {
    debug("getAvgTimeValue");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    const avgTime = _.find(this.avgTimes, ["id", id]);
    if (!avgTime) throw this.di.get("error.notFound");
    return avgTime;
  }

  async getAvgTimeValues(context) {
    debug("getAvgTimeValues");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    return this.avgTimes;
  }
}

module.exports = DashboardRepository;
