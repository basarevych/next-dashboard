import { connect } from "react-redux";
import { graphql, createRefetchContainer } from "react-relay";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/styles";
import { appOperations, appSelectors } from "../app/state";
import { employeesSelectors, employeesOperations } from "./state";
import EmployeesComponent, {
  pageSize,
  sortBy,
  sortDir,
  styles
} from "./Employees";

const mapStateToProps = state => {
  return {
    isSubscribed: appSelectors.hasActiveSubscription(
      state,
      "EmployeesSubscription"
    ),
    isEditModalOpen: employeesSelectors.isEditModalOpen(state),
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

const Employees = createRefetchContainer(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(injectIntl(EmployeesComponent))),
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

export { pageSize, sortBy, sortDir };
export default Employees;
