const EventEmitter = require("events");
const moment = require("../../../common/moment");

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

class ProfitModel {
  constructor({ date, revenues, expenses, profit }) {
    this.id = dateToID(date);
    this.date = date;
    this.revenues = revenues;
    this.expenses = expenses;
    this.profit = profit;
  }
}

class SalesModel {
  constructor({ date, sales }) {
    this.id = dateToID(date);
    this.date = date;
    this.sales = sales;
  }
}

class ClientsModel {
  constructor({ date, clients }) {
    this.id = dateToID(date);
    this.date = date;
    this.clients = clients;
  }
}

class AvgTimeModel {
  constructor({ date, avgTime }) {
    this.id = dateToID(date);
    this.date = date;
    this.avgTime = avgTime;
  }
}

class Dashboard extends EventEmitter {
  constructor() {
    super();

    this.CountryModel = CountryModel;
    this.ProfitModel = ProfitModel;
    this.SalesModel = SalesModel;
    this.ClientsModel = ClientsModel;
    this.AvgTimeModel = AvgTimeModel;
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "model.dashboard";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $lifecycle() {
    return "singleton";
  }

  async init() {}
}

module.exports = Dashboard;
