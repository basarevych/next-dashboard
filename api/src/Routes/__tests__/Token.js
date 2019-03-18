const request = require("supertest");
const express = require("express");
const Injectt = require("injectt");
const TokenRoute = require("../Token");

jest.mock("jsonwebtoken");

const jwt = require("jsonwebtoken");

describe("Token route", () => {
  let di;
  let route;
  let app;
  let user = {
    id: "foo"
  };

  beforeEach(async () => {
    di = new Injectt();
    di.registerInstance(
      {
        sessionSecret: "x-files"
      },
      "config"
    );
    di.registerClass(TokenRoute);

    route = di.get("route.token");
    await route.init();

    jwt.sign = jest.fn((payload, secret, options, callback) => {
      expect(payload.userId).toBe("foo");
      expect(secret).toBe("x-files");
      expect(options.expiresIn).toBeTruthy();
      callback(null, "foobar");
    });

    app = express();
    app.use((req, res, next) => {
      req.getUser = async => user;
      next();
    });
    app.use(route.router);
  });

  test("works", async () => {
    return request(app)
      .get("/token")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(res.body.token).toBe("foobar");
        expect(jwt.sign).toHaveBeenCalled();
      });
  });
});
