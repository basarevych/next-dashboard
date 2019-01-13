import { connect } from "react-redux";
import { createFragmentContainer } from "react-relay";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import { usersSelectors, usersOperations } from "./state";
import UsersComponent, { styles, query } from "./Users";

const mapStateToProps = state => {
  return {
    selected: usersSelectors.getSelected(state),
    isEditing: usersSelectors.isEditModalOpen(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCreate: () => dispatch(usersOperations.showEditModal()),
    onEdit: () => dispatch(usersOperations.editFirstSelected()),
    onDelete: userId => dispatch(usersOperations.remove({ id: userId })),
    onSetSelected: (userId, isSelected) =>
      dispatch(usersOperations.setSelected({ userId, isSelected })),
    onSelectAll: userIds => dispatch(usersOperations.selectAll({ userIds })),
    onDeselectAll: () => dispatch(usersOperations.deselectAll())
  };
};

const Users = withStyles(styles)(
  injectIntl(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(createFragmentContainer(UsersComponent, query))
  )
);

export default Users;
