export const getList = state => state.getIn(["users", "list"]);

export const isEditModalOpen = state =>
  state.getIn(["users", "isEditModalOpen"]);

export const getEditModalData = state => {
  let id = state.getIn(["users", "editModalUserId"]);
  if (!id) return null;

  // eslint-disable-next-line
  return state.getIn(["users", "list"]).find(item => item.get("id") === id);
};
