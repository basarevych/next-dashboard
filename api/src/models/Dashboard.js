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

class MarketShareValueModel {
  constructor({ id, vendor, name, values }) {
    this.id = id;
    this.vendor = vendor;
    this.name = name;
    this.values = values;
  }
}

class MarketShareModel {
  constructor({ id, shares }) {
    this.id = id;
    this.shares = shares;
  }
}

class Dashboard {
  constructor() {
    this.CountryModel = CountryModel;
    this.ProfitValueModel = ProfitValueModel;
    this.SalesValueModel = SalesValueModel;
    this.ClientsValueModel = ClientsValueModel;
    this.AvgTimeValueModel = AvgTimeValueModel;
    this.MarketShareModel = MarketShareModel;
    this.MarketShareValueModel = MarketShareValueModel;
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
