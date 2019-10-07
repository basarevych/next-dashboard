import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import responsiveTable from "../../styles/responsiveTable";
import EmployeesHeader from "./EmployeesHeader";
import EmployeesRow from "./EmployeesRowContainer";

const useStyles = makeStyles(theme => ({
  table: {
    [theme.breakpoints.down("sm")]: responsiveTable(theme)
  }
}));

function EmployeesTable(props) {
  const classes = useStyles(props);

  return (
    <Table className={classes.table}>
      <TableHead>
        <EmployeesHeader
          selectors={props.selectors}
          operations={props.operations}
          employees={props.employees}
          selected={props.selected}
          hideSelect={props.hideSelect}
          hideDept={props.hideDept}
          sortBy={props.sortBy}
          sortDir={props.sortDir}
          onSort={props.onSort}
          isDisabled={props.isDisabled}
        />
      </TableHead>
      <TableBody>
        {props.employees.map(edge => (
          <EmployeesRow
            key={edge.cursor}
            node={edge.node}
            selectors={props.selectors}
            operations={props.operations}
            hideSelect={props.hideSelect}
            hideDept={props.hideDept}
            isDisabled={props.isDisabled}
          />
        ))}
      </TableBody>
    </Table>
  );
}

EmployeesTable.propTypes = {
  selectors: PropTypes.object.isRequired,
  operations: PropTypes.object.isRequired,
  employees: PropTypes.array.isRequired,
  selected: PropTypes.array,
  hideSelect: PropTypes.bool,
  hideDept: PropTypes.bool,
  sortBy: PropTypes.string.isRequired,
  sortDir: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

EmployeesTable.defaultProps = {
  hideSelect: false,
  hideDept: false
};

export default EmployeesTable;
