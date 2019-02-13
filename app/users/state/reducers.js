import { Set } from "immutable";
import { combineReducers } from "redux-immutable";
import * as types from "./types";

/* State Shape
Map({
  selected: Set([String]), // IDs
  editModalUserId: String, // null when creating a new user
  isEditModalOpen: false,
})
*/

const selectedReducer = (state = Set([]), action) => {
  switch (action.type) {
    case types.SET_SELECTED:
      if (!_.isUndefined(action.userId) && !_.isUndefined(action.isSelected)) {
        // eslint-disable-next-line lodash/prefer-lodash-method
        if (state.includes(action.userId)) return state.delete(action.userId);
        else return state.add(action.userId);
      }
      break;
    case types.SELECT_ALL:
      if (!_.isUndefined(action.userIds)) return Set(action.userIds);
      break;
    case types.DESELECT_ALL:
      if (_.isUndefined(action.exceptUserIds)) {
        return Set([]);
      } else {
        return state.withMutations(set => {
          for (let item of set.values())
            if (!_.includes(action.exceptUserIds, item)) set.delete(item);
        });
      }
  }
  return state;
};

const editModalUserIdReducer = (state = null, action) => {
  switch (action.type) {
    case types.SHOW_EDIT_MODAL:
      return action.userId || null;
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
  editModalUserId: editModalUserIdReducer,
  isEditModalOpen: isEditModalOpenReducer
});

export default reducer;
