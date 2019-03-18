const request = require("supertest");
const express = require("express");
const CsrfRoute = require("../CSRF");

describe("Csrf route", () => {
  let route;
  let app;
  let csrfToken;

  beforeEach(async () => {
    route = new CsrfRoute();
    await route.init();

    csrfToken = jest.fn(_.constant("foobar"));

    app = express();
    app.use((req, res, next) => {
      req.csrfToken = csrfToken;
      next();
    });
    app.use(route.router);
  });

  test("works", async () => {
    return request(app)
      .get("/csrf")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(res.body.csrf).toBe("foobar");
        expect(csrfToken).toHaveBeenCalled();
      });
  });
});
