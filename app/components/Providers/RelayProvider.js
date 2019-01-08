import React from "react";
import PropTypes from "prop-types";

class RelayProvider extends React.Component {
  static propTypes = {
    environment: PropTypes.object.isRequired,
    variables: PropTypes.object.isRequired,
    children: PropTypes.node
  };

  static childContextTypes = {
    relay: PropTypes.object.isRequired
  };

  getChildContext() {
    return {
      relay: {
        environment: this.props.environment,
        variables: this.props.variables
      }
    };
  }
  render() {
    return this.props.children;
  }
}

export default RelayProvider;
