"use strict";

const { applyMiddleware, createStore } = require("redux");
const { combineReducers } = require("redux-immutable");
const thunk = require("redux-thunk").default;
const { usersReducer } = require("./users");

let rootReducer = combineReducers({
  users: usersReducer
});

module.exports = (di, initialState) => {
  const middleware = applyMiddleware(thunk.withExtraArgument(di));
  const store = createStore(rootReducer, initialState || undefined, middleware);
  di.registerInstance(store, "store");
  di.registerInstance(store.getState.bind(store), "getState");
  di.registerInstance(store.dispatch.bind(store), "dispatch");
  return store;
};
