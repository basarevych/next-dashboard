import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "../../../common/src/moment";
import { appSelectors } from "../state";

function DateProvider(props) {
  const locale = useSelector(state => appSelectors.getLocale(state));

  return (
    <MuiPickersUtilsProvider
      utils={MomentUtils}
      locale={locale}
      moment={moment}
    >
      {props.children}
    </MuiPickersUtilsProvider>
  );
}

DateProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default DateProvider;
