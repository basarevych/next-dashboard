import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import { usersOperations, usersSelectors } from "../../state/users";
import connectForm from "../../lib/connectForm";
import EditUserModalComponent, {
  styles
} from "../../components/Modals/EditUserModal";

const mapStateToProps = state => {
  return {
    currentId: usersSelectors.getEditModalUserId(state)
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
  withStyles(styles, { withTheme: true })(
    connectForm(EditUserModalComponent, mapStateToProps, mapDispatchToProps)
  )
);
export default EditUserModal;
