import { createSelector } from "reselect";

export const getState = state => state.getIn(["dashboard", "state"]);

export const getTablePageSize = state =>
  state.getIn(["dashboard", "tablePageSize"]);

export const getTablePageNumber = state =>
  state.getIn(["dashboard", "tablePageNumber"]);

export const getTableParams = createSelector(
  state => state.getIn(["dashboard", "tableParams"]),
  params => params.toJS()
);

export const getDept = state => getTableParams(state).dept;
