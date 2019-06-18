const moment = require("../../common/src/moment");

function dateToID(date) {
  const m = moment(date);
  return moment(m.format("YYYY-MM-DD 00:00:00"))
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

class ProfitValueModel {
  constructor({ date, revenues, expenses, profit }) {
    this.id = dateToID(date);
    this.date = date;
    this.revenues = revenues;
    this.expenses = expenses;
    this.profit = profit;
  }
}

class SalesValueModel {
  constructor({ date, sales }) {
    this.id = dateToID(date);
    this.date = date;
    this.sales = sales;
  }
}

class ClientsValueModel {
  constructor({ date, clients }) {
    this.id = dateToID(date);
    this.date = date;
    this.clients = clients;
  }
}

class AvgTimeValueModel {
  constructor({ date, avgTime }) {
    this.id = dateToID(date);
    this.date = date;
    this.avgTime = avgTime;
  }
}

class Dashboard {
  constructor() {
    this.CountryModel = CountryModel;
    this.USCityModel = USCityModel;
    this.ProfitValueModel = ProfitValueModel;
    this.SalesValueModel = SalesValueModel;
    this.ClientsValueModel = ClientsValueModel;
    this.AvgTimeValueModel = AvgTimeValueModel;
  }

  static get $provides() {
    return "model.dashboard";
  }

  static get $lifecycle() {
    return "singleton";
  }

  async init() {}
}

module.exports = Dashboard;
