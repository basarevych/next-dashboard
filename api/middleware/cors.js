"use strict";

const cors = require("cors");

module.exports = app => {
  let error = new Error("Not allowed by CORS");
  error.status = 403;

  app.origin = app.config.appOrigins;
  let corsOptions = {
    origin: function(origin, callback) {
      let match = !origin || _.includes(app.config.appOrigins, origin);
      if (!match) console.log(`CORS! ${origin}`);
      return match ? callback(null, true) : callback(error);
    }
  };

  return cors(corsOptions);
};
