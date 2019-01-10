import * as types from "./types";

export const setCsrf = ({ csrf }) => ({
  type: types.SET_CSRF,
  csrf
});

export const setStatus = status => ({
  type: types.SET_STATUS,
  ...status
});

export const setGoogleMapsKey = ({ googleMapskey }) => ({
  type: types.SET_GOOGLE_MAPS_KEY,
  googleMapskey
});
