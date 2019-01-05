import * as actions from "./actions";
import * as selectors from "./selectors";
import { appOperations } from "../app";
import constants from "../../../common/constants";

export const showEditModal = actions.showEditModal;
export const hideEditModal = actions.hideEditModal;
export const setSelected = actions.setSelected;
export const selectAll = actions.selectAll;
export const deselectAll = actions.deselectAll;

export const editFirstSelected = () => async (dispatch, getState) => {
  let selected = selectors.getSelected(getState());
  if (selected.size) {
    return dispatch(
      actions.showEditModal({ userId: selected.first().get("id") })
    );
  }
};

export const load = ({ req } = {}) => async dispatch => {
  let users;
  if (req) {
    users = await req.di.get("repository.users").getUsers(req);
  } else {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          query {
            users {
              id
              name
              email
              roles
            }
          }
        `
      )
    );
    users = response && _.get(response, "data.users");
  }
  await dispatch(actions.setList({ list: users }));
};

export const create = ({
  name,
  email,
  password,
  isAdmin
}) => async dispatch => {
  let result = false;

  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation ($name: String, $email: String, $password: String, $roles: [UserRole]) {
            createUser(name: $name, email: $email, password: $password, roles: $roles) {
              success
            }
          }
        `,
        {
          name,
          email,
          password,
          roles: _.compact([isAdmin && constants.roles.ADMIN])
        }
      )
    );

    if (response && _.get(response, "data.createUser.success", false)) {
      await dispatch(actions.hideEditModal());
      return true;
    } else {
      result = {};
      let errors = response && _.get(response, "errors", []);
      for (let error of errors) {
        if (error && error.code === "E_VALIDATION")
          _.merge(result, error.details);
        else result._error = (result._error || []).concat([error.message]);
      }
      if (!_.keys(result).length) result = { _error: "EDIT_USER_FAILED" };
    }
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const edit = ({
  id,
  name,
  email,
  password,
  isAdmin
}) => async dispatch => {
  let result = false;

  try {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          mutation ($id: String, $name: String, $email: String, $password: String, $roles: [UserRole]) {
            editUser(id: $id, name: $name, email: $email, password: $password, roles: $roles) {
              success
            }
          }
        `,
        {
          id,
          name,
          email,
          password,
          roles: _.compact([isAdmin && constants.roles.ADMIN])
        }
      )
    );

    if (response && _.get(response, "data.editUser.success", false)) {
      await dispatch(actions.hideEditModal());
      return true;
    } else {
      result = {};
      let errors = response && _.get(response, "errors", []);
      for (let error of errors) {
        if (error && error.code === "E_VALIDATION")
          _.merge(result, error.details);
        else result._error = (result._error || []).concat([error.message]);
      }
      if (!_.keys(result).length) result = { _error: "EDIT_USER_FAILED" };
    }
  } catch (error) {
    console.error(error);
  }

  return result;
};

export const remove = ({ id }) => async dispatch => {
  let response = await dispatch(
    appOperations.gqlQuery(
      `
        mutation ($id: String) {
          deleteUser(id: $id) {
            success
          }
        }
      `,
      {
        id
      }
    )
  );
  return (response && _.get(response, "data.deleteUser.success")) || false;
};
