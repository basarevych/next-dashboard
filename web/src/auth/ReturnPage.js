import React from "react";
import PropTypes from "prop-types";

class ReturnPage extends React.Component {
  static propTypes = {
    token: PropTypes.string,
    redirect: PropTypes.string,
    onReturn: PropTypes.func.isRequired
  };

  static async getInitialProps({ query: urlQuery }) {
    return {
      token: urlQuery.token,
      redirect: urlQuery.redirect
    };
  }

  componentDidMount() {
    this.props.onReturn(this.props.token, this.props.redirect);
  }

  render() {
    return <div />;
  }
}

export default ReturnPage;
