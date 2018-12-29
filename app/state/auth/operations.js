import moment from "../../../common/moment";
import Router from "next/router";
import isRouteAllowed from "../../../common/isRouteAllowed";
import * as actions from "./actions";
import * as selectors from "./selectors";
import { appOperations, appSelectors } from "../app";

export const setGoogleMapsKey = actions.setGoogleMapsKey;
export const setCsrf = actions.setCsrf;

const fetchStatus = () => async (dispatch, getState) => {
  let status = null;

  try {
    let providers = selectors.getAllProviders(getState());
    let providersQuery = "";
    if (providers && providers.length) {
      providersQuery = `
          providers {
            ${_.map(providers, item => _.toLower(item)).join("\n")}
          }
        `;
    }
    let response = await dispatch(
      appOperations.gqlQuery(
        `
        query {
          status {
            isAuthenticated
            name
            email
            isEmailVerified
            roles
            ${providersQuery}
          }
        }
      `
      )
    );
    status = response && _.get(response, "data.status", null);
  } catch (error) {
    console.error(error);
  }

  if (status) return status;

  return new Promise(resolve => setTimeout(() => resolve(fetchStatus()), 1000));
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

  let socket = appSelectors.getService(getState(), { service: "socket" });
  if (socket) {
    if (selectors.isAuthenticated(getState())) socket.connect();
    else socket.disconnect();
  }
};

export const signIn = ({ email, password }) => async (dispatch, getState) => {
  let result = false;

  try {
    let storage = appSelectors.getService(getState(), { service: "storage" });
    if (storage) storage.set("notAnonymous", true);

    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation ($email: String, $password: String) {
            signIn(email: $email, password: $password) {
              success
            }
          }
        `,
        {
          email,
          password
        }
      )
    );

    if (response && _.get(response, "data.signIn.success", false)) {
      await dispatch(setStatus());
      if (process.browser && _.isFunction(window.__NEXT_PAGE_INIT))
        await window.__NEXT_PAGE_INIT({ store: window.__NEXT_REDUX_STORE__ });
      return true;
    } else {
      result = {};
      let errors = response && _.get(response, "errors", []);
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

export const signUp = ({ email, password }) => async dispatch => {
  let result = false;

  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation ($email: String, $password: String) {
            signUp(email: $email, password: $password) {
              success
            }
          }
        `,
        {
          email,
          password
        }
      )
    );

    if (response && _.get(response, "data.signUp.success", false)) {
      await dispatch(setStatus());
      if (process.browser && _.isFunction(window.__NEXT_PAGE_INIT))
        await window.__NEXT_PAGE_INIT({ store: window.__NEXT_REDUX_STORE__ });
      return true;
    } else {
      result = {};
      let errors = response && _.get(response, "errors", []);
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

export const signOut = () => async dispatch => {
  let result = false;

  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation {
            signOut {
              success
            }
          }
        `
      )
    );

    result = (response && _.get(response, "data.signOut.success")) || false;
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

export const requestProfileVerification = () => async dispatch => {
  let result = false;

  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation {
            requestEmailVerification {
              success
            }
          }
        `
      )
    );

    result =
      (response && _.get(response, "data.requestEmailVerification.success")) ||
      false;
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const finishProfileVerification = ({ token }) => async dispatch => {
  let result = false;

  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation ($token: String) {
            verifyEmail(token: $token) {
              success
            }
          }
        `,
        {
          token
        }
      )
    );

    result = (response && _.get(response, "data.verifyEmail.success")) || false;
    if (result) await dispatch(setStatus());
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const updateProfile = ({
  email,
  name,
  password,
  onChange
}) => async dispatch => {
  let result = false;

  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation ($email: String, $name: String, $password: String) {
            updateProfile(email: $email, name: $name, password: $password) {
              success
            }
          }
        `,
        {
          email,
          name,
          password
        }
      )
    );

    if (response && _.get(response, "data.updateProfile.success", false)) {
      await dispatch(loadProfile(onChange));
      return true;
    } else {
      result = {};
      let errors = response && _.get(response, "errors", []);
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

export const unlinkProvider = ({ provider }) => async dispatch => {
  let result = false;

  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation ($provider: String) {
            unlinkProvider(provider: $provider) {
              success
            }
          }
        `,
        {
          provider
        }
      )
    );

    result =
      (response && _.get(response, "data.unlinkProvider.success")) || false;
    if (result) await dispatch(setStatus());
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const deleteProfile = () => async dispatch => {
  let result = false;

  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation {
            deleteProfile {
              success
            }
          }
        `
      )
    );

    result =
      (response && _.get(response, "data.deleteProfile.success")) || false;
    if (result) {
      await dispatch(appOperations.stop());
      window.location.href = "/";
    }
  } catch (error) {
    console.error(error);
  }

  return result;
};
