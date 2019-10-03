import { Set, Map } from "immutable";
import { combineReducers } from "redux-immutable";
import * as types from "./types";

/* State Shape
Map({
  tablePageSize: Number,
  tablePageNuber: Number,
  tableParams: Map(), // query variables
  tableTimestamp: Number,
  selected: Set([String]), // IDs
  isEditModalOpen: false,
  editModalEmployeeId: String, // null when creating a new employee
})
*/

const defaultPageSize = 10;
const tablePageSizeReducer = (state = defaultPageSize, action) => {
  switch (action.type) {
    case types.SET_TABLE_PAGE_SIZE:
      if (!_.isUndefined(action.pageSize)) return action.pageSize;
      break;
  }
  return state;
};

const tablePageNumberReducer = (state = 0, action) => {
  switch (action.type) {
    case types.SET_TABLE_PAGE_NUMBER:
      if (!_.isUndefined(action.pageNumber)) return action.pageNumber;
      break;
  }
  return state;
};

const defaultTableParams = {
  first: defaultPageSize,
  sortBy: "uid",
  sortDir: "asc"
};

const tableParamsReducer = (state = Map(defaultTableParams), action) => {
  switch (action.type) {
    case types.SET_TABLE_PARAMS:
      if (!_.isUndefined(action.params)) return Map(action.params);
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

const selectedReducer = (state = Set([]), action) => {
  switch (action.type) {
    case types.SET_SELECTED:
      if (
        !_.isUndefined(action.employeeId) &&
        !_.isUndefined(action.isSelected)
      ) {
        // eslint-disable-next-line lodash/prefer-lodash-method
        if (state.includes(action.employeeId))
          return state.delete(action.employeeId);
        else return state.add(action.employeeId);
      }
      break;
    case types.SELECT_ALL:
      if (!_.isUndefined(action.employeeIds)) return Set(action.employeeIds);
      break;
    case types.DESELECT_ALL:
      if (_.isUndefined(action.exceptEmployeeIds)) {
        return Set([]);
      } else {
        return state.withMutations(set => {
          for (let item of set.values())
            if (!_.includes(action.exceptEmployeeIds, item)) set.delete(item);
        });
      }
  }
  return state;
};

const isEditModalOpenReducer = (state = false, action) => {
  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return true;
    case types.HIDE_EDIT_MODAL:
      return false;
  }
  return state;
};

const editModalEmployeeIdReducer = (state = null, action) => {
  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return action.employeeId || null;
  }
  return state;
};

const reducer = combineReducers({
  tablePageSize: tablePageSizeReducer,
  tablePageNumber: tablePageNumberReducer,
  tableParams: tableParamsReducer,
  tableTimestamp: tableTimestampReducer,
  selected: selectedReducer,
  editModalEmployeeId: editModalEmployeeIdReducer,
  isEditModalOpen: isEditModalOpenReducer
});

export default reducer;
