import * as types from "./types";

export const setSelected = ({ userId, isSelected }) => ({
  type: types.SET_SELECTED,
  userId,
  isSelected
});

export const selectAll = ({ userIds }) => ({ type: types.SELECT_ALL, userIds });

export const deselectAll = ({ exceptUserIds } = {}) => ({
  type: types.DESELECT_ALL,
  exceptUserIds
});

export const showEditModal = ({ userId } = {}) => ({
  type: types.SHOW_EDIT_MODAL,
  userId
});

export const hideEditModal = () => ({ type: types.HIDE_EDIT_MODAL });
