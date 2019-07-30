import React from "react";
import PropTypes from "prop-types";
import Return from "./ReturnContainer";

class ReturnPage extends React.Component {
  static propTypes = {
    token: PropTypes.string,
    redirect: PropTypes.string
  };

  static async getInitialProps({ query: requestQuery }) {
    return {
      token: requestQuery.token,
      redirect: requestQuery.redirect
    };
  }

  render() {
    const { token, redirect } = this.props;
    return <Return token={token} redirect={redirect} />;
  }
}

export default ReturnPage;
