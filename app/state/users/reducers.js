import { List, fromJS } from "immutable";
import { combineReducers } from "redux-immutable";
import * as types from "./types";

/* State Shape
Map({
  list: List([
    Map({
      id: String,
      isSelected: Boolean,
      name: String,
      email: String,
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
      if (!_.isUndefined(action.list))
        // eslint-disable-next-line lodash/prefer-lodash-method
        return fromJS(action.list).map((item, index) =>
          item.set("isSelected", !!state.getIn([index, "isSelected"]))
        );
      break;
    case types.SET_SELECTED:
      if (!_.isUndefined(action.userId))
        return state.withMutations(list => {
          // eslint-disable-next-line lodash/prefer-lodash-method
          let index = list.findIndex(item => item.get("id") === action.userId);
          if (index !== -1)
            list.setIn([index, "isSelected"], !!action.isSelected);
        });
      break;
    case types.SELECT_ALL:
      // eslint-disable-next-line lodash/prefer-lodash-method
      return state.map(item => item.set("isSelected", true));
    case types.DESELECT_ALL:
      // eslint-disable-next-line lodash/prefer-lodash-method
      return state.map(item => item.set("isSelected", false));
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
