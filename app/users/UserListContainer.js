import { connect } from "react-redux";
import { graphql, createRefetchContainer } from "react-relay";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import { appOperations } from "../app/state";
import { usersSelectors, usersOperations } from "./state";
import UserListComponent, { pageSize, styles } from "./UserList";

const mapStateToProps = state => {
  return {
    isEditing: usersSelectors.isEditModalOpen(state),
    selected: usersSelectors.getSelected(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getToken: () => dispatch(appOperations.getToken()),
    onCreate: () => dispatch(usersOperations.showEditModal()),
    onEdit: () => dispatch(usersOperations.editFirstSelected()),
    onDelete: userId => dispatch(usersOperations.remove({ id: userId })),
    onSetSelected: (userId, isSelected) =>
      dispatch(usersOperations.setSelected({ userId, isSelected })),
    onSelectAll: userIds => dispatch(usersOperations.selectAll({ userIds })),
    onDeselectAll: () => dispatch(usersOperations.deselectAll())
  };
};

const UserList = createRefetchContainer(
  withStyles(styles)(
    injectIntl(
      connect(
        mapStateToProps,
        mapDispatchToProps
      )(UserListComponent)
    )
  ),
  {
    viewer: graphql`
      fragment UserListContainer_viewer on Viewer
        @argumentDefinitions(
          first: { type: "Int" }
          after: { type: "String" }
          last: { type: "Int" }
          before: { type: "String" }
        ) {
        users(first: $first, after: $after, last: $last, before: $before) {
          edges {
            cursor
            node {
              ...UserItemContainer_node
            }
          }
          totalCount
        }
      }
    `
  },
  graphql`
    query UserListContainerQuery(
      $first: Int
      $after: String
      $last: Int
      $before: String
    ) {
      viewer {
        ...UserListContainer_viewer
          @arguments(first: $first, after: $after, last: $last, before: $before)
      }
    }
  `
);

export { pageSize };
export default UserList;
