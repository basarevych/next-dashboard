export const getCreated = state => state.getIn(["app", "created"]);

export const getStatusCode = state => state.getIn(["app", "statusCode"]);

export const isStaticSite = state => state.getIn(["app", "isStaticSite"]);

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
  state.getIn(["app", "activeSubscriptions"]).includes(name);

export const isAuthModalOpen = state => state.getIn(["app", "isAuthModalOpen"]);
