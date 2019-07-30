import React from "react";
import PropTypes from "prop-types";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "../../../common/src/moment";

class DateProvider extends React.Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
  };

  render() {
    const { locale, children } = this.props;
    return (
      <MuiPickersUtilsProvider
        utils={MomentUtils}
        locale={locale}
        moment={moment}
      >
        {children}
      </MuiPickersUtilsProvider>
    );
  }
}

export default DateProvider;
