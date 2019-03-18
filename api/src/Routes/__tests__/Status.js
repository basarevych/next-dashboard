const request = require("supertest");
const express = require("express");
const StatusRoute = require("../Status");

describe("Status route", () => {
  let route;
  let app;
  let status = { field: "foobar" };
  let getStatus;

  beforeEach(async () => {
    route = new StatusRoute();
    await route.init();

    getStatus = jest.fn(async () => status);

    app = express();
    app.use((req, res, next) => {
      req.getAuthStatus = getStatus;
      next();
    });
    app.use(route.router);
  });

  test("works", async () => {
    return request(app)
      .get("/status")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(res.body).toEqual(status);
        expect(getStatus).toHaveBeenCalled();
      });
  });
});
