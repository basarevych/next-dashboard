import * as types from "./types";

export const setState = ({ state }) => ({
  type: types.SET_STATE,
  state
});

export const setDept = ({ dept }) => ({
  type: types.SET_DEPT,
  dept
});

export const setTablePageSize = ({ pageSize }) => ({
  type: types.SET_TABLE_PAGE_SIZE,
  pageSize
});

export const setTablePageNumber = ({ pageNumber }) => ({
  type: types.SET_TABLE_PAGE_NUMBER,
  pageNumber
});

export const setTableParams = ({ params }) => ({
  type: types.SET_TABLE_PARAMS,
  params
});

export const resetTableParams = () => ({
  type: types.RESET_TABLE_PARAMS
});

export const touchTableParams = () => ({
  type: types.TOUCH_TABLE_PARAMS
});
