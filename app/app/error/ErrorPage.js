import React from "react";
import PropTypes from "prop-types";
import ErrorMessage from "./ErrorMessageContainer";

class ErrorPage extends React.Component {
  static propTypes = {
    statusCode: PropTypes.number
  };

  render() {
    return <ErrorMessage statusCode={this.props.statusCode} />;
  }
}

export default ErrorPage;
