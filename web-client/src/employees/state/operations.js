import * as actions from "./actions";
import * as selectors from "./selectors";
import getFormErrors from "../../app/forms/getFormErrors";
import CreateEmployeeMutation from "../mutations/CreateEmployee";
import EditEmployeeMutation from "../mutations/EditEmployee";
import DeleteEmployeeMutation from "../mutations/DeleteEmployee";

export const setTablePageSize = actions.setTablePageSize;
export const setTablePageNumber = actions.setTablePageNumber;
export const setTableParams = actions.setTableParams;
export const resetTableParams = actions.resetTableParams;
export const touchTableParams = actions.touchTableParams;
export const setSelected = actions.setSelected;
export const selectAll = actions.selectAll;
export const deselectAll = actions.deselectAll;
export const showEditModal = actions.showEditModal;
export const hideEditModal = actions.hideEditModal;

export const editFirstSelected = () => async (dispatch, getState) => {
  let selected = selectors.getSelected(getState());
  if (selected.length) {
    return dispatch(actions.showEditModal({ employeeId: selected[0] }));
  }
};

export const create = ({
  uid,
  checked,
  name,
  dept,
  title,
  country,
  salary
}) => async (dispatch, getState, di) => {
  let data = await CreateEmployeeMutation(di, {
    uid,
    checked,
    name,
    dept,
    title,
    country,
    salary
  });
  if ((((data.data || {}).createEmployee || {}).employee || {}).id) {
    await dispatch(actions.hideEditModal());
    return true;
  }

  return getFormErrors(data);
};

export const edit = ({
  id,
  uid,
  checked,
  name,
  dept,
  title,
  country,
  salary
}) => async (dispatch, getState, di) => {
  let data = await EditEmployeeMutation(di, {
    id,
    uid,
    checked,
    name,
    dept,
    title,
    country,
    salary
  });
  if ((((data.data || {}).editEmployee || {}).employee || {}).id) {
    await dispatch(actions.hideEditModal());
    return true;
  }

  return getFormErrors(data);
};

export const remove = ({ id }) => async (dispatch, getState, di) => {
  let data = await DeleteEmployeeMutation(di, { id });
  return !!(((data.data || {}).deleteEmployee || {}).employee || {}).id;
};
