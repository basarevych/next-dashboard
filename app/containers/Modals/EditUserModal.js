import { injectIntl } from "react-intl";
import { usersSelectors, usersOperations } from "../../state/users";
import connectForm from "../../lib/connectForm";
import EditUserModalComponent from "../../components/Modals/EditUserModal";

const mapStateToProps = state => {
  return {
    isOpen: usersSelectors.isEditModalOpen(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancel: () => dispatch(usersOperations.hideEditModal()),
    onLoad: () => dispatch(usersOperations.load()),
    onCreate: (name, email, password, isAdmin, isCallCenter) =>
      dispatch(
        usersOperations.create({ name, email, password, isAdmin, isCallCenter })
      ),
    onEdit: (id, name, email, password, isAdmin, isCallCenter) =>
      dispatch(
        usersOperations.edit({
          id,
          name,
          email,
          password,
          isAdmin,
          isCallCenter
        })
      )
  };
};

const EditUserModal = injectIntl(
  connectForm(EditUserModalComponent, mapStateToProps, mapDispatchToProps)
);
export default EditUserModal;
