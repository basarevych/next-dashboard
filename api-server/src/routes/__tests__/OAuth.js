const request = require("supertest");
const express = require("express");
const constants = require("../../../../common/constants");
const Injectt = require("injectt");
const AuthService = require("../../Auth");
const AuthRoute = require("../OAuth");

describe("Auth route", () => {
  let di;
  let route;
  let app;

  beforeEach(async () => {
    di = new Injectt();
    for (let item of AuthService.$requires) di.registerInstance({}, item);
    di.registerInstance(
      {
        jwtSecret: "zoo",
        apiOrigins: ["http://127.0.0.1"],
        apiAppServer: "http://127.0.0.1",
        facebookAuthId: "foo",
        facebookAuthSecret: "foo",
        googleAuthId: "foo",
        googleAuthSecret: "foo",
        twitterAuthKey: "foo",
        twitterAuthSecret: "foo"
      },
      "config"
    );
    di.registerClass(AuthService);
    di.registerClass(AuthRoute);

    await di.get("auth").init();
    route = di.get("route.oauth");
    route.authenticate = jest.fn(() => (req, res, next) => res.end());
    await route.init();

    app = express();
    app.use(route.router);
  });

  let tests = [];
  for (let provider of _.values(constants.oauthProviders)) {
    const name = _.toLower(provider);
    test(`responds for ${provider} auth provider`, () => {
      let promise = request(app)
        .get(`/oauth/${name}`)
        .expect(200);
      tests.push(promise);
      return promise;
    });
    test(`responds for ${provider} auth callback`, () => {
      let promise = request(app)
        .get(`/oauth/${name}/callback`)
        .expect(200);
      tests.push(promise);
      return promise;
    });
  }

  test("all prividers have been called", async () => {
    await Promise.all(tests);

    let calls = [];
    for (let item of route.authenticate.mock.calls) calls.push(item[0]);

    for (let provider of _.values(constants.oauthProviders)) {
      expect(_.filter(calls, item => item === _.toLower(provider)).length).toBe(
        2
      );
    }
  });

  test(`responds for unknown auth provider`, () => {
    return request(app)
      .get(`/oauth/non-existents`)
      .expect(404);
  });
});
