import * as actions from "./actions";
import * as selectors from "./selectors";
import Router from "next/router";
import constants from "../../../common/constants";
import getFormErrors from "../../app/forms/getFormErrors";
import SignInMutation from "../mutations/SignIn";
import SignUpMutation from "../mutations/SignUp";
import SignOutMutation from "../mutations/SignOut";
import RequestEmailVerificationMutation from "../mutations/RequestEmailVerification";
import VerifyEmailMutation from "../mutations/VerifyEmail";
import UpdateProfileMutation from "../mutations/UpdateProfile";
import UnlinkProviderMutation from "../mutations/UnlinkProvider";
import DeleteProfileMutation from "../mutations/DeleteProfile";
import GetTokenMutation from "../mutations/GetToken";
import getCurrentUser from "../lib/getCurrentUser";

export const setStatusCode = actions.setStatusCode;
export const setConnected = actions.setConnected;
export const setSubscribed = actions.setSubscribed;
export const setLocale = actions.setLocale;
export const setTheme = actions.setTheme;
export const showAuthModal = actions.showAuthModal;
export const hideAuthModal = actions.hideAuthModal;

// called in App.getInitialProps()
export const create = ({ server, statusCode, locale, theme, user }) => async (
  dispatch,
  getState,
  di
) => {
  const initialUser =
    user ||
    (await getCurrentUser(server, await di.get("fetcher").getAccessToken()));

  return dispatch(
    actions.create({
      created: Date.now(),
      statusCode,
      locale,
      theme,
      user: initialUser
    })
  );
};

// called in App.componentDidMount() client-side
export const start = () => {
  return async (dispatch, getState, di) => {
    // Instantiate singletons
    di.singletons();

    // first thing to do on the client is to refresh the tokens
    di.get("fetcher")
      .refreshTokens()
      .catch(console.error);

    return dispatch(actions.start());
  };
};

export const stop = () => {
  return async dispatch => {
    return dispatch(actions.stop());
  };
};

export const setUser = ({ user }) => {
  return async dispatch => {
    await dispatch(actions.setUser({ user }));
    if (process.browser) {
      // let the app know that the user info has been updated
      window.dispatchEvent(new CustomEvent(constants.events.IDENTITY_CHANGED));
    }
  };
};

export const signIn = ({ email, password }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await SignInMutation(di, { email, password });
  if (((data.data || {}).signIn || {}).success) {
    await di
      .get("fetcher")
      .setTokens(
        ((data.data || {}).signIn || {}).accessToken || null,
        ((data.data || {}).signIn || {}).refreshToken || null
      );
    Router.push(Router.route, Router.asPath);
    return true;
  }
  return getFormErrors(data, "APP_AUTH_FAILED");
};

export const signUp = ({ email, password }) => async (
  dispatch,
  getState,
  di
) => {
  let locale = selectors.getLocale(getState());
  let data = await SignUpMutation(di, { email, password, locale });
  if (((data.data || {}).signUp || {}).success) {
    await di
      .get("fetcher")
      .setTokens(
        ((data.data || {}).signUp || {}).accessToken || null,
        ((data.data || {}).signUp || {}).refreshToken || null
      );
    Router.push(Router.route, Router.asPath);
    return true;
  }
  return getFormErrors(data, "APP_AUTH_EMAIL_TAKEN");
};

export const signOut = () => async (dispatch, getState, di) => {
  let data = await SignOutMutation(di);
  if (((data.data || {}).signOut || {}).success) {
    await di.get("fetcher").setTokens(null, null);
    Router.push(Router.route, Router.asPath);
    return true;
  }
  return false;
};

export const requestEmailVerification = () => async (
  dispatch,
  getState,
  di
) => {
  let locale = selectors.getLocale(getState());
  let data = await RequestEmailVerificationMutation(di, { locale });
  return !!((data.data || {}).requestEmailVerification || {}).success;
};

export const finishEmailVerification = ({ token }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await VerifyEmailMutation(di, { token });
  if (((data.data || {}).verifyEmail || {}).success) {
    await di
      .get("fetcher")
      .setTokens(
        ((data.data || {}).verifyEmail || {}).accessToken || null,
        ((data.data || {}).verifyEmail || {}).refreshToken || null
      );
    Router.push(constants.pages["/auth/profile"].page, "/auth/profile");
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
  if (((data.data || {}).updateProfile || {}).success) {
    await di.get("fetcher").refreshSession();
    return true;
  }
  return getFormErrors(data);
};

export const linkProvider = ({ provider }) => async (
  dispatch,
  getState,
  di
) => {
  let oneTimeToken;
  const refreshToken = await di.get("fetcher").getRefreshToken();
  if (refreshToken) {
    const data = await GetTokenMutation(di, {
      type: "oneTime",
      token: refreshToken
    });
    let result = ((data.data || {}).getToken || {}).success || null;
    if (result === true)
      oneTimeToken = ((data.data || {}).getToken || {}).token || null;
  }

  await dispatch(stop());

  let redirect = window.location.href;
  if (Router.asPath.startsWith("/auth") && Router.asPath !== "/auth/profile")
    redirect = process.env.APP_SERVER;

  window.location.href =
    process.env.API_SERVER +
    constants.apiBase +
    "/oauth/" +
    provider.toLowerCase() +
    "?redirect=" +
    encodeURIComponent(redirect) +
    (oneTimeToken ? "&token=" + encodeURIComponent(oneTimeToken) : "");

  return refreshToken ? !!oneTimeToken : true;
};

export const finishLinkingProvider = ({ token, redirect }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await GetTokenMutation(di, { type: "access", token });
  if (((data.data || {}).getToken || {}).success) {
    await di
      .get("fetcher")
      .setTokens(
        ((data.data || {}).getToken || {}).token || null,
        ((data.data || {}).getToken || {}).refreshToken || null
      );
    window.location.href = redirect || "/";
    return true;
  }
  return false;
};

export const unlinkProvider = ({ provider }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await UnlinkProviderMutation(di, { provider });
  if (((data.data || {}).unlinkProvider || {}).success) {
    await di.get("fetcher").refreshSession();
    return true;
  }
  return getFormErrors(data);
};

export const deleteProfile = () => async (dispatch, getState, di) => {
  let data = await DeleteProfileMutation(di);
  if (((data.data || {}).deleteProfile || {}).success) {
    await di.get("fetcher").setTokens(null, null);
    await dispatch(stop());
    window.location.href = "/";
    return true;
  }
  return false;
};

export const sendToast = ({ position, title, content }) => {
  return async (dispatch, getState, di) => {
    return di
      .get("socket")
      .emit(constants.messages.TOAST, { position, title, content });
  };
};

export const setCookie = ({ name, value, days }) => {
  return async (dispatch, getState, di) => {
    return di.get("cookie").set(name, value, days);
  };
};

export const fetchUsStates = () => {
  return async (dispatch, getState, di) => {
    return di.get("fetcher").fetch({
      method: "GET",
      resource: constants.apiBase + "/data/us-states"
    });
  };
};

export const fetchUsCities = () => {
  return async (dispatch, getState, di) => {
    return di.get("fetcher").fetch({
      method: "GET",
      resource: constants.apiBase + "/data/us-cities"
    });
  };
};
