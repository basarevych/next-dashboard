const debug = require("debug")("app:dashboard");
const path = require("path");
const fs = require("fs-extra");
const parse = require("csv-parse");
const { withFilter } = require("graphql-subscriptions");
const moment = require("../../common/src/moment");
const { allCountries } = require("../../common/src/countries");
const usStatesJson = require("../../data/gz_2010_us_040_00_500k.json");

class DashboardRepository {
  constructor(di, dashboard, fake, cache) {
    this.di = di;
    this.dashboard = dashboard;
    this.fake = fake;
    this.cache = cache;

    this.usStatesById = {};
    this.usStatesByName = {};
    this.usCities = {};

    this.usStatesJson = usStatesJson;
  }

  static get $provides() {
    return "repository.dashboard";
  }

  static get $requires() {
    return ["di", "model.dashboard", "fake", "cache"];
  }

  static get $lifecycle() {
    return "singleton";
  }

  async init() {
    if (this.promise) return this.promise;
    this.promise = (async () => {
      this.countries = {};
      for (let country of allCountries) {
        const id = country.iso2.toUpperCase();
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

      for (let line of data) {
        const id = line.id.toString();
        const stateId = line.state_id.toUpperCase();
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

      for (let state of Object.keys(this.usStatesById))
        this.usStatesById[state].sort((a, b) => b.population - a.population);
      for (let state of Object.keys(this.usStatesByName))
        this.usStatesByName[state].sort((a, b) => b.population - a.population);
    })();
    return this.promise;
  }

  isValid(context) {
    return context.token !== false;
  }

  isAllowed(/* context */) {
    return true;
  }

  subscribe(topics) {
    return withFilter(
      () => this.cache.pubsub.asyncIterator(topics),
      async (payload, args, context) =>
        this.isValid(context) && this.isAllowed(context)
    );
  }

  async publish(topic, values) {
    await this.cache.delPage({ page: "/dashboard", query: "*", userId: "*" });
    return this.cache.pubsub.publish(topic, { [topic]: values });
  }

  async getStatModels() {
    const date = moment().toDate();

    const lastVisitors = await this.cache.getLastStat({ name: "visitors" });
    let visitors;
    if (lastVisitors === null) {
      visitors = this.fake.getInt(10000, 50000);
    } else {
      visitors = lastVisitors.visitors + this.fake.getInt(0, 10000) - 5000;
      if (visitors < 10000) visitors = 10000 + this.fake.getInt(0, 5000);
      if (visitors > 50000) visitors = 50000 - this.fake.getInt(0, 5000);
    }
    const newVisitors = new this.dashboard.VisitorsValueModel({
      date,
      visitors
    });

    const lastLoad = await this.cache.getLastStat({ name: "load" });
    let load;
    if (lastLoad === null) {
      load = this.fake.getInt(0, 100);
    } else {
      load = lastLoad.load + (this.fake.getInt(0, 1000) - 500) / 100;
      if (load < 0) load = this.fake.getInt(0, 500) / 100;
      if (load > 100) load = 100 - this.fake.getInt(0, 500) / 100;
    }
    const newLoad = new this.dashboard.LoadValueModel({
      date,
      load
    });

    const lastMemory = await this.cache.getLastStat({ name: "memory" });
    let memory;
    if (lastMemory === null) {
      memory = this.fake.getInt(0, 100);
    } else {
      memory = lastMemory.memory + (this.fake.getInt(0, 1000) - 500) / 100;
      if (memory < 0) memory = this.fake.getInt(0, 500) / 100;
      if (memory > 100) memory = 100 - this.fake.getInt(0, 500) / 100;
    }
    const newMemory = new this.dashboard.MemoryValueModel({
      date,
      memory
    });

    const lastOperations = await this.cache.getLastStat({ name: "operations" });
    let operations;
    if (lastOperations === null) {
      operations = this.fake.getInt(10000, 50000);
    } else {
      operations =
        lastOperations.operations + this.fake.getInt(0, 10000) - 5000;
      if (operations < 10000) operations = 10000 + this.fake.getInt(0, 5000);
      if (operations > 50000) operations = 50000 - this.fake.getInt(0, 5000);
    }
    const newOperations = new this.dashboard.OperationsValueModel({
      date,
      operations
    });

    const lastAvgTime = await this.cache.getLastStat({ name: "avgTime" });
    let avgTime;
    if (lastOperations === null) {
      avgTime = this.fake.getInt(0, 30);
    } else {
      avgTime = lastAvgTime.avgTime + (this.fake.getInt(0, 1000) - 500) / 1000;
      if (avgTime < 0) avgTime = this.fake.getInt(0, 500) / 1000;
      if (avgTime > 30) avgTime = 30 - this.fake.getInt(0, 500) / 1000;
    }
    const newAvgTime = new this.dashboard.AvgTimeValueModel({
      date,
      avgTime
    });

    return { date, newVisitors, newLoad, newMemory, newOperations, newAvgTime };
  }

  async preseedStats() {
    let updated;
    do {
      updated = false;

      const visitors = await this.cache.getStatsLength({
        name: "visitors"
      });
      const load = await this.cache.getStatsLength({
        name: "load"
      });
      const memory = await this.cache.getStatsLength({
        name: "memory"
      });
      const operations = await this.cache.getStatsLength({
        name: "operations"
      });
      const avgTime = await this.cache.getStatsLength({
        name: "avgTime"
      });

      const {
        newVisitors,
        newLoad,
        newMemory,
        newOperations,
        newAvgTime
      } = await this.getStatModels();

      if (visitors < this.cache.statLength) {
        updated = true;
        await this.cache.pushStat({ name: "visitors", model: newVisitors });
      }

      if (load < this.cache.statLength) {
        updated = true;
        await this.cache.pushStat({ name: "load", model: newLoad });
      }

      if (memory < this.cache.statLength) {
        updated = true;
        await this.cache.pushStat({ name: "memory", model: newMemory });
      }

      if (operations < this.cache.statLength) {
        updated = true;
        await this.cache.pushStat({ name: "operations", model: newOperations });
      }

      if (avgTime < this.cache.statLength) {
        updated = true;
        await this.cache.pushStat({ name: "avgTime", model: newAvgTime });
      }

      await new Promise(resolve => setTimeout(resolve, 500));
    } while (updated);
  }

  async publishStats() {
    const {
      date,
      newVisitors,
      newLoad,
      newMemory,
      newOperations,
      newAvgTime
    } = await this.getStatModels();

    await this.cache.pushStat({ name: "visitors", model: newVisitors });
    await this.cache.pushStat({ name: "load", model: newLoad });
    await this.cache.pushStat({ name: "memory", model: newMemory });
    await this.cache.pushStat({ name: "operations", model: newOperations });
    await this.cache.pushStat({ name: "avgTime", model: newAvgTime });

    await this.publish("dashboardEvent", {
      id: this.dashboard.dateToID(date),
      visitors: {
        node: newVisitors
      },
      load: {
        node: newLoad
      },
      memory: {
        node: newMemory
      },
      operations: {
        node: newOperations
      },
      avgTime: {
        node: newAvgTime
      }
    });
  }

  async getCountry(context, { id }) {
    debug("getCountry");

    if (!id) return null;

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    const country = this.countries[id.toUpperCase()];
    if (!country) throw this.di.get("error.notFound");
    return country;
  }

  async getCountries(context) {
    debug("getCountries");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    return Object.keys(this.countries).map(id => this.countries[id]);
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
    result.otherPopulation = cities
      .slice(limit)
      .reduce((acc, cur) => acc + cur.population, 0);
    return result;
  }

  async getVisitorsValue(context, { id }) {
    debug("getVisitorsValue");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    const data = this.cache.getStats({ name: "visitors" });
    const visitors = data.find(item => item.id == id);
    if (!visitors) throw this.di.get("error.notFound");
    return visitors;
  }

  async getVisitorsValues(context) {
    debug("getVisitorsValues");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");
    return this.cache.getStats({ name: "visitors" });
  }

  async getLoadValue(context, { id }) {
    debug("getLoadValue");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    const data = this.cache.getStats({ name: "load" });
    const load = data.find(item => item.id === id);
    if (!load) throw this.di.get("error.notFound");
    return load;
  }

  async getLoadValues(context) {
    debug("getLoadValues");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    return this.cache.getStats({ name: "load" });
  }

  async getMemoryValue(context, { id }) {
    debug("getMemoryValue");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    const data = this.cache.getStats({ name: "memory" });
    const memory = data.find(item => item.id === id);
    if (!memory) throw this.di.get("error.notFound");
    return memory;
  }

  async getMemoryValues(context) {
    debug("getMemoryValues");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    return this.cache.getStats({ name: "memory" });
  }

  async getOperationsValue(context, { id }) {
    debug("getOperationsValue");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    const data = this.cache.getStats({ name: "operations" });
    const operations = data.find(item => item.id === id);
    if (!operations) throw this.di.get("error.notFound");
    return operations;
  }

  async getOperationsValues(context) {
    debug("getOperationsValues");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    return this.cache.getStats({ name: "operations" });
  }

  async getAvgTimeValue(context, { id }) {
    debug("getAvgTimeValue");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    const data = this.cache.getStats({ name: "avgTime" });
    const avgTime = data.find(item => item.id === id);
    if (!avgTime) throw this.di.get("error.notFound");
    return avgTime;
  }

  async getAvgTimeValues(context) {
    debug("getAvgTimeValues");

    if (!this.isValid(context)) throw this.di.get("error.unauthorized");
    if (!this.isAllowed(context)) throw this.di.get("error.forbidden");

    return this.cache.getStats({ name: "avgTime" });
  }
}

module.exports = DashboardRepository;
