import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { intlShape } from "react-intl";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutline";
import UnverifiedIcon from "@material-ui/icons/HelpOutline";

export const styles = () => ({
  checkboxField: {
    width: 1
  },
  checkbox: {
    padding: 0
  }
});

class UserRow extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    classes: PropTypes.object.isRequired,
    node: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired
  };

  render() {
    return (
      <TableRow>
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
        <TableCell
          className={classNames(this.props.isSelected && "selected")}
          component="th"
          scope="row"
        >
          {this.props.node.email}
        </TableCell>
        <TableCell className={classNames(this.props.isSelected && "selected")}>
          {this.props.node.isEmailVerified ? (
            <VerifiedIcon />
          ) : (
            <UnverifiedIcon />
          )}
        </TableCell>
        <TableCell className={classNames(this.props.isSelected && "selected")}>
          {this.props.node.name}
        </TableCell>
        <TableCell className={classNames(this.props.isSelected && "selected")}>
          {_.map(this.props.node.roles, item =>
            this.props.intl.formatMessage({
              id: `EDIT_USER_${item}_LABEL`
            })
          ).join(", ")}
        </TableCell>
      </TableRow>
    );
  }
}

export default UserRow;
