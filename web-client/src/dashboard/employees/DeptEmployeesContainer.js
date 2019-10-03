import { graphql, createRefetchContainer } from "react-relay";
import DeptEmployeesComponent from "./DeptEmployees";

const DeptEmployees = createRefetchContainer(
  DeptEmployeesComponent,
  {
    viewer: graphql`
      fragment DeptEmployeesContainer_viewer on Viewer
        @argumentDefinitions(
          dept: { type: "EmployeeDept" }
          sortBy: { type: "EmployeeSortBy" }
          sortDir: { type: "EmployeeSortDir" }
          first: { type: "Int" }
          after: { type: "String" }
          last: { type: "Int" }
          before: { type: "String" }
        ) {
        employees(
          dept: $dept
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
    query DeptEmployeesContainerQuery(
      $dept: EmployeeDept
      $sortBy: EmployeeSortBy
      $sortDir: EmployeeSortDir
      $first: Int
      $after: String
      $last: Int
      $before: String
    ) {
      viewer {
        ...DeptEmployeesContainer_viewer
          @arguments(
            dept: $dept
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

export default DeptEmployees;
