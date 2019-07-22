import { Set } from "immutable";
import { combineReducers } from "redux-immutable";
import * as types from "./types";
import l10n from "../../../common/locales";
import themes from "../../../styles/themes";

/* State Shape
Map({
  created: Number, // timestamp
  statusCode: Number, // current HTTP status code
  appServer: String,
  apiServer: String,
  mapboxToken: null,
  locale: String,
  theme: String,
  isStarted: Boolean,
  isStopped: Boolean,
  isConnected: Boolean, // WebSocket
  activeSubscriptions: [String], // names
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

const mapboxTokenReducer = (state = "", action) => {
  switch (action.type) {
    case types.CREATE:
      if (!_.isUndefined(action.mapboxToken)) return action.mapboxToken;
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

const activeSubscriptionsReducer = (state = Set(), action) => {
  switch (action.type) {
    case types.ADD_ACTIVE_SUBSCRIPTION:
      if (!_.isUndefined(action.name)) return state.add(action.name);
      break;
    case types.REMOVE_ACTIVE_SUBSCRIPTION:
      if (!_.isUndefined(action.name)) return state.delete(action.name);
      break;
  }
  return state;
};

const reducer = combineReducers({
  created: createdReducer,
  statusCode: statusCodeReducer,
  appServer: appServerReducer,
  apiServer: apiServerReducer,
  wsServer: wsServerReducer,
  locale: localeReducer,
  theme: themeReducer,
  mapboxToken: mapboxTokenReducer,
  isStarted: isStartedReducer,
  isStopped: isStoppedReducer,
  isConnected: isConnectedReducer,
  activeSubscriptions: activeSubscriptionsReducer,
  isAuthModalOpen: isAuthModalOpenReducer
});

export default reducer;
