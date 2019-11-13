import { createSelector } from "reselect";

export const getCreated = state => state.getIn(["app", "created"]);

export const getStatusCode = state => state.getIn(["app", "statusCode"]);

export const getLocale = state => state.getIn(["app", "locale"]);

export const getTheme = state => state.getIn(["app", "theme"]);

export const getUser = createSelector(
  state => state.getIn(["app", "user"]),
  user => user.toJS()
);

export const getIsStarted = state => state.getIn(["app", "isStarted"]);

export const getIsStopped = state => state.getIn(["app", "isStopped"]);

export const getIsConnected = state => state.getIn(["app", "isConnected"]);

export const getIsSubscribed = state => state.getIn(["app", "isSubscribed"]);

export const getIsAuthModalOpen = state =>
  state.getIn(["app", "isAuthModalOpen"]);
