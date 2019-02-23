import { createSelector } from "reselect";
import constants from "../../../common/constants";

export const getCsrf = state => state.getIn(["auth", "csrf"]);

export const isAuthenticated = state =>
  state.getIn(["auth", "isAuthenticated"]);

export const isAdmin = state =>
  // eslint-disable-next-line lodash/prefer-lodash-method
  state.getIn(["auth", "roles"]).includes(constants.roles.ADMIN);

export const isAnonymous = state =>
  // eslint-disable-next-line lodash/prefer-lodash-method
  state.getIn(["auth", "roles"]).includes(constants.roles.ANONYMOUS);

export const getName = state => state.getIn(["auth", "name"]);

export const getEmail = state => state.getIn(["auth", "email"]);

export const getIsEmailVerified = state =>
  state.getIn(["auth", "isEmailVerified"]);

export const getGoogleMapsKey = state => state.getIn(["auth", "googleMapsKey"]);

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
