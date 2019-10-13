import { Map } from "immutable";
import { combineReducers } from "redux-immutable";
import * as types from "./types";
import constants from "../../../common/constants";

/* State Shape
Map({
  isAnimated: Boolean,
  state: String,
  tablePageSize: Number,
  tablePageNuber: Number,
  tableParams: Map(), // query variables
  tableTimestamp: Number,
})
*/

const isAnimatedReducer = (state = true, action) => {
  switch (action.type) {
    case types.SET_IS_ANIMATED:
      if (typeof action.isAnimated !== "undefined") return action.isAnimated;
      break;
  }
  return state;
};

export const defaultState = "New York";
const stateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_STATE:
      if (typeof action.state !== "undefined") return action.state;
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
  dept: Object.values(constants.depts)[0],
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
  }
  return state;
};

const reducer = combineReducers({
  isAnimated: isAnimatedReducer,
  state: stateReducer,
  tablePageSize: tablePageSizeReducer,
  tablePageNumber: tablePageNumberReducer,
  tableParams: tableParamsReducer
});

export default reducer;
