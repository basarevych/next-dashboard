import React from "react";
import PropTypes from "prop-types";
import ErrorMessage from "./ErrorMessage";
import { appSelectors } from "../state";

function ErrorPage(props) {
  return <ErrorMessage statusCode={props.statusCode} />;
}

ErrorPage.propTypes = {
  statusCode: PropTypes.number.isRequired
};

ErrorPage.getInitialProps = async ({ store }) => {
  return {
    statusCode: appSelectors.getStatusCode(store.getState())
  };
};

export default ErrorPage;
