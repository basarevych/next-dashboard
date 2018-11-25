import fetch from "isomorphic-unfetch";
import * as actions from "./actions";
import { authOperations, authSelectors } from "../auth";
import constants from "../../../common/constants";
import Injectt from "injectt";
import Storage from "../../lib/Storage";
import Socket from "../../lib/Socket";
import Cookie from "../../lib/Cookie";

export const setStatusCode = actions.setStatusCode;
export const setConnected = actions.setConnected;
export const setLocale = actions.setLocale;
export const stop = actions.stop;

const fetchCsrf = async () => {
  let csrf = null;

  try {
    let response = await fetch(constants.apiBase + "/csrf", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    if (response.status !== 200) return null;

    csrf = (await response.json()).csrf;
  } catch (error) {
    console.error(error);
  }

  return new Promise(resolve =>
    setTimeout(() => resolve(csrf || fetchCsrf()), 1000)
  );
};

export const gqlQuery = (query, variables) => async (dispatch, getState) => {
  try {
    let csrf = authSelectors.getCsrf(getState());
    if (!csrf) {
      csrf = await fetchCsrf();
      await dispatch(authOperations.setCsrf({ csrf }));
    }

    let response = await fetch(constants.graphqlBase, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-CSRF-Token": csrf
      },
      body: JSON.stringify({
        query,
        variables
      })
    });

    if (response.status === 403) {
      await dispatch(authOperations.setCsrf({ csrf: null }));
      return dispatch(gqlQuery(query, variables));
    }

    let data = null;
    try {
      data = await response.json();
    } catch (error) {
      console.error(error);
    }

    if (response.status !== 200)
      throw new Error(`GraphQL query failed [${response.status}]`, data);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const create = ({ status, googleMapsKey }) => async dispatch => {
  await dispatch(actions.create());
  if (status) await dispatch(authOperations.setStatus(status));
  if (googleMapsKey)
    await dispatch(authOperations.setGoogleMapsKey(googleMapsKey));
};

export const init = () => async (dispatch, getState) => {
  const di = new Injectt();
  di.registerInstance(getState, "getState");
  di.registerInstance(dispatch, "dispatch");
  di.registerClass(Storage);
  di.registerClass(Socket);
  di.registerClass(Cookie);
  return dispatch(actions.init({ di }));
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
