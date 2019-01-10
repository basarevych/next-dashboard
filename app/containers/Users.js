import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import { createFragmentContainer } from "react-relay";
import { usersSelectors, usersOperations } from "../state/users";
import UsersComponent, { styles, query } from "../components/Users";

const mapStateToProps = state => {
  return {
    selected: usersSelectors.getSelected(state)
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

const Users = injectIntl(
  withStyles(styles, { withTheme: true })(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(createFragmentContainer(UsersComponent, query))
  )
);

export default Users;
