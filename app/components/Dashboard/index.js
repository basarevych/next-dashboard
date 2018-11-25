import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({});

class Dashboard extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <div />;
  }
}

export default withStyles(styles, { withTheme: true })(Dashboard);
