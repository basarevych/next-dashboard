import { Map } from "immutable";
import { combineReducers } from "redux-immutable";
import * as types from "./types";
import constants from "../../../common/constants";

/* State Shape
Map({
  state: String,
  dept: String,
  tablePageSize: Number,
  tablePageNuber: Number,
  tableParams: Map(), // query variables
  tableTimestamp: Number,
})
*/

export const defaultState = "New York";
const stateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_STATE:
      if (typeof action.state !== "undefined") return action.state;
      break;
  }
  return state;
};

export const defaultDept = Object.values(constants.depts)[0];
const deptReducer = (state = defaultDept, action) => {
  switch (action.type) {
    case types.SET_DEPT:
      if (typeof action.dept !== "undefined") return action.dept;
      break;
  }
  return state;
};

const defaultPageSize = 5;
const tablePageSizeReducer = (state = defaultPageSize, action) => {
  switch (action.type) {
    case types.SET_TABLE_PAGE_SIZE:
      if (typeof action.pageSize !== "undefined") return action.pageSize;
      break;
  }
  return state;
};

const tablePageNumberReducer = (state = 0, action) => {
  switch (action.type) {
    case types.SET_TABLE_PAGE_NUMBER:
      if (typeof action.pageNumber !== "undefined") return action.pageNumber;
      break;
  }
  return state;
};

const defaultTableParams = {
  dept: defaultDept,
  first: defaultPageSize,
  after: null,
  last: null,
  before: null,
  sortBy: "uid",
  sortDir: "asc"
};

const tableParamsReducer = (state = Map(defaultTableParams), action) => {
  switch (action.type) {
    case types.SET_TABLE_PARAMS:
      if (typeof action.params !== "undefined") return Map(action.params);
      break;
    case types.RESET_TABLE_PARAMS:
      return Map(defaultTableParams);
  }
  return state;
};

const tableTimestampReducer = (state = 0, action) => {
  switch (action.type) {
    case types.SET_TABLE_PARAMS:
    case types.RESET_TABLE_PARAMS:
    case types.TOUCH_TABLE_PARAMS:
      return Date.now();
  }
  return state;
};

const reducer = combineReducers({
  state: stateReducer,
  dept: deptReducer,
  tablePageSize: tablePageSizeReducer,
  tablePageNumber: tablePageNumberReducer,
  tableParams: tableParamsReducer,
  tableTimestamp: tableTimestampReducer
});

export default reducer;
