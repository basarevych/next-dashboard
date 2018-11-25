import React from "react";
import PropTypes from "prop-types";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import MomentUtils from "@date-io/moment";
import moment from "../../../common/moment";

class Provider extends React.Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
  };

  render() {
    return (
      <MuiPickersUtilsProvider
        utils={MomentUtils}
        locale={this.props.locale}
        moment={moment}
      >
        {this.props.children}
      </MuiPickersUtilsProvider>
    );
  }
}

export default Provider;
