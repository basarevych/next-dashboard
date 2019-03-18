const request = require("supertest");
const express = require("express");
const RedirectRoute = require("../Redirect");

describe("Redirect route", () => {
  let route;
  let app;
  let inCookies = { redirect: "foobar" };
  let outCookieName;
  let outCookieValue;
  let setCookie = jest.fn((name, value) => {
    outCookieName = name;
    outCookieValue = value;
  });

  beforeEach(async () => {
    route = new RedirectRoute();
    await route.init();

    app = express();
    app.use((req, res, next) => {
      req.cookies = inCookies;
      res.cookie = setCookie;
      next();
    });
    app.use(route.router);
  });

  test("redirect to links", async () => {
    return Promise.all([
      request(app)
        .get("/redirect/github")
        .expect(302, /github\.com/),
      request(app)
        .get("/redirect/benchmarks")
        .expect(302, /gtmetrix\.com/),
      request(app)
        .get("/redirect/responsiveness")
        .expect(302, /material\.io/)
    ]);
  });

  test("self-redirect with resetting the cookie", async () => {
    await request(app)
      .get("/redirect")
      .expect(302, /foobar/);
    expect(outCookieName).toBe("redirect");
    expect(outCookieValue).toBe("");
  });
});
