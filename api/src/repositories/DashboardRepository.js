const debug = require("debug")("app:dashboard");
const moment = require("../../common/src/moment");
const { allCountries, iso2Lookup } = require("../../common/src/countries");

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
    this.promise = Promise.resolve();

    this.generateProfits();
    this.generateSales();
    this.generateClients();
    this.generateAvgTimes();
    this.generateMarketShares();
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

  generateMarketShares() {
    const vendors = [
      "Apple",
      "Samsung",
      "IBM",
      "Foxconn",
      "Sony",
      "HP",
      "Dell",
      "Fujitsu"
    ];

    const getRandomData = country => {
      country = _.toUpper(country);

      let shares = [];
      let variants = _.shuffle(vendors);
      let maxVendors = this.fake.getInt(5, vendors.length - 1);

      for (let i = 0; i < maxVendors; i++) {
        let name = variants.shift();
        let vendor = _.toUpper(name);

        let values = [];
        for (let j = 0; j < 4; j++) values.push(this.fake.getFloat(10, 30));

        shares.push(
          new this.dashboard.MarketShareValueModel({
            id: `${country}:${vendor}`,
            vendor,
            name,
            values
          })
        );
      }

      shares.sort(
        (a, b) =>
          _.reduce(a.values, (acc, cur) => acc + cur, 0) -
          _.reduce(b.values, (acc, cur) => acc + cur, 0)
      );

      return new this.dashboard.MarketShareModel({
        id: country,
        shares
      });
    };

    this.marketShares = _.map(allCountries, country =>
      getRandomData(country.iso2)
    );
    this.marketShares.unshift(getRandomData("WORLD"));
  }

  isValid(context) {
    return context.token !== false;
  }

  isAllowed(/* context */) {
    return true;
  }

  async getCountry(context, { id }) {
    debug("getCountry");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    const country = allCountries[iso2Lookup[_.toLower(id)]];
    if (!country) throw this.di.get("error.notFound");
    return new this.dashboard.CountryModel({
      id: _.toUpper(country.iso2),
      name: country.name,
      callingCode: country.dialCode
    });
  }

  async getCountries(context) {
    debug("getCountries");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    return _.map(
      allCountries,
      country =>
        new this.dashboard.CountryModel({
          id: _.toUpper(country.iso2),
          name: country.name,
          callingCode: country.dialCode
        })
    );
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

  async getMarketSharesByCountry(context, { id, country }) {
    debug("getMarketShare");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    if (!country) country = id;

    const countryData = _.find(this.marketShares, ["id", _.toUpper(country)]);
    if (!countryData) throw this.di.get("error.notFound");

    return countryData;
  }

  async getMarketSharesValue(context, { id }) {
    debug("getMarketShareValue");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    const [country, vendor] = _.split(id, ":");
    const countryData = await this.getMarketSharesByCountry(context, {
      country
    });
    const vendorData = _.find(countryData.shares, ["id", _.toUpper(vendor)]);
    if (!vendorData) throw this.di.get("error.notFound");

    return vendorData;
  }

  async getMarketShares(context) {
    debug("getMarketShares");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    return this.marketShares;
  }
}

module.exports = DashboardRepository;
