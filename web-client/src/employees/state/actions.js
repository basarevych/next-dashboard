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

export const setSelected = ({ employeeId, isSelected }) => ({
  type: types.SET_SELECTED,
  employeeId,
  isSelected
});

export const selectAll = ({ employeeIds }) => ({
  type: types.SELECT_ALL,
  employeeIds
});

export const deselectAll = ({ exceptEmployeeIds } = {}) => ({
  type: types.DESELECT_ALL,
  exceptEmployeeIds
});

export const showEditModal = ({ employeeId } = {}) => ({
  type: types.SHOW_EDIT_MODAL,
  employeeId
});

export const hideEditModal = () => ({
  type: types.HIDE_EDIT_MODAL
});
