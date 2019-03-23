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

    //app.middleware.get("session").session = _.noop;
    app.di.get("ws").io = { use: jest.fn(_.noop) };
    app.express.use = jest.fn(_.noop);

    for (let item of app.di.singletons()) item.init = jest.fn(async () => {});

    return app.init({ mainServer: new EventEmitter() });
  });

  test("Singletons and middleware initialized", () => {
    const singletons = app.di.singletons();
    expect(singletons.length).toBeGreaterThan(0);
    for (let item of singletons) expect(item.init).toHaveBeenCalled();
    expect(app.express.use).toHaveBeenCalled();
    expect(app.di.get("ws").io.use).toHaveBeenCalled();
  });
});
