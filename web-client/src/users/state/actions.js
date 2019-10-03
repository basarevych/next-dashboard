import * as types from "./types";

export const setTablePageSize = ({ pageSize }) => ({
  type: types.SET_TABLE_PAGE_SIZE,
  pageSize
});

export const setTablePageNumber = ({ pageNumber }) => ({
  type: types.SET_TABLE_PAGE_NUMBER,
  pageNumber
});

export const setTableParams = ({ params }) => ({
  type: types.SET_TABLE_PARAMS,
  params
});

export const resetTableParams = () => ({
  type: types.RESET_TABLE_PARAMS
});

export const touchTableParams = () => ({
  type: types.TOUCH_TABLE_PARAMS
});

export const setSelected = ({ userId, isSelected }) => ({
  type: types.SET_SELECTED,
  userId,
  isSelected
});

export const selectAll = ({ userIds }) => {
  return {
    type: types.SELECT_ALL,
    userIds
  };
};

export const deselectAll = ({ exceptUserIds } = {}) => ({
  type: types.DESELECT_ALL,
  exceptUserIds
});

export const showEditModal = ({ userId } = {}) => ({
  type: types.SHOW_EDIT_MODAL,
  userId
});

export const hideEditModal = () => ({
  type: types.HIDE_EDIT_MODAL
});
