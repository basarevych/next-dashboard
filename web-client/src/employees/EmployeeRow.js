import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { FormattedMessage, FormattedNumber } from "react-intl";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";

export const styles = () => ({
  checkboxField: {
    width: 1,
    whiteSpace: "pre"
  },
  checkbox: {
    padding: 0
  }
});

class EmployeeRow extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    node: PropTypes.object.isRequired,
    hideSelect: PropTypes.bool.isRequired,
    hideDept: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    onSwitch: PropTypes.func.isRequired
  };

  render() {
    return (
      <TableRow>
        {!this.props.hideSelect && (
          <TableCell
            padding="checkbox"
            className={classNames(this.props.isSelected && "selected")}
            classes={{ root: this.props.classes.checkboxField }}
          >
            <Checkbox
              checked={this.props.isSelected}
              classes={{ root: this.props.classes.checkbox }}
              onChange={() => this.props.onToggle(this.props.node.id)}
              value="on"
              disabled={this.props.isDisabled}
            />
          </TableCell>
        )}
        <TableCell
          className={classNames(this.props.isSelected && "selected")}
          component="th"
          scope="row"
        >
          {this.props.node.uid}
        </TableCell>
        <TableCell
          padding="checkbox"
          className={classNames(this.props.isSelected && "selected")}
          classes={{ root: this.props.classes.checkboxField }}
        >
          <Switch
            checked={this.props.node.checked}
            onChange={(evt, checked) =>
              this.props.onSwitch(this.props.node.id, checked)
            }
            value="on"
            color="default"
            disabled={this.props.isDisabled}
          />
        </TableCell>
        <TableCell className={classNames(this.props.isSelected && "selected")}>
          {this.props.node.name}
        </TableCell>
        {!this.props.hideDept && (
          <TableCell
            className={classNames(this.props.isSelected && "selected")}
          >
            <FormattedMessage id={`DEPT_${this.props.node.dept}`} />
          </TableCell>
        )}
        <TableCell className={classNames(this.props.isSelected && "selected")}>
          {this.props.node.title}
        </TableCell>
        <TableCell className={classNames(this.props.isSelected && "selected")}>
          {this.props.node.country.name}
        </TableCell>
        <TableCell className={classNames(this.props.isSelected && "selected")}>
          <FormattedNumber value={this.props.node.salary} />
        </TableCell>
      </TableRow>
    );
  }
}

export default EmployeeRow;
