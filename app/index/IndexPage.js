import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";

class IndexPage extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };

  componentDidMount() {
    if (this.props.isAuthenticated) Router.push("/dashboard");
  }

  componentDidUdpate() {
    if (this.props.isAuthenticated) Router.push("/dashboard");
  }

  render() {
    return <div />;
  }
}

export default IndexPage;
