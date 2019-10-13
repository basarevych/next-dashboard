import * as types from "./types";

export const setIsAnimated = ({ isAnimated }) => ({
  type: types.SET_IS_ANIMATED,
  isAnimated
});

export const setState = ({ state }) => ({
  type: types.SET_STATE,
  state
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
