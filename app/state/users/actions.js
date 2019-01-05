import * as types from "./types";

export const setList = ({ list }) => ({ type: types.SET_LIST, list });

export const setSelected = ({ userId, isSelected }) => ({
  type: types.SET_SELECTED,
  userId,
  isSelected
});

export const selectAll = () => ({ type: types.SELECT_ALL });

export const deselectAll = () => ({ type: types.DESELECT_ALL });

export const showEditModal = ({ userId } = {}) => ({
  type: types.SHOW_EDIT_MODAL,
  userId
});

export const hideEditModal = () => ({ type: types.HIDE_EDIT_MODAL });
