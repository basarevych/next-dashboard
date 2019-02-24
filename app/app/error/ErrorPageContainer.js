import { connect } from "react-redux";
import { appSelectors } from "../state";
import ErrorPageComponent from "./ErrorPage";

const mapStateToProps = state => {
  return {
    statusCode: appSelectors.getStatusCode(state)
  };
};

const ErrorPage = connect(mapStateToProps)(ErrorPageComponent);
ErrorPage.getInitialProps = ErrorPageComponent.getInitialProps;

export default ErrorPage;
