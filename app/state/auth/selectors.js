import { createSelector } from "reselect";
import constants from "../../../common/constants";

export const getCsrf = state => state.getIn(["auth", "csrf"]);

export const getCookie = state => state.getIn(["auth", "cookie"]);

export const isAuthenticated = state =>
  state.getIn(["auth", "isAuthenticated"]);

/* eslint-disable lodash/prefer-lodash-method */
export const isAdmin = state =>
  state.getIn(["auth", "roles"]).includes(constants.roles.ADMIN);
/* eslint-enable */

export const getName = state => state.getIn(["auth", "name"]);

export const getEmail = state => state.getIn(["auth", "email"]);

export const getRoles = createSelector(
  state => state.getIn(["auth", "roles"]),
  roles => roles.toJS()
);

export const getAllProviders = createSelector(
  state => state.getIn(["auth", "providers"]),
  providers => Array.from(providers.keys())
);

export const getUserProviders = createSelector(
  state => state.getIn(["auth", "providers"]),
  providers => providers.toJS()
);
