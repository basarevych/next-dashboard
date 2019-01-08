import Injectt from "injectt";
import * as actions from "./actions";
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

export const create = ({ cookie, status, googleMapsKey }) => async dispatch => {
  await dispatch(actions.create());
  if (cookie) await dispatch(authOperations.setCookie({ cookie }));
  if (status) await dispatch(authOperations.setStatus(status));
  if (googleMapsKey)
    await dispatch(authOperations.setGoogleMapsKey({ googleMapsKey }));
};

export const init = () => async (dispatch, getState) => {
  const di = new Injectt();
  di.registerInstance(getState, "getState");
  di.registerInstance(dispatch, "dispatch");
  di.registerClass(Fetcher);
  di.registerClass(Storage);
  di.registerClass(Socket);
  di.registerClass(Cookie);
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
