"use strict";

const pako = require("pako");
const utf8 = require("utf8");
const { byteEncode } = require("base64util");
const { serialize } = require("json-immutable");

/**
 * Sserialize Immutable state into BASE64 string
 */
module.exports = function(state) {
  if (!state) return "";

  state = state.setIn(["app", "di"], null);

  let json = serialize(state);
  let str = JSON.stringify(
    json,
    (key, value) => (_.isString(value) ? utf8.encode(value) : value)
  );
  let output = byteEncode(pako.deflate(str, { to: "string" }));

  return output;
};
