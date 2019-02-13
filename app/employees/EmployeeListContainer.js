import { connect } from "react-redux";
import { graphql, createRefetchContainer } from "react-relay";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import { appOperations } from "../app/state";
import { employeesSelectors, employeesOperations } from "./state";
import EmployeeListComponent, {
  pageSize,
  sortBy,
  sortDir,
  styles
} from "./EmployeeList";

const mapStateToProps = state => {
  return {
    isEditing: employeesSelectors.isEditModalOpen(state),
    selected: employeesSelectors.getSelected(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getToken: () => dispatch(appOperations.getToken()),
    onCreate: () => dispatch(employeesOperations.showEditModal()),
    onEdit: () => dispatch(employeesOperations.editFirstSelected()),
    onDelete: employeeId =>
      dispatch(employeesOperations.remove({ id: employeeId })),
    onSetSelected: (employeeId, isSelected) =>
      dispatch(employeesOperations.setSelected({ employeeId, isSelected })),
    onSelectAll: employeeIds =>
      dispatch(employeesOperations.selectAll({ employeeIds })),
    onDeselectAll: exceptEmployeeIds =>
      dispatch(employeesOperations.deselectAll({ exceptEmployeeIds }))
  };
};

const EmployeeList = createRefetchContainer(
  withStyles(styles)(
    injectIntl(
      connect(
        mapStateToProps,
        mapDispatchToProps
      )(EmployeeListComponent)
    )
  ),
  {
    viewer: graphql`
      fragment EmployeeListContainer_viewer on Viewer
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
              ...EmployeeItemContainer_node
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
    query EmployeeListContainerQuery(
      $sortBy: EmployeeSortBy
      $sortDir: EmployeeSortDir
      $first: Int
      $after: String
      $last: Int
      $before: String
    ) {
      viewer {
        ...EmployeeListContainer_viewer
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
export default EmployeeList;
