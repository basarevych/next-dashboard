import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import { usersOperations, usersSelectors } from "./state";
import EditUserModalComponent, { styles } from "./EditUserModal";

const mapStateToProps = state => {
  return {
    currentId: usersSelectors.getEditModalUserId(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClose: () => dispatch(usersOperations.hideEditModal()),
    onCreate: (name, email, password, isAdmin) =>
      dispatch(usersOperations.create({ name, email, password, isAdmin })),
    onEdit: (id, name, email, password, isAdmin) =>
      dispatch(
        usersOperations.edit({
          id,
          name,
          email,
          password,
          isAdmin
        })
      )
  };
};

const EditUserModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(EditUserModalComponent));

export default EditUserModal;
