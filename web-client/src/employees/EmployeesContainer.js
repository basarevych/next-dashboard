import { graphql, createRefetchContainer } from "react-relay";
import EmployeesComponent from "./Employees";

const Employees = createRefetchContainer(
  EmployeesComponent,
  {
    viewer: graphql`
      fragment EmployeesContainer_viewer on Viewer
        @argumentDefinitions(
          sortBy: { type: "EmployeeSortBy" }
          sortDir: { type: "EmployeeSortDir" }
          first: { type: "Int" }
          after: { type: "String" }
          last: { type: "Int" }
          before: { type: "String" }
        ) {
        employees(
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
              ...EmployeesRowContainer_node
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
    query EmployeesContainerQuery(
      $sortBy: EmployeeSortBy
      $sortDir: EmployeeSortDir
      $first: Int
      $after: String
      $last: Int
      $before: String
    ) {
      viewer {
        ...EmployeesContainer_viewer
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

export default Employees;
