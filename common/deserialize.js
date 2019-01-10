"use strict";

const pako = require("pako");
const utf8 = require("utf8");
const { byteDecode } = require("base64util");
const { deserialize } = require("json-immutable");

/**
 * Deserialize BASE64 string into Immutable state
 */
module.exports = function(input, type) {
  if (!input) return undefined;

  let str = pako.inflate(byteDecode(input), { to: "string" });
  let obj = JSON.parse(str, (key, value) =>
    _.isString(value) ? utf8.decode(value) : value
  );
  let state;
  if (type === "redux") state = deserialize(obj);
  else state = obj;

  return state;
};
