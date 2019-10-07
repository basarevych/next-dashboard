import { graphql, createFragmentContainer } from "react-relay";
import DeptEmployeesComponent from "./DeptEmployees";

const DeptEmployees = createFragmentContainer(DeptEmployeesComponent, {
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
});

export default DeptEmployees;
