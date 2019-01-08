"use strict";

const _ = require("lodash");
const fs = require("fs-extra");
const path = require("path");

const browsers = fs.readFileSync(
  path.join(__dirname, ".browserslistrc"),
  "utf8"
);

module.exports = api => {
  api.cache(false);
  return {
    presets: [
      [
        "next/babel",
        {
          "preset-env": {
            modules: "commonjs",
            targets: {
              browsers: _.split(browsers, /[\r\n]+/)
            }
          }
        }
      ]
    ],
    plugins: ["relay", "lodash"]
  };
};
