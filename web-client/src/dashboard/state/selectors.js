import { createSelector } from "reselect";

export const getState = state => state.getIn(["dashboard", "state"]);

export const getDept = state => state.getIn(["dashboard", "dept"]);

export const getTablePageSize = state =>
  state.getIn(["dashboard", "tablePageSize"]);

export const getTablePageNumber = state =>
  state.getIn(["dashboard", "tablePageNumber"]);

export const getTableParams = createSelector(
  state => state.getIn(["dashboard", "tableTimestamp"]),
  state => state.getIn(["dashboard", "tableParams"]),
  (timestamp, params) => params.toJS()
);
