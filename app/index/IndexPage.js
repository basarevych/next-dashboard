import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";

class IndexPage extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    redirect: PropTypes.string
  };

  static getInitialProps({ query }) {
    return {
      redirect: query && query.redirect
    };
  }

  componentDidMount() {
    if (this.props.isAuthenticated)
      Router.push(this.props.redirect || "/dashboard");
  }

  componentDidUdpate() {
    if (this.props.isAuthenticated)
      Router.push(this.props.redirect || "/dashboard");
  }

  render() {
    return <div />;
  }
}

export default IndexPage;
