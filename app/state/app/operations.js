import Injectt from "injectt";
import * as actions from "./actions";
import * as selectors from "./selectors";
import { authOperations } from "../auth";
import constants from "../../../common/constants";
import Fetcher from "../../lib/Fetcher";
import Storage from "../../lib/Storage";
import Socket from "../../lib/Socket";
import Cookie from "../../lib/Cookie";

export const setStatusCode = actions.setStatusCode;
export const setConnected = actions.setConnected;
export const setLocale = actions.setLocale;
export const stop = actions.stop;

export const create = ({
  statusCode,
  cookie,
  csrf,
  status,
  googleMapsKey
}) => async dispatch => {
  await dispatch(actions.create());
  if (statusCode) await dispatch(setStatusCode({ code: statusCode }));
  if (cookie) await dispatch(authOperations.setCookie({ cookie }));
  if (csrf) await dispatch(authOperations.setCsrf({ csrf }));
  if (status) await dispatch(authOperations.setStatus(status));
  if (googleMapsKey)
    await dispatch(authOperations.setGoogleMapsKey({ googleMapsKey }));
};

export const init = ({ cookie }) => async (dispatch, getState) => {
  if (selectors.getService(getState(), { service: "di" })) return;
  const di = new Injectt();
  di.registerInstance(getState, "getState");
  di.registerInstance(dispatch, "dispatch");
  di.registerClass(Fetcher);
  di.registerClass(Storage);
  di.registerClass(Socket);
  di.registerClass(Cookie);
  if (!process.browser && cookie) {
    // when doing SSR we will be doing own API requests on behalf of current user
    di.get("fetcher").setCookie(cookie);
  }
  await dispatch(actions.init({ di }));
};

let fontsLoaded;
export const start = () => {
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
    return dispatch(actions.start());
  };
};
