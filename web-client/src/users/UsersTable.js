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
import UserRow, { styles as rowStyles } from "./UserRowContainer";

export const styles = theme => ({
  table: {
    [theme.breakpoints.down("sm")]: responsiveTable(theme)
  },
  ...rowStyles(theme)
});

class UsersTable extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired,
    selected: PropTypes.array.isRequired,
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
    return this.props.users.length > 0;
  }

  isAllSelected() {
    const list = _.map(this.props.users, "node.id");
    return _.difference(list, this.props.selected).length === 0;
  }

  isAllDeselected() {
    return this.props.selected.length === 0;
  }

  isSelected(userId) {
    return _.includes(this.props.selected, userId);
  }

  handleToggleAll(forceOff = false) {
    if (forceOff || this.isAllSelected()) this.props.onDeselectAll();
    else this.props.onSelectAll(_.map(this.props.users, "node.id"));
  }

  handleToggle(userId) {
    this.props.onSetSelected(userId, !this.isSelected(userId));
  }

  render() {
    return (
      <Table className={this.props.classes.table}>
        <TableHead>
          <TableRow>
            <TableCell
              padding="checkbox"
              classes={{ root: this.props.classes.checkboxField }}
            >
              <Checkbox
                checked={!!this.hasRecords() && this.isAllSelected()}
                classes={{ root: this.props.classes.checkbox }}
                indeterminate={!this.isAllSelected() && !this.isAllDeselected()}
                onChange={() => this.handleToggleAll()}
                value="on"
                disabled={this.props.isDisabled}
              />
            </TableCell>
            <TableCell
              sortDirection={
                this.props.sortBy === "email" ? this.props.sortDir : false
              }
            >
              <TableSortLabel
                active={this.props.sortBy === "email"}
                direction={this.props.sortDir}
                onClick={() => this.handleSort("email")}
                disabled={this.props.isDisabled}
              >
                <FormattedMessage id="USERS_EMAIL_COLUMN" />
              </TableSortLabel>
            </TableCell>
            <TableCell
              sortDirection={
                this.props.sortBy === "isEmailVerified"
                  ? this.props.sortDir
                  : false
              }
            >
              <TableSortLabel
                active={this.props.sortBy === "isEmailVerified"}
                direction={this.props.sortDir}
                onClick={() => this.handleSort("isEmailVerified")}
                disabled={this.props.isDisabled}
              >
                <FormattedMessage id="USERS_EMAIL_VERIFIED_COLUMN" />
              </TableSortLabel>
            </TableCell>
            <TableCell
              sortDirection={
                this.props.sortBy === "name" ? this.props.sortDir : false
              }
            >
              <TableSortLabel
                active={this.props.sortBy === "name"}
                direction={this.props.sortDir}
                onClick={() => this.handleSort("name")}
                disabled={this.props.isDisabled}
              >
                <FormattedMessage id="USERS_NAME_COLUMN" />
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <FormattedMessage id="USERS_ROLES_COLUMN" />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {_.map(this.props.users, edge => (
            <UserRow
              key={edge.cursor}
              node={edge.node}
              onToggle={this.handleToggle}
              isDisabled={this.props.isDisabled}
            />
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default UsersTable;
