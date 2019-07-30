import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/styles";
import { employeesOperations, employeesSelectors } from "./state";
import EmployeesTableComponent, { styles } from "./EmployeesTable";

const mapStateToProps = (state, props) => {
  return {
    selected: _.isUndefined(props.selected)
      ? employeesSelectors.getSelected(state)
      : props.selected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetSelected: (employeeId, isSelected) =>
      dispatch(employeesOperations.setSelected({ employeeId, isSelected })),
    onSelectAll: employeeIds =>
      dispatch(employeesOperations.selectAll({ employeeIds })),
    onDeselectAll: exceptEmployeeIds =>
      dispatch(employeesOperations.deselectAll({ exceptEmployeeIds }))
  };
};

const EmployeesTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(injectIntl(EmployeesTableComponent)));
export default EmployeesTable;
