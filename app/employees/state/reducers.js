import { Set } from "immutable";
import { combineReducers } from "redux-immutable";
import * as types from "./types";

/* State Shape
Map({
  selected: Set([String]), // IDs
  editModalEmployeeId: String, // null when creating a new employee
  isEditModalOpen: false,
})
*/

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

const editModalEmployeeIdReducer = (state = null, action) => {
  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return action.employeeId || null;
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

const reducer = combineReducers({
  selected: selectedReducer,
  editModalEmployeeId: editModalEmployeeIdReducer,
  isEditModalOpen: isEditModalOpenReducer
});

export default reducer;
