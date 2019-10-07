import { graphql, createFragmentContainer } from "react-relay";
import EmployeesComponent from "./Employees";

const Employees = createFragmentContainer(EmployeesComponent, {
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
});

export default Employees;
