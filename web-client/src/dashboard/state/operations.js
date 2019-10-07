import * as actions from "./actions";
import EditEmployeeMutation from "../../employees/mutations/EditEmployee";

export const setState = actions.setState;
export const setDept = actions.setDept;
export const setTablePageSize = actions.setTablePageSize;
export const setTablePageNumber = actions.setTablePageNumber;
export const setTableParams = actions.setTableParams;
export const resetTableParams = actions.resetTableParams;
export const touchTableParams = actions.touchTableParams;

export const edit = ({ id, checked }) => async (dispatch, getState, di) => {
  let data = await EditEmployeeMutation(di, {
    id,
    checked
  });
  return (((data.data || {}).editEmployee || {}).employee || {}).id || false;
};
