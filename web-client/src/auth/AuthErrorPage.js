import React from "react";
import PropTypes from "prop-types";
import AuthError from "./AuthErrorContainer";

class AuthErrorPage extends React.Component {
  static propTypes = {
    action: PropTypes.string,
    type: PropTypes.string,
    service: PropTypes.string
  };

  static async getInitialProps({ query: requestQuery }) {
    return {
      type: requestQuery.type
    };
  }

  render() {
    const { type } = this.props;
    return <AuthError type={type} />;
  }
}

export default AuthErrorPage;
