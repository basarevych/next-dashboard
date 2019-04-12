import * as actions from "./actions";
import * as selectors from "./selectors";
import getFormErrors from "../../app/forms/getFormErrors";
import CreateEmployeeMutation from "../mutations/CreateEmployee";
import EditEmployeeMutation from "../mutations/EditEmployee";
import DeleteEmployeeMutation from "../mutations/DeleteEmployee";

export const showEditModal = actions.showEditModal;
export const hideEditModal = actions.hideEditModal;
export const setSelected = actions.setSelected;
export const selectAll = actions.selectAll;
export const deselectAll = actions.deselectAll;

export const editFirstSelected = () => async (dispatch, getState) => {
  let selected = selectors.getSelected(getState());
  if (selected.length)
    return dispatch(actions.showEditModal({ employeeId: selected[0] }));
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
  if (_.get(data, "data.createEmployee.employee.id", null)) {
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
  if (_.get(data, "data.editEmployee.employee.id", null)) {
    await dispatch(actions.hideEditModal());
    return true;
  }

  return getFormErrors(data);
};

export const remove = ({ id }) => async (dispatch, getState, di) => {
  let data = await DeleteEmployeeMutation(di, { id });
  return !!_.get(data, "data.deleteEmployee.employee.id", null);
};
