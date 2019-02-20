import { connect } from "react-redux";
import { graphql, createRefetchContainer } from "react-relay";
import { withStyles } from "@material-ui/core/styles";
import { appOperations } from "../../app/state";
import DemoListComponent, {
  pageSize,
  sortBy,
  sortDir,
  styles
} from "./DemoList";

const mapDispatchToProps = dispatch => {
  return {
    getToken: () => dispatch(appOperations.getToken())
  };
};

const DemoList = createRefetchContainer(
  withStyles(styles)(
    connect(
      null,
      mapDispatchToProps
    )(DemoListComponent)
  ),
  {
    viewer: graphql`
      fragment DemoListContainer_viewer on Viewer
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
              ...DemoItemContainer_node
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
    query DemoListContainerQuery(
      $dept: EmployeeDept
      $sortBy: EmployeeSortBy
      $sortDir: EmployeeSortDir
      $first: Int
      $after: String
      $last: Int
      $before: String
    ) {
      viewer {
        ...DemoListContainer_viewer
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

export { pageSize, sortBy, sortDir };
export default DemoList;
