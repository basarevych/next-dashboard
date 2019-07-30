import { connect } from "react-redux";
import { graphql, createRefetchContainer } from "react-relay";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/styles";
import { appSelectors } from "../../app/state";
import DeptEmployeesComponent, {
  defaultDept,
  pageSize,
  sortBy,
  sortDir,
  styles
} from "./DeptEmployees";

const mapStateToProps = state => {
  return {
    isSubscribed: appSelectors.hasActiveSubscription(
      state,
      "DeptEmployeesSubscription"
    )
  };
};

const DeptEmployees = createRefetchContainer(
  connect(mapStateToProps)(
    withStyles(styles)(injectIntl(DeptEmployeesComponent))
  ),
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
              ...EmployeeRowContainer_node
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

export { defaultDept, pageSize, sortBy, sortDir };
export default DeptEmployees;
