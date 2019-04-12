import * as actions from "./actions";
import * as selectors from "./selectors";
import constants from "../../../common/constants";
import getFormErrors from "../../app/forms/getFormErrors";
import CreateUserMutation from "../mutations/CreateUser";
import EditUserMutation from "../mutations/EditUser";
import DeleteUserMutation from "../mutations/DeleteUser";

export const showEditModal = actions.showEditModal;
export const hideEditModal = actions.hideEditModal;
export const setSelected = actions.setSelected;
export const selectAll = actions.selectAll;
export const deselectAll = actions.deselectAll;

export const editFirstSelected = () => async (dispatch, getState) => {
  let selected = selectors.getSelected(getState());
  if (selected.length)
    return dispatch(actions.showEditModal({ userId: selected[0] }));
};

export const create = ({ name, email, password, isAdmin }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await CreateUserMutation(di, {
    name,
    email,
    password,
    roles: _.compact([isAdmin && constants.roles.ADMIN])
  });
  if (_.get(data, "data.createUser.user.id", null)) {
    await dispatch(actions.hideEditModal());
    return true;
  }

  return getFormErrors(data);
};

export const edit = ({ id, name, email, password, isAdmin }) => async (
  dispatch,
  getState,
  di
) => {
  let data = await EditUserMutation(di, {
    id,
    name,
    email,
    password,
    roles: _.compact([isAdmin && constants.roles.ADMIN])
  });
  if (_.get(data, "data.editUser.user.id", null)) {
    await dispatch(actions.hideEditModal());
    return true;
  }

  return getFormErrors(data);
};

export const remove = ({ id }) => async (dispatch, getState, di) => {
  let data = await DeleteUserMutation(di, { id });
  return !!_.get(data, "data.deleteUser.user.id", null);
};
