import React from "react";
import PropTypes from "prop-types";
import { FormattedNumber } from "react-intl";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Switch from "@material-ui/core/Switch";

export const styles = () => ({
  checkboxField: {
    width: 1
  }
});

class DemoItem extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    node: PropTypes.object.isRequired,
    onSwitch: PropTypes.func.isRequired
  };

  render() {
    return (
      <TableRow>
        <TableCell component="th" scope="row">
          {this.props.node.uid}
        </TableCell>
        <TableCell
          padding="checkbox"
          classes={{ root: this.props.classes.checkboxField }}
        >
          <Switch
            checked={this.props.node.checked}
            onChange={(evt, checked) =>
              this.props.onSwitch(this.props.node.id, checked)
            }
            value="on"
            color="default"
          />
        </TableCell>
        <TableCell>{this.props.node.name}</TableCell>
        <TableCell>{this.props.node.title}</TableCell>
        <TableCell>{this.props.node.country.name}</TableCell>
        <TableCell align="right">
          <FormattedNumber value={this.props.node.salary} />
        </TableCell>
      </TableRow>
    );
  }
}

export default DemoItem;
