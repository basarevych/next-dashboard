import * as actions from "./actions";
import EditEmployeeMutation from "../../employees/mutations/EditEmployee";

export const setIsAnimated = actions.setIsAnimated;
export const setState = actions.setState;
export const setTablePageSize = actions.setTablePageSize;
export const setTablePageNumber = actions.setTablePageNumber;
export const setTableParams = actions.setTableParams;

export const edit = ({ id, checked }) => async (dispatch, getState, di) => {
  let data = await EditEmployeeMutation(di, {
    id,
    checked
  });
  return (((data.data || {}).editEmployee || {}).employee || {}).id || false;
};
