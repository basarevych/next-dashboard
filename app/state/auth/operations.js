import moment from "../../../common/moment";
import Router from "next/router";
import isRouteAllowed from "../../../common/isRouteAllowed";
import * as actions from "./actions";
import * as selectors from "./selectors";
import { appOperations, appSelectors } from "../app";
import constants from "../../../common/constants";

export const setCookie = actions.setCookie;
export const setGoogleMapsKey = actions.setGoogleMapsKey;
export const setCsrf = actions.setCsrf;

const fetchStatus = () => async (dispatch, getState) => {
  try {
    const fetcher = appSelectors.getService(getState(), { service: "fetcher" });
    return await fetcher.fetch({ resource: `${constants.apiBase}/status` });
  } catch (error) {
    console.error(`STATUS: ${error.message}`);
  }

  return new Promise(resolve => setTimeout(() => resolve(fetchStatus()), 3000));
};

export const setStatus = status => async (dispatch, getState) => {
  if (process.browser && !status) status = await dispatch(fetchStatus());

  if (
    process.browser &&
    window.location.href !== "/" &&
    status &&
    status.roles
  ) {
    if (!isRouteAllowed(Router.pathname, status.roles)) {
      await dispatch(appOperations.stop());
      window.location.href = "/";
      return;
    }
  }

  if (!status) return;

  await dispatch(actions.setStatus(status));

  if (process.browser) {
    let socket = appSelectors.getService(getState(), { service: "socket" });
    if (socket) {
      if (selectors.isAuthenticated(getState())) socket.connect();
      else socket.disconnect();
    }
  }
};

export const signIn = ({ email, password }) => async (dispatch, getState) => {
  let result = false;

  try {
    const storage = appSelectors.getService(getState(), { service: "storage" });
    if (storage) storage.set("notAnonymous", true);

    const fetcher = appSelectors.getService(getState(), { service: "fetcher" });
    let data = await fetcher.query(
      {
        text: `mutation SignInMutation($input: SignInInput!) {
                signIn(input: $input) {
                  success
                }
              }`
      },
      {
        input: { email, password }
      }
    );

    if (_.get(data, "data.signIn.success", false)) {
      await dispatch(setStatus());
      if (process.browser && _.isFunction(window.__NEXT_PAGE_INIT))
        await window.__NEXT_PAGE_INIT({ store: window.__NEXT_REDUX_STORE__ });
      return true;
    } else {
      result = {};
      let errors = _.get(data, "errors", []);
      for (let error of errors) {
        if (error && error.code === "E_VALIDATION")
          _.merge(result, error.details);
        else result._error = (result._error || []).concat([error.message]);
      }
      if (!_.keys(result).length) result = { _error: "APP_AUTH_FAILED" };
    }
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const signUp = ({ email, password }) => async (dispatch, getState) => {
  let result = false;

  try {
    const fetcher = appSelectors.getService(getState(), { service: "fetcher" });
    let data = await fetcher.query(
      {
        text: `mutation ($email: String, $password: String) {
                signUp(email: $email, password: $password) {
                  success
                }
              }`
      },
      {
        email,
        password
      }
    );

    if (_.get(data, "data.signUp.success", false)) {
      await dispatch(setStatus());
      if (process.browser && _.isFunction(window.__NEXT_PAGE_INIT))
        await window.__NEXT_PAGE_INIT({ store: window.__NEXT_REDUX_STORE__ });
      return true;
    } else {
      result = {};
      let errors = _.get(data, "errors", []);
      for (let error of errors) {
        if (error && error.code === "E_VALIDATION")
          _.merge(result, error.details);
        else result._error = (result._error || []).concat([error.message]);
      }
      if (!_.keys(result).length) result = { _error: "APP_AUTH_EMAIL_TAKEN" };
    }
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const signOut = () => async (dispatch, getState) => {
  let result = false;

  try {
    const fetcher = appSelectors.getService(getState(), { service: "fetcher" });
    let data = await fetcher.query(
      {
        text: `mutation SignOutMutation($input: SignOutInput!) {
                signOut(input: $input) {
                  success
                }
              }`
      },
      { input: {} }
    );

    result = _.get(data, "data.signOut.success") || false;
    if (result) await dispatch(setStatus());
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const loadProfile = ({ onChange }) => async (dispatch, getState) => {
  await dispatch(setStatus());
  await dispatch(onChange("email", selectors.getEmail(getState())));
  await dispatch(onChange("name", selectors.getName(getState())));
  await dispatch(
    onChange("isAdmin", selectors.isAdmin(getState()) ? "yes" : "no")
  );
};

export const requestProfileVerification = () => async (dispatch, getState) => {
  let result = false;

  try {
    const fetcher = appSelectors.getService(getState(), { service: "fetcher" });
    let data = await fetcher.query(
      {
        text: `mutation {
                requestEmailVerification {
                  success
                }
              }`
      },
      {}
    );

    result = _.get(data, "data.requestEmailVerification.success") || false;
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const finishProfileVerification = ({ token }) => async (
  dispatch,
  getState
) => {
  let result = false;

  try {
    const fetcher = appSelectors.getService(getState(), { service: "fetcher" });
    let data = await fetcher.query(
      {
        text: `mutation ($token: String) {
                verifyEmail(token: $token) {
                  success
                }
              }`
      },
      {
        token
      }
    );

    result = _.get(data, "data.verifyEmail.success") || false;
    if (result) await dispatch(setStatus());
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const updateProfile = ({ email, name, password, onChange }) => async (
  dispatch,
  getState
) => {
  let result = false;

  try {
    const fetcher = appSelectors.getService(getState(), { service: "fetcher" });
    let data = await fetcher.query(
      {
        text: `mutation ($email: String, $name: String, $password: String) {
                updateProfile(email: $email, name: $name, password: $password) {
                  success
                }
              }`
      },
      {
        email,
        name,
        password
      }
    );

    if (_.get(data, "data.updateProfile.success", false)) {
      await dispatch(loadProfile(onChange));
      return true;
    } else {
      result = {};
      let errors = _.get(data, "errors", []);
      for (let error of errors) {
        if (error && error.code === "E_VALIDATION")
          _.merge(result, error.details);
        else result._error = (result._error || []).concat([error.message]);
      }
      if (!_.keys(result).length) result = { _error: "OPERATION_FAILED" };
    }
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const linkProvider = ({ provider }) => async dispatch => {
  let url = encodeURIComponent(window.location.pathname);
  let expires = moment
    .utc()
    .add(1, "hour")
    .format();

  await dispatch(appOperations.stop());
  document.cookie = `redirect=${url}; expires=${expires}; path=/`;
  window.location.href =
    window.location.origin + "/api/oauth/" + _.lowerCase(provider);
};

export const unlinkProvider = ({ provider }) => async (dispatch, getState) => {
  let result = false;

  try {
    const fetcher = appSelectors.getService(getState(), { service: "fetcher" });
    let data = await fetcher.query(
      {
        text: `mutation ($provider: String) {
                unlinkProvider(provider: $provider) {
                  success
                }
              }`
      },
      {
        provider
      }
    );

    result = _.get(data, "data.unlinkProvider.success") || false;
    if (result) await dispatch(setStatus());
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const deleteProfile = () => async (dispatch, getState) => {
  let result = false;

  try {
    const fetcher = appSelectors.getService(getState(), { service: "fetcher" });
    let data = await fetcher.query(
      {
        text: `mutation {
                deleteProfile {
                  success
                }
              }`
      },
      {}
    );

    result = _.get(data, "data.deleteProfile.success") || false;
    if (result) {
      await dispatch(appOperations.stop());
      window.location.href = "/";
    }
  } catch (error) {
    console.error(error);
  }

  return result;
};
