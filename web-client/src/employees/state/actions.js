import * as types from "./types";

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

export const hideEditModal = () => ({ type: types.HIDE_EDIT_MODAL });
