import React from "react";
import PropTypes from "prop-types";
import VerifyEmail from "./VerifyEmailContainer";

class VerifyEmailPage extends React.Component {
  static propTypes = {
    token: PropTypes.string
  };

  static async getInitialProps({ query: requestQuery }) {
    return {
      token: requestQuery.token
    };
  }

  render() {
    const { token } = this.props;
    return <VerifyEmail token={token} />;
  }
}

export default VerifyEmailPage;
