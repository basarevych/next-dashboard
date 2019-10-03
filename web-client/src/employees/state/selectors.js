import { createSelector } from "reselect";

export const getTablePageSize = state =>
  state.getIn(["employees", "tablePageSize"]);

export const getTablePageNumber = state =>
  state.getIn(["employees", "tablePageNumber"]);

export const getTableParams = createSelector(
  state => state.getIn(["employees", "tableTimestamp"]),
  state => state.getIn(["employees", "tableParams"]),
  (timestamp, params) => params.toJS()
);

export const getSelected = createSelector(
  state => state.getIn(["employees", "selected"]),
  selected => selected.toJS()
);

export const getIsSelected = (state, props) =>
  _.includes(getSelected(state), props.id);

export const getIsEditModalOpen = state =>
  state.getIn(["employees", "isEditModalOpen"]);

export const getEditModalEmployeeId = state =>
  state.getIn(["employees", "editModalEmployeeId"]);
