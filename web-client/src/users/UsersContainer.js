import { graphql, createRefetchContainer } from "react-relay";
import UsersComponent from "./Users";

const Users = createRefetchContainer(
  UsersComponent,
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

export default Users;
