"use strict";

const Injectt = require("injectt");
const CachingProxy = require("../CachingProxy");
const constants = require("../../../../../common/constants");

describe("Caching proxy", () => {
  let di;
  let app = {
    next: {},
    analyzeRequest: _.constant({ page: "/prepare", query: { prepared: true } })
  };
  let req = { path: "/" };
  let res = {};
  let page = "/";
  let query = {};
  let user = { roles: [constants.roles.AUTHENTICATED] };
  let upstream = {};

  beforeEach(() => {
    app.next.renderToHTML = _.constant("foobar");
    res.statusCode = 200;
    di = new Injectt();
    di.registerInstance(app, "app");
    di.registerInstance({ setHelpers: _.noop }, "middleware.helpers");
    di.registerInstance(upstream, "middleware.render.nextRenderer");
    di.registerClass(CachingProxy);
  });

  test("Proxies request and caches the result", async () => {
    const renderer = di.get("middleware.render.cachingProxy");

    let result1, result2;
    let renderError;
    try {
      upstream.renderPage = jest.fn(_.constant("proxied"));
      result1 = await renderer.renderPage({ req, res, page, query, user });
      expect(upstream.renderPage).toHaveBeenCalledWith({
        req,
        res,
        page,
        query,
        user
      });

      upstream.renderPage = jest.fn(_.constant("proxied"));
      result2 = await renderer.renderPage({ req, res, page, query, user });
      expect(upstream.renderPage).not.toHaveBeenCalledWith();
    } catch (error) {
      renderError = error;
    }

    expect(renderError).toBeUndefined();
    expect(result1).toEqual("proxied");
    expect(result2).toEqual(result1);
  });

  test("Prepares pages", async () => {
    let calls = [];
    const renderer = di.get("middleware.render.cachingProxy");
    renderer.renderPage = jest.fn(async ({ page, query }) => {
      calls.push({ page, query });
    });

    await renderer.preparePages({ user, path: "/" });
    expect(renderer.renderPage).toHaveBeenCalled();
    expect(calls.length).toBeGreaterThan(0);
    _.forEach(calls, call => {
      expect(call.page).toBe("/prepare");
      expect(call.query).toEqual({ prepared: true });
    });
  });
});
