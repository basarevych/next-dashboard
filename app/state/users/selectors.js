export const getList = state => state.getIn(["users", "list"]);

export const getSelected = state =>
  // eslint-disable-next-line lodash/prefer-lodash-method
  state.getIn(["users", "list"]).filter(item => !!item.get("isSelected"));

export const getNumSelected = state => getSelected(state).size;

export const isAllSelected = state =>
  getList(state).size === getSelected(state).size;

export const isAllDeselected = state => getSelected(state).size === 0;

export const isEditModalOpen = state =>
  state.getIn(["users", "isEditModalOpen"]);

export const getEditModalData = state => {
  let id = state.getIn(["users", "editModalUserId"]);
  if (!id) return null;

  // eslint-disable-next-line
  return state.getIn(["users", "list"]).find(item => item.get("id") === id);
};
