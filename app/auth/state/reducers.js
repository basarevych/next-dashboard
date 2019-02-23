import { Map, List, fromJS } from "immutable";
import { combineReducers } from "redux-immutable";
import * as types from "./types";

/* State Shape
Map({
  csrf: String,
  isAuthenticated: Boolean,
  name: String,
  email: String,
  isEmailVerified: Boolean,
  roles: List([String]),
  providers: Map({
    name: Booelan, // is linked
  }),
  googleMapsKey: null,
})
*/

const csrfReducer = (state = "", action) => {
  switch (action.type) {
    case types.SET_CSRF:
      if (!_.isUndefined(action.csrf)) return action.csrf;
      break;
  }
  return state;
};

const isAuthenticatedReducer = (state = false, action) => {
  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.isAuthenticated)) return action.isAuthenticated;
      break;
  }
  return state;
};

const nameReducer = (state = null, action) => {
  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.name)) return action.name;
      break;
  }
  return state;
};

const emailReducer = (state = "", action) => {
  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.email)) return action.email;
      break;
  }
  return state;
};

const isEmailVerifiedReducer = (state = false, action) => {
  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.isEmailVerified)) return action.isEmailVerified;
      break;
  }
  return state;
};

const rolesReducer = (state = List([]), action) => {
  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.roles)) return fromJS(action.roles);
      break;
  }
  return state;
};

const providersReducer = (state = Map({}), action) => {
  switch (action.type) {
    case types.SET_STATUS:
      if (!_.isUndefined(action.providers)) return fromJS(action.providers);
      break;
  }
  return state;
};

const googleMapsKeyReducer = (state = "", action) => {
  switch (action.type) {
    case types.SET_GOOGLE_MAPS_KEY:
      if (!_.isUndefined(action.googleMapsKey)) return action.googleMapsKey;
      break;
  }
  return state;
};

const reducer = combineReducers({
  csrf: csrfReducer,
  isAuthenticated: isAuthenticatedReducer,
  name: nameReducer,
  email: emailReducer,
  isEmailVerified: isEmailVerifiedReducer,
  roles: rolesReducer,
  providers: providersReducer,
  googleMapsKey: googleMapsKeyReducer
});

export default reducer;
