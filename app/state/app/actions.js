import moment from "../../../common/moment";
import * as types from "./types";

export const create = data => _.assign({ type: types.CREATE }, data);

export const init = data => _.assign({ type: types.INIT }, data);

export const start = () => ({ type: types.START });

export const stop = () => ({ type: types.STOP });

export const setStatusCode = ({ code }) => ({
  type: types.SET_STATUS_CODE,
  code
});

export const setConnected = ({ isConnected }) => ({
  type: types.SET_CONNECTED,
  isConnected
});

export const setLocale = ({ locale }) => {
  moment.locale(locale);
  return {
    type: types.SET_LOCALE,
    locale
  };
};
