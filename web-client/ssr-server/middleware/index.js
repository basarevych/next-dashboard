const EarlyMiddleware = require("./Early");
const ParseMiddleware = require("./Parse");
const SessionMiddleware = require("./Session");
const HelpersMiddleware = require("./Helpers");
const RoutesMiddleware = require("./Routes");
const RenderMiddleware = require("./Render");
const LateMiddleware = require("./Late");
const ErrorMiddleware = require("./Error");

module.exports = app => {
  const middleware = new Map();
  // order matters
  middleware.set("early", new EarlyMiddleware(app));
  middleware.set("parse", new ParseMiddleware(app));
  middleware.set("session", new SessionMiddleware(app));
  middleware.set("helpers", new HelpersMiddleware(app));
  middleware.set("routes", new RoutesMiddleware(app));
  middleware.set("render", new RenderMiddleware(app));
  middleware.set("late", new LateMiddleware(app));
  middleware.set("error", new ErrorMiddleware(app));
  return middleware;
};
