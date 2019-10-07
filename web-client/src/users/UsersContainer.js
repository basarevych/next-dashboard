import { graphql, createFragmentContainer } from "react-relay";
import UsersComponent from "./Users";

const Users = createFragmentContainer(UsersComponent, {
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
            ...UsersRowContainer_node
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
});

export default Users;
