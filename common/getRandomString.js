"use strict";

/**
 * Get random string
 * @param {number} length                   The length of the string
 * @param {object} [params]                 Parameters object
 * @param {boolean} [params.lower=true]     Include lower latin letters
 * @param {boolean} [params.upper=true]     Include upper latin letters
 * @param {boolean} [params.digits=true]    Include digits
 * @param {boolean} [params.special=false]  Include some special characters
 * @return {string}                         Returns the string
 */
module.exports = function getRandomString(length, params = {}) {
  let { lower = true, upper = true, digits = true, special = false } = params;

  let chars = "";
  if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
  if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (digits) chars += "0123456789";
  if (special) chars += "~!@#$%^&*()_+-=/|?";

  let string = "";
  for (let i = 0; i < length; i++)
    string += chars.charAt(Math.floor(Math.random() * chars.length));

  return string;
};
