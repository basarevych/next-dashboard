const request = require("supertest");
const express = require("express");
const constants = require("../../../../common/constants");
const Injectt = require("injectt");
const CacheService = require("../../Cache");
const AuthService = require("../../Auth");
const AuthRoute = require("../OAuth");
const ModelDashboard = require("../../models/Dashboard");

jest.mock("ioredis", () => {
  const Redis = require("ioredis-mock");
  if (typeof Redis === "object") {
    // the first mock is an ioredis shim because ioredis-mock depends on it
    // https://github.com/stipsan/ioredis-mock/blob/master/src/index.js#L101-L111
    return {
      Command: { _transformer: { argument: {}, reply: {} } }
    };
  }
  // second mock for our code
  return function(...args) {
    return new Redis(args);
  };
});

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
    di.registerClass(CacheService);
    di.registerClass(AuthService);
    di.registerClass(AuthRoute);
    di.registerClass(ModelDashboard);

    await di.get("cache").init();
    await di.get("auth").init();
    route = di.get("route.oauth");
    route.authenticate = jest.fn(() => (req, res, next) => res.end());
    await route.init();

    app = express();
    app.use(route.router);
  });

  let tests = [];
  for (let provider of Object.values(constants.oauthProviders)) {
    const name = provider.toLowerCase();
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

    for (let provider of Object.values(constants.oauthProviders)) {
      expect(calls.filter(item => item === provider.toLowerCase()).length).toBe(
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
