import React from "react";
import PropTypes from "prop-types";
import ChartsDemo from "./ChartsDemoContainer";

class ChartsPage extends React.Component {
  static pageTransitionDelayEnter = true;

  static propTypes = {
    pageTransitionReadyToEnter: PropTypes.func
  };

  render() {
    const { pageTransitionReadyToEnter } = this.props;
    return (
      <ChartsDemo pageTransitionReadyToEnter={pageTransitionReadyToEnter} />
    );
  }
}

export default ChartsPage;
