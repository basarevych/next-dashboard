import React from "react";
import PropTypes from "prop-types";
import ErrorMessage from "./ErrorMessageContainer";
import { appSelectors } from "../state";

class ErrorPage extends React.Component {
  static propTypes = {
    statusCode: PropTypes.number
  };

  static async getInitialProps({ store }) {
    const statusCode = store && appSelectors.getStatusCode(store.getState());
    return { statusCode };
  }

  render() {
    return <ErrorMessage statusCode={this.props.statusCode} />;
  }
}

export default ErrorPage;
