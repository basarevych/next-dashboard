import * as actions from "./actions";
import * as selectors from "./selectors";
import getFormErrors from "../../app/forms/getFormErrors";
import CreateUserMutation from "../mutations/CreateUser";
import EditUserMutation from "../mutations/EditUser";
import DeleteUserMutation from "../mutations/DeleteUser";
import constants from "../../../common/constants";

export const setTablePageSize = actions.setTablePageSize;
export const setTablePageNumber = actions.setTablePageNumber;
export const setTableParams = actions.setTableParams;
export const setSelected = actions.setSelected;
export const selectAll = actions.selectAll;
export const deselectAll = actions.deselectAll;
export const showEditModal = actions.showEditModal;
export const hideEditModal = actions.hideEditModal;

export const editFirstSelected = () => async (dispatch, getState) => {
  let selected = selectors.getSelected(getState());
  if (selected.length) {
    return dispatch(actions.showEditModal({ userId: selected[0] }));
  }
};

export const create = ({ email, name, password, isAdmin }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await CreateUserMutation(di, {
    email,
    name,
    password,
    roles: [isAdmin && constants.roles.ADMIN].filter(item => !!item)
  });
  if ((((data.data || {}).createUser || {}).user || {}).id) {
    await dispatch(actions.hideEditModal());
    return true;
  }

  return getFormErrors(data);
};

export const edit = ({ id, email, name, password, isAdmin }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await EditUserMutation(di, {
    id,
    email,
    name,
    password,
    roles: [isAdmin && constants.roles.ADMIN].filter(item => !!item)
  });
  if ((((data.data || {}).editUser || {}).user || {}).id) {
    await dispatch(actions.hideEditModal());
    return true;
  }

  return getFormErrors(data);
};

export const remove = ({ id }) => async (dispatch, getState, di) => {
  let data = await DeleteUserMutation(di, { id });
  return !!(((data.data || {}).deleteUser || {}).user || {}).id;
};
