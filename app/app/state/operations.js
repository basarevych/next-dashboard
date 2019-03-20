import Router from "next/router";
import * as actions from "./actions";
import { authOperations, authSelectors } from "../../auth/state";

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

// called in App.costructor() client-side
export const start = () => {
  return async (dispatch, getState, di) => {
    await dispatch(authOperations.setStatus());

    if (
      !authSelectors.isAuthenticated(getState()) &&
      !di.get("storage").get("notAnonymous") &&
      !_.get(Router, "query.noautologin")
    ) {
      await dispatch(authOperations.signIn({ email: null, password: null }));
    }

    await dispatch(actions.start());
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
