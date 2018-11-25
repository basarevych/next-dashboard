import * as types from "./types";

export const setList = ({ list }) => ({ type: types.SET_LIST, list });

export const showEditModal = ({ userId } = {}) => ({
  type: types.SHOW_EDIT_MODAL,
  userId
});

export const hideEditModal = () => ({ type: types.HIDE_EDIT_MODAL });
