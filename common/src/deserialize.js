"use strict";

const pako = require("pako");
const utf8 = require("utf8");
const { byteDecode } = require("base64util");
const { deserialize } = require("json-immutable");

/**
 * Deserialize and decompress BASE64 string into state
 * @param {string} input - BASE64-encoded string
 * @param {string} type - Either "redux" or "relay"
 * @return {object} The state
 */
module.exports = function(input, type) {
  if (!input) return undefined;

  let str = pako.inflate(byteDecode(input), { to: "string" });
  let obj = JSON.parse(str, (key, value) =>
    typeof value === "string" ? utf8.decode(value) : value
  );

  let state;
  if (type === "redux") state = deserialize(obj);
  else state = obj;

  return state;
};
