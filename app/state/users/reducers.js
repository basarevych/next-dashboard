import { List, fromJS } from "immutable";
import { combineReducers } from "redux-immutable";
import * as types from "./types";

/* State Shape
Map({
  list: List([
    Map({
      id: String,
      login: String,
      roles: [String],
    })
  ]),
  editModalUserId: String, // null when creating a new user
  isEditModalOpen: false,
})
*/

const listReducer = (state = List([]), action) => {
  switch (action.type) {
    case types.SET_LIST:
      if (!_.isUndefined(action.list)) return fromJS(action.list);
      break;
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
  list: listReducer,
  editModalUserId: editModalUserIdReducer,
  isEditModalOpen: isEditModalOpenReducer
});

export default reducer;
