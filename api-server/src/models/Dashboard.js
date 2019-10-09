const moment = require("../../common/src/moment");

function dateToID(date) {
  return moment(date)
    .valueOf()
    .toString();
}

/**
 * Fake models so we have a class for these objects
 */

class CountryModel {
  constructor({ id, name, callingCode }) {
    this.id = id;
    this.name = name;
    this.callingCode = callingCode;
  }
}

class USCityModel {
  constructor({ id, name, stateId, stateName, lat, lng, population }) {
    this.id = id;
    this.name = name;
    this.stateId = stateId;
    this.stateName = stateName;
    this.lat = lat;
    this.lng = lng;
    this.population = population;
  }
}

class VisitorsValueModel {
  static fromString(string) {
    const data = JSON.parse(string);
    return new VisitorsValueModel({
      date: moment(data.date).toDate(),
      visitors: data.visitors
    });
  }

  constructor({ date, visitors }) {
    this.id = dateToID(date);
    this.date = date;
    this.visitors = visitors;
  }

  toString() {
    return JSON.stringify({
      date: this.date.valueOf(),
      visitors: this.visitors
    });
  }
}

class LoadValueModel {
  static fromString(string) {
    const data = JSON.parse(string);
    return new LoadValueModel({
      date: moment(data.date).toDate(),
      load: data.load
    });
  }

  constructor({ date, load }) {
    this.id = dateToID(date);
    this.date = date;
    this.load = load;
  }

  toString() {
    return JSON.stringify({
      date: this.date.valueOf(),
      load: this.load
    });
  }
}

class MemoryValueModel {
  static fromString(string) {
    const data = JSON.parse(string);
    return new MemoryValueModel({
      date: moment(data.date).toDate(),
      memory: data.memory
    });
  }

  constructor({ date, memory }) {
    this.id = dateToID(date);
    this.date = date;
    this.memory = memory;
  }

  toString() {
    return JSON.stringify({
      date: this.date.valueOf(),
      memory: this.memory
    });
  }
}

class OperationsValueModel {
  static fromString(string) {
    const data = JSON.parse(string);
    return new OperationsValueModel({
      date: moment(data.date).toDate(),
      operations: data.operations
    });
  }

  constructor({ date, operations }) {
    this.id = dateToID(date);
    this.date = date;
    this.operations = operations;
  }

  toString() {
    return JSON.stringify({
      date: this.date.valueOf(),
      operations: this.operations
    });
  }
}

class AvgTimeValueModel {
  static fromString(string) {
    const data = JSON.parse(string);
    return new AvgTimeValueModel({
      date: moment(data.date).toDate(),
      avgTime: data.avgTime
    });
  }

  constructor({ date, avgTime }) {
    this.id = dateToID(date);
    this.date = date;
    this.avgTime = avgTime;
  }

  toString() {
    return JSON.stringify({
      date: this.date.valueOf(),
      avgTime: this.avgTime
    });
  }
}

class Dashboard {
  constructor() {
    this.CountryModel = CountryModel;
    this.USCityModel = USCityModel;
    this.VisitorsValueModel = VisitorsValueModel;
    this.LoadValueModel = LoadValueModel;
    this.MemoryValueModel = MemoryValueModel;
    this.OperationsValueModel = OperationsValueModel;
    this.AvgTimeValueModel = AvgTimeValueModel;
  }

  static get $provides() {
    return "model.dashboard";
  }

  static get $lifecycle() {
    return "singleton";
  }

  dateToID(...args) {
    return dateToID(...args);
  }

  async init() {}
}

module.exports = Dashboard;
