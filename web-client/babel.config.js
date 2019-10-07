"use strict";

module.exports = api => {
  api.cache(false);
  return {
    presets: ["next/babel"],
    plugins: ["@babel/transform-strict-mode", "relay"]
  };
};
