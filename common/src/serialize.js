"use strict";

const pako = require("pako");
const utf8 = require("utf8");
const { byteEncode } = require("base64util");
const { serialize } = require("json-immutable");

/**
 * Sserialize Immutable state into BASE64 string
 */
module.exports = function(state, type) {
  if (!state) return "";

  let obj;
  if (type === "redux") {
    obj = serialize(state);
  } else {
    obj = state;
  }

  let str = JSON.stringify(obj, (key, value) =>
    _.isString(value) ? utf8.encode(value) : value
  );
  let output = byteEncode(pako.deflate(str, { to: "string" }));

  return output;
};
