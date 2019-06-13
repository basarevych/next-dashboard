/**
 * Application configuration section
 * http://pm2.keymetrics.io/docs/usage/application-declaration/
 */

"use strict";

const path = require("path");

module.exports = {
  apps: [
    {
      name: "next-dashboard-web",
      script: path.join(__dirname, "bin", "www"),
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
