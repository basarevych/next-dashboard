import { createSelector } from "reselect";

export const getSelected = createSelector(
  state => state.getIn(["employees", "selected"]),
  selected => selected.toJS()
);

export const isEditModalOpen = state =>
  state.getIn(["employees", "isEditModalOpen"]);

export const getEditModalEmployeeId = state =>
  state.getIn(["employees", "editModalEmployeeId"]);
