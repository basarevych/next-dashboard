import React from "react";
import PropTypes from "prop-types";

export const styles = () => ({});

class Dashboard extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <div />;
  }
}

export default Dashboard;
