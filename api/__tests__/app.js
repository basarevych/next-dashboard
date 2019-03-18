"use strict";

const EventEmitter = require("events");

describe("Application constructor", () => {
  let app;
  beforeEach(() => {
    jest.resetModules();
    const App = require("../app");
    app = new App();
  });

  test("DI container created and loaded", () => {
    expect(app.di.constructor.name).toBe("InjecttNode");
    expect(app.di.search(/.*/).length).toBeGreaterThan(0);
  });
});

describe("Application initialization", () => {
  let app;
  beforeEach(() => {
    jest.resetModules();
    const App = require("../app");
    app = new App();

    for (let item of app.di.singletons()) item.init = jest.fn(async () => {});

    app.di.get("middleware.session").session = _.noop;
    for (let item of _.values(app.di.get("middleware").middleware)) {
      if (item.express) item.express = jest.fn(() => ({ use: _.noop }));
      if (item.io) item.io = jest.fn(() => ({ use: _.noop }));
    }

    return app.init({ mainServer: new EventEmitter() });
  });

  test("Singletons initialized", () => {
    const singletons = app.di.singletons();
    expect(singletons.length).toBeGreaterThan(0);
    for (let item of singletons) expect(item.init).toHaveBeenCalled();
  });

  test("Middleware installed", () => {
    for (let item of _.values(app.di.get("middleware").middleware)) {
      if (item.express) expect(item.express).toHaveBeenCalled();
      if (item.io) expect(item.io).toHaveBeenCalled();
    }
  });
});
