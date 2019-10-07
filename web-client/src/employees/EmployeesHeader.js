import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  checkboxField: {
    width: 1,
    whiteSpace: "pre"
  },
  checkbox: {
    padding: 0
  }
});

function EmployeesHeader(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const employeeIds = useMemo(() => props.employees.map(item => item.node.id), [
    props.employees
  ]);
  const hasRecords = useMemo(() => props.employees.length > 0, [
    props.employees
  ]);
  const isAllSelected = useMemo(
    () => !employeeIds.filter(item => !props.selected.includes(item)).length,
    [employeeIds, props.selected]
  );
  const isAllDeselected = useMemo(() => !props.selected.length, [
    props.selected
  ]);

  const toggleAll = useCallback(() => {
    if (isAllSelected) dispatch(props.operations.deselectAll());
    else dispatch(props.operations.selectAll({ employeeIds }));
  }, [employeeIds, isAllSelected, props.operations]);

  return (
    <TableRow>
      {!props.hideSelect && (
        <TableCell padding="checkbox" classes={{ root: classes.checkboxField }}>
          <Checkbox
            checked={hasRecords && isAllSelected}
            classes={{ root: classes.checkbox }}
            indeterminate={!isAllSelected && !isAllDeselected}
            onChange={toggleAll}
            value="on"
            disabled={props.isDisabled}
          />
        </TableCell>
      )}
      <TableCell sortDirection={props.sortBy === "uid" ? props.sortDir : false}>
        <TableSortLabel
          active={props.sortBy === "uid"}
          direction={props.sortDir}
          onClick={() => props.onSort("uid")}
          disabled={props.isDisabled}
        >
          <FormattedMessage id="EMPLOYEES_UID_COLUMN" />
        </TableSortLabel>
      </TableCell>
      <TableCell />
      <TableCell
        sortDirection={props.sortBy === "name" ? props.sortDir : false}
      >
        <TableSortLabel
          active={props.sortBy === "name"}
          direction={props.sortDir}
          onClick={() => props.onSort("name")}
          disabled={props.isDisabled}
        >
          <FormattedMessage id="EMPLOYEES_NAME_COLUMN" />
        </TableSortLabel>
      </TableCell>
      {!props.hideDept && (
        <TableCell
          sortDirection={props.sortBy === "dept" ? props.sortDir : false}
        >
          <TableSortLabel
            active={props.sortBy === "dept"}
            direction={props.sortDir}
            onClick={() => props.onSort("dept")}
            disabled={props.isDisabled}
          >
            <FormattedMessage id="EMPLOYEES_DEPT_COLUMN" />
          </TableSortLabel>
        </TableCell>
      )}
      <TableCell
        sortDirection={props.sortBy === "title" ? props.sortDir : false}
      >
        <TableSortLabel
          active={props.sortBy === "title"}
          direction={props.sortDir}
          onClick={() => props.onSort("title")}
          disabled={props.isDisabled}
        >
          <FormattedMessage id="EMPLOYEES_TITLE_COLUMN" />
        </TableSortLabel>
      </TableCell>
      <TableCell
        sortDirection={props.sortBy === "country" ? props.sortDir : false}
      >
        <TableSortLabel
          active={props.sortBy === "country"}
          direction={props.sortDir}
          onClick={() => props.onSort("country")}
          disabled={props.isDisabled}
        >
          <FormattedMessage id="EMPLOYEES_COUNTRY_COLUMN" />
        </TableSortLabel>
      </TableCell>
      <TableCell
        sortDirection={props.sortBy === "salary" ? props.sortDir : false}
      >
        <TableSortLabel
          active={props.sortBy === "salary"}
          direction={props.sortDir}
          onClick={() => props.onSort("salary")}
          disabled={props.isDisabled}
        >
          <FormattedMessage id="EMPLOYEES_SALARY_COLUMN" />
        </TableSortLabel>
      </TableCell>
    </TableRow>
  );
}

EmployeesHeader.propTypes = {
  selectors: PropTypes.object.isRequired,
  operations: PropTypes.object.isRequired,
  employees: PropTypes.array.isRequired,
  selected: PropTypes.array,
  hideSelect: PropTypes.bool.isRequired,
  hideDept: PropTypes.bool.isRequired,
  sortBy: PropTypes.string.isRequired,
  sortDir: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onSort: PropTypes.func.isRequired
};

EmployeesHeader.defaultProps = {
  selected: []
};

export default EmployeesHeader;
