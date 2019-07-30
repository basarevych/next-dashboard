import { connect } from "react-redux";
import { graphql, createRefetchContainer } from "react-relay";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/styles";
import { appOperations, appSelectors } from "../app/state";
import { usersSelectors, usersOperations } from "./state";
import UsersComponent, { pageSize, sortBy, sortDir, styles } from "./Users";

const mapStateToProps = state => {
  return {
    isSubscribed: appSelectors.hasActiveSubscription(
      state,
      "UsersSubscription"
    ),
    isEditModalOpen: usersSelectors.isEditModalOpen(state),
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
    onDeselectAll: exceptUserIds =>
      dispatch(usersOperations.deselectAll({ exceptUserIds }))
  };
};

const Users = createRefetchContainer(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(injectIntl(UsersComponent))),
  {
    viewer: graphql`
      fragment UsersContainer_viewer on Viewer
        @argumentDefinitions(
          sortBy: { type: "UserSortBy" }
          sortDir: { type: "UserSortDir" }
          first: { type: "Int" }
          after: { type: "String" }
          last: { type: "Int" }
          before: { type: "String" }
        ) {
        users(
          sortBy: $sortBy
          sortDir: $sortDir
          first: $first
          after: $after
          last: $last
          before: $before
        ) {
          edges {
            cursor
            node {
              id
              ...UserRowContainer_node
            }
          }
          pageInfo {
            startCursor
            endCursor
          }
          totalCount
        }
      }
    `
  },
  graphql`
    query UsersContainerQuery(
      $sortBy: UserSortBy
      $sortDir: UserSortDir
      $first: Int
      $after: String
      $last: Int
      $before: String
    ) {
      viewer {
        ...UsersContainer_viewer
          @arguments(
            sortBy: $sortBy
            sortDir: $sortDir
            first: $first
            after: $after
            last: $last
            before: $before
          )
      }
    }
  `
);

export { pageSize, sortBy, sortDir };
export default Users;
