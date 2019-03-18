const request = require("supertest");
const express = require("express");
const fs = require("fs-extra");
const AvatarsRoute = require("../Avatars");

describe("Avatars route", () => {
  let route;
  let app;
  let user;
  let image;

  beforeEach(async () => {
    route = new AvatarsRoute();
    await route.init();

    for (let i = 0; i < route.maxAvatars; i++)
      route.avatars.push(route.anonymous);

    let data = fs.readFileSync(route.anonymous);
    image = {
      type: "image/png",
      dataLarge: data,
      dataSmall: data
    };

    app = express();
    app.use((req, res, next) => {
      req.getUser = () => Promise.resolve(user);
      next();
    });
    app.use(route.router);

    global.fetch = jest.fn();
  });

  test("all avatars are ready", async () => {
    route.randomize = jest.fn();
    route.download = jest.fn(_.constant(image));
    user = {
      roles: [],
      providers: []
    };

    for (let i = 0; i < route.maxAvatars; i++) {
      await request(app)
        .get(`/avatars/${i}`)
        .expect(200)
        .expect("Cache-Control", /.+/);
      expect(route.randomize).toHaveBeenCalled();
      expect(route.download).toHaveBeenCalledWith(route.anonymous);
    }
  });

  test("user's profile avatar is used", async () => {
    route.randomize = jest.fn();
    route.download = jest.fn(_.constant(image));

    let url = "http://example.com";
    user = {
      roles: ["SOME_ROLE"],
      providers: [
        {
          profile: {
            photos: [{ value: url }]
          }
        }
      ]
    };

    await request(app)
      .get(`/avatars/0`)
      .expect(200)
      .expect("Cache-Control", /.+/);
    expect(route.randomize).toHaveBeenCalled();
    expect(route.download).toHaveBeenCalledWith(url);
  });
});
