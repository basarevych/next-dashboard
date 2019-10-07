import { createSelector } from "reselect";

export const getTablePageSize = state =>
  state.getIn(["users", "tablePageSize"]);

export const getTablePageNumber = state =>
  state.getIn(["users", "tablePageNumber"]);

export const getTableParams = createSelector(
  state => state.getIn(["users", "tableParams"]),
  params => params.toJS()
);

export const getSelected = createSelector(
  state => state.getIn(["users", "selected"]),
  selected => selected.toJS()
);

export const getIsSelected = (state, props) =>
  getSelected(state).includes(props.id);

export const getIsEditModalOpen = state =>
  state.getIn(["users", "isEditModalOpen"]);

export const getEditModalUserId = state =>
  state.getIn(["users", "editModalUserId"]);
