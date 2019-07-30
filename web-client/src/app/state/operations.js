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

export const setStatusCode = actions.setStatusCode;
export const setConnected = actions.setConnected;
export const setLocale = actions.setLocale;
export const setTheme = actions.setTheme;
export const addActiveSubscription = actions.addActiveSubscription;
export const removeActiveSubscription = actions.removeActiveSubscription;
export const showAuthModal = actions.showAuthModal;
export const hideAuthModal = actions.hideAuthModal;

// called in App.getInitialProps()
export const create = ({
  statusCode,
  locale,
  theme,
  appServer,
  apiServer,
  wsServer,
  mapboxToken
}) => async dispatch => {
  return dispatch(
    actions.create({
      created: Date.now(),
      statusCode,
      locale,
      theme,
      appServer,
      apiServer,
      wsServer,
      mapboxToken
    })
  );
};

// called in App.componentDidMount() client-side
export const start = () => {
  return async (dispatch, getState, di) => {
    di.singletons(); // instantiate

    // Refresh tokens client side
    // This will fire IDENTITY_CHANGED event which will
    // activate app and subscriptions websockets
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

export const setUser = user => {
  return async (dispatch, getState) => {
    const oldUser = selectors.getUserJS(getState());
    if (_.isMatch(user, oldUser)) return;
    await dispatch(actions.setUser(user));

    if (process.browser && oldUser.userId !== user.userId) {
      const statusCode = selectors.getStatusCode(getState());
      const page = constants.pages[Router.asPath];
      const isAllowed = page && page.isAllowed;
      if (statusCode === 200 && _.isFunction(isAllowed) && !isAllowed(user)) {
        await dispatch(
          setStatusCode({ code: user.isAuthenticated ? 403 : 401 })
        );
      } else if (
        _.includes([403, 401], statusCode) &&
        (!_.isFunction(isAllowed) || isAllowed(user))
      ) {
        await dispatch(setStatusCode({ code: 200 }));
      }
    }
  };
};

export const signIn = ({ email, password }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await SignInMutation(di, { email, password });
  if (_.get(data, "data.signIn.success", false)) {
    await di
      .get("fetcher")
      .setTokens(
        _.get(data, "data.signIn.accessToken", null),
        _.get(data, "data.signIn.refreshToken", null)
      );
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
  if (_.get(data, "data.signUp.success", false)) {
    await di
      .get("fetcher")
      .setTokens(
        _.get(data, "data.signUp.accessToken", null),
        _.get(data, "data.signUp.refreshToken", null)
      );
    return true;
  }
  return getFormErrors(data, "APP_AUTH_EMAIL_TAKEN");
};

export const signOut = () => async (dispatch, getState, di) => {
  let data = await SignOutMutation(di);
  if (_.get(data, "data.signOut.success", false)) {
    await dispatch(stop());
    await di.get("fetcher").setTokens(null, null);
    window.location.href = "/";
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
  return !!_.get(data, "data.requestEmailVerification.success", false);
};

export const finishEmailVerification = ({ token }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await VerifyEmailMutation(di, { token });
  if (_.get(data, "data.verifyEmail.success", false)) {
    await di
      .get("fetcher")
      .setTokens(
        _.get(data, "data.verifyEmail.accessToken", null),
        _.get(data, "data.verifyEmail.refreshToken", null)
      );
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
  if (_.get(data, "data.updateProfile.success", false)) {
    window.dispatchEvent(new CustomEvent(constants.events.PROFILE_CHANGED));
    return true;
  }
  return getFormErrors(data);
};

export const linkProvider = ({ provider }) => async (
  dispatch,
  getState,
  di
) => {
  const refreshToken = await di.get("fetcher").getRefreshToken();
  let oneTimeToken;
  if (refreshToken) {
    const data = await GetTokenMutation(di, {
      type: "oneTime",
      token: refreshToken
    });
    let result = _.get(data, "data.getToken.success", null);
    if (result === true)
      oneTimeToken = _.get(data, "data.getToken.token", null);
  }

  let redirect = window.location.href;
  if (
    _.startsWith(Router.asPath, "/auth") &&
    Router.asPath !== "/auth/profile"
  ) {
    redirect = selectors.getAppServer(getState());
  }

  window.location.href =
    selectors.getApiServer(getState()) +
    constants.apiBase +
    "/oauth/" +
    _.lowerCase(provider) +
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
  if (_.get(data, "data.getToken.success", false)) {
    await di
      .get("fetcher")
      .setTokens(
        _.get(data, "data.getToken.token", null),
        _.get(data, "data.getToken.refreshToken", null)
      );
    Router.push(redirect || "/");
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
  if (_.get(data, "data.unlinkProvider.success", false)) {
    window.dispatchEvent(new CustomEvent(constants.events.PROFILE_CHANGED));
    return true;
  }
  return getFormErrors(data);
};

export const deleteProfile = () => async (dispatch, getState, di) => {
  let data = await DeleteProfileMutation(di);
  if (_.get(data, "data.deleteProfile.success", false)) {
    await dispatch(stop());
    await di.get("fetcher").setTokens(null, null);
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

export const fetchCities = () => {
  return async (dispatch, getState, di) => {
    return di.get("fetcher").fetch({
      method: "GET",
      resource:
        selectors.getApiServer(getState()) +
        constants.apiBase +
        "/data/us-cities"
    });
  };
};
