const request = require("supertest");
const express = require("express");
const Injectt = require("injectt");
const SitemapRoute = require("../Sitemap");

describe("Sitemap route", () => {
  let di;
  let route;
  let app;

  beforeEach(async () => {
    di = new Injectt();
    di.registerInstance(
      {
        appOrigins: ["http://127.0.0.1"]
      },
      "config"
    );
    di.registerClass(SitemapRoute);

    route = di.get("route.sitemap");
    await route.init();

    app = express();
    app.use(route.router);
  });

  test("works", async () => {
    return request(app)
      .get("/sitemap.xml")
      .expect(200)
      .expect("Content-Type", /application\/xml/);
  });
});
