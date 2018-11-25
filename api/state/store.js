"use strict";

const { applyMiddleware, createStore } = require("redux");
const { combineReducers } = require("redux-immutable");
const thunk = require("redux-thunk").default;
const { appReducer } = require("./app");
const { usersReducer } = require("./users");

let rootReducer = combineReducers({
  app: appReducer,
  users: usersReducer
});

let middleware = applyMiddleware(thunk);

module.exports = initialState =>
  createStore(rootReducer, initialState, middleware);
