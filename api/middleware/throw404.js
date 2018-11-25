"use strict";

module.exports = () => (req, res, next) => {
  let error = new Error("Not Found");
  error.status = 404;
  next(error);
};
