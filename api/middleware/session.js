"use strict";

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

module.exports = async app => {
  const db = app.di.get("db");

  const store = new MongoStore({
    mongooseConnection: db.mongoose.connection,
    collection: "frontSessions"
  });

  const sessionMiddleware = session({
    secret: app.config.sessionSecret,
    store,
    resave: false,
    rolling: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: app.config.sessionMaxAge
    }
  });

  return {
    express: sessionMiddleware,
    socket: (socket, next) =>
      _.get(socket, "request.res")
        ? sessionMiddleware(socket.request, socket.request.res, next)
        : next()
  };
};
