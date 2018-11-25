"use strict";

module.exports = () => {
  return (req, res, next) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    return next();
  };
};
