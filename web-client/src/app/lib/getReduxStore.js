import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux-immutable";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import app from "../state";
import dashboard from "../../dashboard/state";
import employees from "../../employees/state";
import users from "../../users/state";

let rootReducer = combineReducers({
  app,
  dashboard,
  employees,
  users
});

const storeFactory = (di, initialState) => {
  let middleware = applyMiddleware(thunk.withExtraArgument(di));
  if (process.env.NODE_ENV === "development")
    middleware = composeWithDevTools(middleware);
  return createStore(rootReducer, initialState || undefined, middleware);
};

const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

export default function getReduxStore(di, initialState) {
  let store;
  if (!process.browser || process.env.NODE_ENV === "test") {
    // Always make a new store if server,
    // otherwise state is shared between requests
    store = storeFactory(di, initialState);
  } else {
    if (window[__NEXT_REDUX_STORE__]) store = window[__NEXT_REDUX_STORE__];
    else store = window[__NEXT_REDUX_STORE__] = storeFactory(di, initialState);
  }

  di.registerInstance(store, "store");
  di.registerInstance(store.getState.bind(store), "getState");
  di.registerInstance(store.dispatch.bind(store), "dispatch");

  return store;
}
