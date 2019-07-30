import { createSelector } from "reselect";

export const getCreated = state => state.getIn(["app", "created"]);

export const getStatusCode = state => state.getIn(["app", "statusCode"]);

export const getUser = state => state.getIn(["app", "user"]);

export const getUserJS = createSelector(
  state => getUser(state),
  user => user.toJS()
);

export const getAppServer = state => state.getIn(["app", "appServer"]);

export const getApiServer = state => state.getIn(["app", "apiServer"]);

export const getWsServer = state => state.getIn(["app", "wsServer"]);

export const getLocale = state => state.getIn(["app", "locale"]);

export const getTheme = state => state.getIn(["app", "theme"]);

export const getMapboxToken = state => state.getIn(["app", "mapboxToken"]);

export const isStarted = state => state.getIn(["app", "isStarted"]);

export const isStopped = state => state.getIn(["app", "isStopped"]);

export const isConnected = state => state.getIn(["app", "isConnected"]);

export const getActiveSubscriptions = state =>
  state.getIn(["app", "activeSubscriptions"]);

export const hasActiveSubscription = (state, name) =>
  // eslint-disable-next-line lodash/prefer-lodash-method
  state.getIn(["app", "activeSubscriptions"]).includes(name);

export const isAuthModalOpen = state => state.getIn(["app", "isAuthModalOpen"]);
