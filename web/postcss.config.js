"use strict";

const path = require("path");
const fs = require("fs-extra");
const crypto = require("crypto");

function copyAssets({ url, relativePath }, { from }) {
  let name = path.basename(relativePath);
  let match = name.match(/^(.*)\.([^.]+)$/);
  let base = match ? match[1] : name;
  let ext = match ? match[2] : "";

  if (name === ".") return url;
  if (/^\/?\/static\//.test(url)) return url;

  let absolutePath;
  if (url[0] === "/") absolutePath = path.join(__dirname, relativePath);
  else absolutePath = path.join(from, relativePath);

  let file;
  try {
    file = fs.readFileSync(absolutePath);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }

  let hash = crypto.createHash("md5");
  hash.update(file);

  let hashedName = ext
    ? `${base}.${hash.digest("hex")}.${ext}`
    : `${hash.digest("hex")}.${name}`;
  fs.outputFileSync(path.join(__dirname, "static", "assets", hashedName), file);
  return "/static/assets/" + hashedName;
}

module.exports = () => {
  const plugins = {
    "postcss-url": {
      url: copyAssets
    },
    "postcss-preset-env": {
      features: {
        "custom-properties": {
          preserve: false,
          variables: {}
        },
        "custom-media-queries": {
          preserve: false,
          extensions: {}
        }
      }
    }
  };

  if (process.env.NODE_ENV === "production")
    plugins["postcss-clean"] = {
      inline: false,
      level: { 1: { specialComments: 0 } }
    };

  return { plugins };
};
