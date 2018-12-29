import { Map } from "immutable";
import { injectIntl } from "react-intl";
import { getFormValues, getFormAsyncErrors } from "redux-form/immutable";
import { startAsyncValidation, stopAsyncValidation } from "redux-form";
import { usersSelectors, usersOperations } from "../../state/users";
import createForm from "../../lib/createForm";
import EditUserModalComponent from "../../components/Modals/EditUserModal";

const formName = EditUserModalComponent.formName;

const mapStateToProps = state => {
  return {
    fieldValues: {
      [formName]: getFormValues(formName)(state) || Map()
    },
    fieldErrors: {
      [formName]: getFormAsyncErrors(formName)(state) || Map()
    },
    data: usersSelectors.getEditModalData(state),
    isOpen: usersSelectors.isEditModalOpen(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    updateValidation: async errors => {
      await dispatch(startAsyncValidation(formName));
      await dispatch(stopAsyncValidation(formName, errors));
    },
    onCancel: () => dispatch(usersOperations.hideEditModal()),
    onLoad: () => dispatch(usersOperations.load()),
    onCreate: (login, password, isAdmin, isCallCenter) =>
      dispatch(
        usersOperations.create({ login, password, isAdmin, isCallCenter })
      ),
    onEdit: (id, login, password, isAdmin, isCallCenter) =>
      dispatch(
        usersOperations.edit({ id, login, password, isAdmin, isCallCenter })
      )
  };
};

const EditUserModal = injectIntl(
  createForm(EditUserModalComponent, mapStateToProps, mapDispatchToProps)
);
export default EditUserModal;
