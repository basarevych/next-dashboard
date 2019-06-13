const Chance = require("chance");
const constants = require("../common/constants");
const { allCountries, iso2Lookup } = require("../common/src/countries");

class Fake {
  constructor() {
    this.chance = new Chance();
  }

  static get $provides() {
    return "fake";
  }

  createRandomEmployee(usedNames) {
    let name;
    do name = this.getName();
    while (_.includes(usedNames, name));
    usedNames.push(name);

    let depts = _.keys(constants.depts);
    let dept = depts[this.getInt(0, depts.length - 1)];

    let code = this.getCountry();
    let country = allCountries[iso2Lookup[_.toLower(code)]].name;

    return {
      uid: _.padStart(usedNames.length, 6, "0"),
      checked: Math.random() > 0.3,
      name,
      dept,
      title: this.getTitle(),
      country: {
        id: code,
        name: country
      },
      salary: this.getSalary()
    };
  }

  getString(length = 32) {
    return this.chance.string({
      length,
      pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    });
  }

  getInt(min, max) {
    return this.chance.integer({
      min: Math.min(min, max),
      max: Math.max(min, max)
    });
  }

  getFloat(min, max) {
    return this.chance.floating({
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
    return _.toUpper(
      allCountries[this.getInt(0, allCountries.length - 1)].iso2
    );
  }

  getSalary() {
    return this.getInt(25, 225) * 1000;
  }
}

module.exports = Fake;
