"use strict";

module.exports = function tokenize(str, esc, sep) {
  const result = [];
  let tmp = "";
  for (let i = 0; i < str.length; i++) {
    const c = str.charAt(i);
    if (c === esc) {
      tmp += str.charAt(++i);
    } else if (c === sep) {
      result.push(tmp);
      tmp = "";
    } else {
      tmp += c;
    }
  }
  result.push(tmp);
  return result;
};
