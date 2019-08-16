import React from "react";
import PropTypes from "prop-types";
import ErrorMessage from "./ErrorMessageContainer";
import { appSelectors } from "../state";

class ErrorPage extends React.Component {
  static propTypes = {
    statusCode: PropTypes.number.isRequired
  };

  static async getInitialProps({ store }) {
    return {
      statusCode: appSelectors.getStatusCode(store.getState())
    };
  }

  render() {
    const { statusCode } = this.props;
    return <ErrorMessage statusCode={statusCode} />;
  }
}

export default ErrorPage;
