"use strict";

const EventEmitter = require("events");

describe("Application constructor", () => {
  let app;
  beforeEach(() => {
    jest.resetModules();
    const App = require("../App");
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
    const App = require("../App");
    app = new App();

    app.express.use = jest.fn(_.noop);

    for (let item of Array.from(app.di.singletons().values()))
      item.init = jest.fn(async () => {});

    return app.init({ mainServer: new EventEmitter() });
  });

  test("Singletons and middleware initialized", () => {
    const singletons = app.di.singletons().values();
    expect(Array.from(singletons).length).toBeGreaterThan(0);
    for (let item of Array.from(singletons))
      expect(item.init).toHaveBeenCalled();
    expect(app.express.use).toHaveBeenCalled();
  });
});
