import { combineReducers } from "redux-immutable";
import * as types from "./types";
import l10n from "../../../common/locales";
import themes from "../../../styles/themes";

/* State Shape
Map({
  created: Number, // timestamp
  statusCode: Number, // current HTTP status code
  isStaticSite: Boolean,
  appServer: String,
  apiServer: String,
  googleMapsKey: null,
  locale: String,
  theme: String,
  isStarted: Boolean,
  isStopped: Boolean,
  isConnected: Boolean, // WebSocket
  isAuthModalOpen: false,
})
*/

const createdReducer = (state = Date.now(), action) => {
  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.created)) return action.created;
      break;
  }
  return state;
};

const statusCodeReducer = (state = 200, action) => {
  switch (action.type) {
    case types.CREATE:
      if (_.isFinite(action.statusCode) && action.statusCode >= 200)
        return action.statusCode;
      break;
    case types.SET_STATUS_CODE:
      if (_.isFinite(action.code) && action.code >= 200) return action.code;
      break;
  }
  return state;
};

const isStaticSiteReducer = (state = false, action) => {
  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.isStaticSite)) return action.isStaticSite;
      break;
  }
  return state;
};

const appServerReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.appServer)) return action.appServer;
      break;
  }
  return state;
};

const apiServerReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.apiServer)) return action.apiServer;
      break;
  }
  return state;
};

const wsServerReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.wsServer)) return action.wsServer;
      break;
  }
  return state;
};

const googleMapsKeyReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.googleMapsKey)) return action.googleMapsKey;
      break;
  }
  return state;
};

const localeReducer = (state = l10n.defaultLocale, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET_LOCALE:
      if (!_.isUndefined(action.locale)) return action.locale;
      break;
  }
  return state;
};

const themeReducer = (state = themes.defaultTheme, action) => {
  switch (action.type) {
    case types.CREATE:
    case types.SET_THEME:
      if (!_.isUndefined(action.theme)) return action.theme;
      break;
  }
  return state;
};

const isStartedReducer = (state = false, action) => {
  switch (action.type) {
    case types.START:
      return true;
  }
  return state;
};

const isStoppedReducer = (state = false, action) => {
  switch (action.type) {
    case types.STOP:
      return true;
  }
  return state;
};

const isConnectedReducer = (state = false, action) => {
  switch (action.type) {
    case types.SET_CONNECTED:
      if (!_.isUndefined(action.isConnected)) return action.isConnected;
      break;
  }
  return state;
};

const isAuthModalOpenReducer = (state = false, action) => {
  switch (action.type) {
    case types.SHOW_AUTH_MODAL:
      return true;
    case types.HIDE_AUTH_MODAL:
      return false;
  }
  return state;
};

const reducer = combineReducers({
  created: createdReducer,
  statusCode: statusCodeReducer,
  isStaticSite: isStaticSiteReducer,
  appServer: appServerReducer,
  apiServer: apiServerReducer,
  wsServer: wsServerReducer,
  locale: localeReducer,
  theme: themeReducer,
  googleMapsKey: googleMapsKeyReducer,
  isStarted: isStartedReducer,
  isStopped: isStoppedReducer,
  isConnected: isConnectedReducer,
  isAuthModalOpen: isAuthModalOpenReducer
});

export default reducer;
