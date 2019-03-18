const request = require("supertest");
const express = require("express");
const BuildRoute = require("../Build");

describe("Build route", () => {
  let route;
  let app;

  beforeEach(async () => {
    route = new BuildRoute();
    await route.init();

    app = express();
    app.use(route.router);
  });

  test("works", async () => {
    return request(app)
      .get("/build.json")
      .expect(200)
      .expect("Content-Type", /json/);
  });
});
