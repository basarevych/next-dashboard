import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Checkbox from "@material-ui/core/Checkbox";
import responsiveTable from "../../styles/responsiveTable";
import EmployeeRow, { styles as rowStyles } from "./EmployeeRowContainer";

export const styles = theme => ({
  table: {
    [theme.breakpoints.down("md")]: responsiveTable(theme)
  },
  ...rowStyles(theme)
});

class EmployeesTable extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    dept: PropTypes.string,
    employees: PropTypes.array.isRequired,
    selected: PropTypes.array,
    sortBy: PropTypes.string.isRequired,
    sortDir: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onSetSelected: PropTypes.func.isRequired,
    onSelectAll: PropTypes.func.isRequired,
    onDeselectAll: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
    this.handleToggleAll = this.handleToggleAll.bind(this);
  }

  hasRecords() {
    return this.props.employees.length > 0;
  }

  isAllSelected() {
    const list = _.map(this.props.employees, "node.id");
    return _.difference(list, this.props.selected).length === 0;
  }

  isAllDeselected() {
    return this.props.selected.length === 0;
  }

  isSelected(employeeId) {
    return _.includes(this.props.selected, employeeId);
  }

  handleToggleAll(forceOff = false) {
    if (forceOff || this.isAllSelected()) this.props.onDeselectAll();
    else this.props.onSelectAll(_.map(this.props.employees, "node.id"));
  }

  handleToggle(employeeId) {
    this.props.onSetSelected(employeeId, !this.isSelected(employeeId));
  }

  render() {
    return (
      <Table className={this.props.classes.table}>
        <TableHead>
          <TableRow>
            {this.props.selected && (
              <TableCell
                padding="checkbox"
                classes={{ root: this.props.classes.checkboxField }}
              >
                <Checkbox
                  checked={!!this.hasRecords() && this.isAllSelected()}
                  classes={{ root: this.props.classes.checkbox }}
                  indeterminate={
                    !this.isAllSelected() && !this.isAllDeselected()
                  }
                  onChange={() => this.handleToggleAll()}
                  value="on"
                  disabled={this.props.isDisabled}
                />
              </TableCell>
            )}
            <TableCell
              sortDirection={
                this.props.sortBy === "uid" ? this.props.sortDir : false
              }
            >
              <TableSortLabel
                active={this.props.sortBy === "uid"}
                direction={this.props.sortDir}
                onClick={() => this.props.onSort("uid")}
                disabled={this.props.isDisabled}
              >
                <FormattedMessage id="EMPLOYEES_UID_COLUMN" />
              </TableSortLabel>
            </TableCell>
            <TableCell />
            <TableCell
              sortDirection={
                this.props.sortBy === "name" ? this.props.sortDir : false
              }
            >
              <TableSortLabel
                active={this.props.sortBy === "name"}
                direction={this.props.sortDir}
                onClick={() => this.props.onSort("name")}
                disabled={this.props.isDisabled}
              >
                <FormattedMessage id="EMPLOYEES_NAME_COLUMN" />
              </TableSortLabel>
            </TableCell>
            {!this.props.dept && (
              <TableCell
                sortDirection={
                  this.props.sortBy === "dept" ? this.props.sortDir : false
                }
              >
                <TableSortLabel
                  active={this.props.sortBy === "dept"}
                  direction={this.props.sortDir}
                  onClick={() => this.props.onSort("dept")}
                  disabled={this.props.isDisabled}
                >
                  <FormattedMessage id="EMPLOYEES_DEPT_COLUMN" />
                </TableSortLabel>
              </TableCell>
            )}
            <TableCell
              sortDirection={
                this.props.sortBy === "title" ? this.props.sortDir : false
              }
            >
              <TableSortLabel
                active={this.props.sortBy === "title"}
                direction={this.props.sortDir}
                onClick={() => this.props.onSort("title")}
                disabled={this.props.isDisabled}
              >
                <FormattedMessage id="EMPLOYEES_TITLE_COLUMN" />
              </TableSortLabel>
            </TableCell>
            <TableCell
              sortDirection={
                this.props.sortBy === "country" ? this.props.sortDir : false
              }
            >
              <TableSortLabel
                active={this.props.sortBy === "country"}
                direction={this.props.sortDir}
                onClick={() => this.props.onSort("country")}
                disabled={this.props.isDisabled}
              >
                <FormattedMessage id="EMPLOYEES_COUNTRY_COLUMN" />
              </TableSortLabel>
            </TableCell>
            <TableCell
              sortDirection={
                this.props.sortBy === "salary" ? this.props.sortDir : false
              }
            >
              <TableSortLabel
                active={this.props.sortBy === "salary"}
                direction={this.props.sortDir}
                onClick={() => this.props.onSort("salary")}
                disabled={this.props.isDisabled}
              >
                <FormattedMessage id="EMPLOYEES_SALARY_COLUMN" />
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {_.map(this.props.employees, edge => (
            <EmployeeRow
              key={edge.cursor}
              node={edge.node}
              hideSelect={!this.props.selected}
              hideDept={!!this.props.dept}
              onToggle={this.handleToggle}
              isDisabled={this.props.isDisabled}
            />
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default EmployeesTable;
