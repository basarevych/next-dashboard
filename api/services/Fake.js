const Chance = require("chance");
const EventEmitter = require("events");
const { allCountries } = require("country-telephone-data");

class Fake extends EventEmitter {
  constructor() {
    super();

    this.chance = new Chance();
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $provides() {
    return "fake";
  }

  // eslint-disable-next-line lodash/prefer-constant
  static get $requires() {
    return [];
  }

  getInt(min, max) {
    return this.chance.integer({
      min: Math.min(min, max),
      max: Math.max(min, max)
    });
  }

  getName() {
    return this.chance.name();
  }

  getTitle() {
    return this.chance.profession();
  }

  getCountry() {
    return allCountries[this.getInt(0, allCountries.length - 1)].name;
  }

  getSalary() {
    return this.getInt(25, 225) * 1000;
  }
}

module.exports = Fake;
