import Router from "next/router";
import isRouteAllowed from "../../../common/isRouteAllowed";
import * as actions from "./actions";
import * as selectors from "./selectors";
import { getFormErrors } from "../../lib/connectForm";
import { appOperations } from "../app";
import constants from "../../../common/constants";
import SignInMutation from "../../mutations/auth/SignIn";
import SignUpMutation from "../../mutations/auth/SignUp";
import SignOutMutation from "../../mutations/auth/SignOut";
import RequestEmailVerificationMutation from "../../mutations/auth/RequestEmailVerification";
import VerifyEmailMutation from "../../mutations/auth/VerifyEmail";
import UpdateProfileMutation from "../../mutations/auth/UpdateProfile";
import UnlinkProviderMutation from "../../mutations/auth/UnlinkProvider";
import DeleteProfileMutation from "../../mutations/auth/DeleteProfile";

export const setCookie = actions.setCookie;
export const setGoogleMapsKey = actions.setGoogleMapsKey;
export const setCsrf = actions.setCsrf;

const fetchStatus = () => async (dispatch, getState, di) => {
  try {
    const fetcher = di.get("fetcher");
    return await fetcher.fetch({ resource: `${constants.apiBase}/status` });
  } catch (error) {
    console.error(`STATUS: ${error.message}`);
  }

  return new Promise(resolve => setTimeout(() => resolve(fetchStatus()), 3000));
};

export const setStatus = status => async (dispatch, getState, di) => {
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
    let socket = di.get("socket");
    if (selectors.isAuthenticated(getState())) socket.connect();
    else socket.disconnect();
  }
};

export const signIn = ({ email, password }) => async (
  dispatch,
  getState,
  di
) => {
  const storage = di.get("storage");
  storage.set("notAnonymous", true);

  let data = await SignInMutation(di, { email, password });
  if (_.get(data, "data.signIn.success", false)) {
    await dispatch(setStatus());
    if (process.browser && _.isFunction(window.__NEXT_PAGE_INIT))
      await window.__NEXT_PAGE_INIT({ store: window.__NEXT_REDUX_STORE__ });
    return true;
  }
  return getFormErrors(data, "APP_AUTH_FAILED");
};

export const signUp = ({ email, password }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await SignUpMutation(di, { email, password });
  if (_.get(data, "data.signUp.success", false)) {
    await dispatch(setStatus());
    if (process.browser && _.isFunction(window.__NEXT_PAGE_INIT))
      await window.__NEXT_PAGE_INIT({ store: window.__NEXT_REDUX_STORE__ });
    return true;
  }

  return getFormErrors(data, "APP_AUTH_EMAIL_TAKEN");
};

export const signOut = () => async (dispatch, getState, di) => {
  let data = await SignOutMutation(di);
  if (_.get(data, "data.signOut.success", false)) {
    await dispatch(setStatus());
    return true;
  }

  return false;
};

export const requestEmailVerification = () => async (
  dispatch,
  getState,
  di
) => {
  let data = await RequestEmailVerificationMutation(di);
  return !!_.get(data, "data.requestEmailVerification.success", false);
};

export const finishEmailVerification = ({ token }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await VerifyEmailMutation(di, { token });
  if (_.get(data, "data.verifyEmail.success", false)) {
    await dispatch(setStatus());
    return true;
  }

  return false;
};

export const updateProfile = ({ email, name, password }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await UpdateProfileMutation(di, {
    email,
    name,
    password
  });
  if (_.get(data, "data.updateProfile.success", false)) return true;

  return getFormErrors(data);
};

export const linkProvider = ({ provider }) => async (
  dispatch,
  getState,
  di
) => {
  const cookie = di.get("cookie");
  cookie.set("redirect", window.location.pathname, 1 / 24);
  await dispatch(appOperations.stop());
  window.location.href =
    window.location.origin + "/api/oauth/" + _.lowerCase(provider);
  return true;
};

export const unlinkProvider = ({ provider }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await UnlinkProviderMutation(di, { provider });
  if (_.get(data, "data.unlinkProvider.success", false)) {
    await dispatch(setStatus());
    return true;
  }

  return false;
};

export const deleteProfile = () => async (dispatch, getState, di) => {
  let data = await DeleteProfileMutation(di);
  if (_.get(data, "data.deleteProfile.success", false)) {
    await dispatch(appOperations.stop());
    window.location.href = "/";
    return true;
  }

  return false;
};
