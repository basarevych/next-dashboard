import * as actions from "./actions";
import { authOperations } from "../../auth/state";
import constants from "../../../common/constants";

export const setStatusCode = actions.setStatusCode;
export const setConnected = actions.setConnected;
export const setLocale = actions.setLocale;
export const stop = actions.stop;

// called in App.getInitialProps()
export const create = ({
  statusCode,
  cookie,
  csrf,
  status,
  subscriptionsServer,
  googleMapsKey
}) => async dispatch => {
  await dispatch(actions.create({ subscriptionsServer }));
  if (statusCode) await dispatch(setStatusCode({ code: statusCode }));
  if (cookie) await dispatch(authOperations.setCookie({ cookie }));
  if (csrf) await dispatch(authOperations.setCsrf({ csrf }));
  if (status) await dispatch(authOperations.setStatus(status));
  if (googleMapsKey)
    await dispatch(authOperations.setGoogleMapsKey({ googleMapsKey }));
};

// called in App.costructor()
export const init = () => async dispatch => {
  return dispatch(actions.init());
};

let fontsLoaded;
// called in App.componentDidMount()
export const start = async (dispatch, getState, di) => {
  if (!fontsLoaded) {
    fontsLoaded = new Promise(resolve => {
      if (window.__fontsLoaded) return resolve();
      window.addEventListener(constants.events.FONTS_LOADED, resolve, {
        once: true
      });
      setTimeout(resolve, 5000);
    });
  }

  return async dispatch => {
    await Promise.all([dispatch(authOperations.setStatus()), fontsLoaded]);

    const storage = di.get("storage");
    if (!storage.get("notAnonymous"))
      await dispatch(authOperations.signIn({ email: null, password: null }));

    return dispatch(actions.start());
  };
};

export const setCookie = ({ name, value, days }) => {
  return async (dispatch, getState, di) => {
    di.get("cookie").set(name, value, days);
  };
};

export const getCookie = ({ name }) => {
  return async (dispatch, getState, di) => {
    return di.get("cookie").get(name);
  };
};

export const getToken = () => {
  return async (dispatch, getState, di) => {
    return di.get("fetcher").getToken();
  };
};
