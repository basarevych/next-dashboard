"use strict";

const BuildRoute = require("./build");
const CsrfRoute = require("./csrf");
const AuthRoute = require("./auth");
const AvatarsRoute = require("./avatars");
const RedirectRoute = require("./redirect");
const SitemapRoute = require("./sitemap");

module.exports = app => ({
  build: new BuildRoute(app),
  csrf: new CsrfRoute(app),
  auth: new AuthRoute(app),
  avatars: new AvatarsRoute(app),
  redirect: new RedirectRoute(app),
  sitemap: new SitemapRoute(app)
});
