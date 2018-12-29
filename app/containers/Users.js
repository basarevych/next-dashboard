import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { usersSelectors, usersOperations } from "../state/users";
import UsersComponent from "../components/Users";

const mapStateToProps = state => {
  return {
    users: usersSelectors.getList(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(usersOperations.load()),
    onCreate: () => dispatch(usersOperations.showEditModal()),
    onEdit: userId => dispatch(usersOperations.showEditModal({ userId })),
    onDelete: userId => dispatch(usersOperations.remove({ id: userId }))
  };
};

const Users = injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UsersComponent)
);

export default Users;
