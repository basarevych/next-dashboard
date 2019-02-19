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

    this.profitsTime = 0;
    this.salesTime = 0;
    this.clientsTime = 0;
    this.avgTimesTime = 0;
    this.marketSharesTime = 0;
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

  async init() {}

  generateProfits(context) {
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
    this.profitsTime = Date.now();
    context.preCachePages({ path: ["/dashboard"] }).catch(console.error);
  }

  generateSales(context) {
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
    this.salesTime = Date.now();
    context.preCachePages({ path: ["/dashboard"] }).catch(console.error);
  }

  generateClients(context) {
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
    this.clientsTime = Date.now();
    context.preCachePages({ path: ["/dashboard"] }).catch(console.error);
  }

  generateAvgTimes(context) {
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
    this.avgTimesTime = Date.now();
    context.preCachePages({ path: ["/dashboard"] }).catch(console.error);
  }

  generateMarketShares(context) {
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
      let max = this.fake.getInt(3, 6);

      let sum = 0;
      for (let i = 0; i < max; i++) {
        let vendor = variants.shift();

        let value = this.fake.getInt(10, 100 / max);
        sum += value;

        let sub1 = this.fake.getInt(1, value / 4);
        let sub2 = this.fake.getInt(1, value / 4);
        let sub3 = this.fake.getInt(1, value / 4);

        shares.push(
          new this.dashboard.MarketShareValueModel({
            id: `${country}:${_.toUpper(vendor)}`,
            vendor: _.toUpper(vendor),
            name: vendor,
            values: [sub1, sub2, sub3, value - sub1 - sub2 - sub3]
          })
        );
      }

      let value = 100 - sum;
      let sub1 = this.fake.getInt(1, value / 4);
      let sub2 = this.fake.getInt(1, value / 4);
      let sub3 = this.fake.getInt(1, value / 4);

      let vendor = variants.shift();
      shares.push(
        new this.dashboard.MarketShareValueModel({
          id: `${country}:${_.toUpper(vendor)}`,
          vendor: _.toUpper(vendor),
          name: vendor,
          values: [sub1, sub2, sub3, value - sub1 - sub2 - sub3]
        })
      );

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

    this.marketSharesTime = Date.now();
    context.preCachePages({ path: ["/dashboard"] }).catch(console.error);
  }

  async getCountry(context, { id }) {
    debug("getCountry");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    const country = allCountries[iso2Lookup[_.toLower(id)]];
    if (!country) throw this.di.get("error.entityNotFound");
    return new this.dashboard.CountryModel({
      id: _.toUpper(country.iso2),
      name: country.name,
      callingCode: country.dialCode
    });
  }

  async getCountries(context) {
    debug("getCountries");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

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

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    if (Date.now() - this.profitsTime > 24 * 60 * 60 * 1000)
      this.generateProfits(context);

    const profit = _.find(this.profits, ["id", id]);
    if (!profit) throw this.di.get("error.entityNotFound");
    return profit;
  }

  async getProfitValues(context) {
    debug("getProfitValues");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    if (Date.now() - this.profitsTime > 24 * 60 * 60 * 1000)
      this.generateProfits(context);

    return this.profits;
  }

  async getSalesValue(context, { id }) {
    debug("getSalesValue");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    if (Date.now() - this.salesTime > 24 * 60 * 60 * 1000)
      this.generateSales(context);

    const sales = _.find(this.sales, ["id", id]);
    if (!sales) throw this.di.get("error.entityNotFound");
    return sales;
  }

  async getSalesValues(context) {
    debug("getSalesValues");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    if (Date.now() - this.salesTime > 24 * 60 * 60 * 1000)
      this.generateSales(context);

    return this.sales;
  }

  async getClientsValue(context, { id }) {
    debug("getClientsValue");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    if (Date.now() - this.clientsTime > 24 * 60 * 60 * 1000)
      this.generateClients(context);

    const clients = _.find(this.clients, ["id", id]);
    if (!clients) throw this.di.get("error.entityNotFound");
    return clients;
  }

  async getClientsValues(context) {
    debug("getClientsValues");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    if (Date.now() - this.clientsTime > 24 * 60 * 60 * 1000)
      this.generateClients(context);

    return this.clients;
  }

  async getAvgTimeValue(context, { id }) {
    debug("getAvgTimeValue");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    if (Date.now() - this.avgTimesTime > 24 * 60 * 60 * 1000)
      this.generateAvgTimes(context);

    const avgTime = _.find(this.avgTimes, ["id", id]);
    if (!avgTime) throw this.di.get("error.entityNotFound");
    return avgTime;
  }

  async getAvgTimeValues(context) {
    debug("getAvgTimeValues");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    if (Date.now() - this.avgTimesTime > 24 * 60 * 60 * 1000)
      this.generateAvgTimes(context);

    return this.avgTimes;
  }

  async getMarketSharesByCountry(context, { id, country }) {
    debug("getMarketShare");

    if (!country) country = id;

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    if (Date.now() - this.marketSharesTime > 24 * 60 * 60 * 1000)
      this.generateMarketShares(context);

    const countryData = _.find(this.marketShares, ["id", _.toUpper(country)]);
    if (!countryData) throw this.di.get("error.entityNotFound");

    return countryData;
  }

  async getMarketSharesValue(context, { id }) {
    debug("getMarketShareValue");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    if (Date.now() - this.marketSharesTime > 24 * 60 * 60 * 1000)
      this.generateMarketShares(context);

    const [country, vendor] = _.split(id, ":");

    const countryData = await this.getMarketSharesByCountry(context, {
      country
    });
    const vendorData = _.find(countryData.shares, ["id", _.toUpper(vendor)]);
    if (!vendorData) throw this.di.get("error.entityNotFound");

    return vendorData;
  }

  async getMarketShares(context) {
    debug("getMarketShares");

    let requester = await context.getUser();
    if (!requester) throw this.di.get("error.access");

    if (Date.now() - this.marketSharesTime > 24 * 60 * 60 * 1000)
      this.generateMarketShares(context);

    return this.marketShares;
  }
}

module.exports = DashboardRepository;
