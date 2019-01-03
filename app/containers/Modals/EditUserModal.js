import { injectIntl } from "react-intl";
import { usersSelectors, usersOperations } from "../../state/users";
import connectForm from "../../lib/connectForm";
import EditUserModalComponent from "../../components/Modals/EditUserModal";

const mapStateToProps = state => {
  return {
    data: usersSelectors.getEditModalData(state),
    isOpen: usersSelectors.isEditModalOpen(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
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
  connectForm(EditUserModalComponent, mapStateToProps, mapDispatchToProps)
);
export default EditUserModal;
