export const getCreated = state => state.getIn(["app", "created"]);

export const getStatusCode = state => state.getIn(["app", "statusCode"]);

export const getAppServer = state => state.getIn(["app", "appServer"]);

export const getApiServer = state => state.getIn(["app", "apiServer"]);

export const getSsrApiServer = state => state.getIn(["app", "ssrApiServer"]);

export const getWsServer = state => state.getIn(["app", "wsServer"]);

export const getLocale = state => state.getIn(["app", "locale"]);

export const getTheme = state => state.getIn(["app", "theme"]);

export const getMapboxToken = state => state.getIn(["app", "mapboxToken"]);

export const getIsStarted = state => state.getIn(["app", "isStarted"]);

export const getIsStopped = state => state.getIn(["app", "isStopped"]);

export const getIsConnected = state => state.getIn(["app", "isConnected"]);

export const getIsSubscribed = state => state.getIn(["app", "isSubscribed"]);

export const getIsAuthModalOpen = state =>
  state.getIn(["app", "isAuthModalOpen"]);
