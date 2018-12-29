"use strict";

module.exports = async () => (req, res, next) => {
  let error = new Error("Not Found");
  error.status = 404;
  next(error);
};
