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

  createEmployee(usedNames, dept) {
    let name;
    do name = this.getName();
    while (_.includes(usedNames, name));
    usedNames.push(name);
    return {
      checked: Math.random() > 0.3,
      name,
      dept,
      title: this.getTitle(),
      country: this.getCountry(),
      salary: this.getSalary()
    };
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
    return allCountries[this.getInt(0, allCountries.length - 1)].iso2;
  }

  getSalary() {
    return this.getInt(25, 225) * 1000;
  }
}

module.exports = Fake;
