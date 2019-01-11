import { createSelector } from "reselect";

export const getSelected = createSelector(
  state => state.getIn(["users", "selected"]),
  selected => selected.toJS()
);

export const isEditModalOpen = state =>
  state.getIn(["users", "isEditModalOpen"]);

export const getEditModalUserId = state =>
  state.getIn(["users", "editModalUserId"]);
