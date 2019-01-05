import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { usersSelectors, usersOperations } from "../state/users";
import UsersComponent from "../components/Users";

const mapStateToProps = state => {
  return {
    users: usersSelectors.getList(state),
    isAllSelected: usersSelectors.isAllSelected(state),
    isAllDeselected: usersSelectors.isAllDeselected(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(usersOperations.load()),
    onCreate: () => dispatch(usersOperations.showEditModal()),
    onEdit: () => dispatch(usersOperations.editFirstSelected()),
    onDelete: userId => dispatch(usersOperations.remove({ id: userId })),
    onSetSelected: (userId, isSelected) =>
      dispatch(usersOperations.setSelected({ userId, isSelected })),
    onSelectAll: () => dispatch(usersOperations.selectAll()),
    onDeselectAll: () => dispatch(usersOperations.deselectAll())
  };
};

const Users = injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UsersComponent)
);

export default Users;
