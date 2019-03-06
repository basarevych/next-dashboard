"use strict";

const actions = require("../actions");

describe("Users", () => {
  test("actions export action creators", () => {
    expect(_.keys(actions).length).toBeGreaterThan(0);
    for (let item of _.values(actions)) {
      let action = item({});
      expect(_.isObject(action)).toBeTruthy();
      expect(_.isString(action.type)).toBeTruthy();
    }
  });
});
