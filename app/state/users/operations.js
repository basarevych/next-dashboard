import * as actions from "./actions";
import * as selectors from "./selectors";
import constants from "../../../common/constants";
import { getFormErrors } from "../../lib/connectForm";
import CreateUserMutation from "../../mutations/users/CreateUser";
import EditUserMutation from "../../mutations/users/EditUser";
import DeleteUserMutation from "../../mutations/users/DeleteUser";

export const showEditModal = actions.showEditModal;
export const hideEditModal = actions.hideEditModal;
export const setSelected = actions.setSelected;
export const selectAll = actions.selectAll;
export const deselectAll = actions.deselectAll;

export const editFirstSelected = () => async (dispatch, getState) => {
  let selected = selectors.getSelected(getState());
  if (selected.size)
    return dispatch(actions.showEditModal({ userId: selected.first() }));
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
  if (_.get(data, "data.createUser.userEdge.node.id", null)) {
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
  if (_.get(data, "data.editUser.userEdge.node.id", null)) {
    await dispatch(actions.hideEditModal());
    return true;
  }

  return getFormErrors(data);
};

export const remove = ({ id }) => async (dispatch, getState, di) => {
  let data = await DeleteUserMutation(di, { id });
  return !!_.get(data, "data.deleteUser.userEdge.node.id", null);
};
