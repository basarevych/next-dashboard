import { connect } from "react-redux";
import { appOperations } from "../app/state";
import ReturnPageComponent from "./ReturnPage";

const mapDispatchToProps = dispatch => {
  return {
    onReturn: (token, redirect) =>
      dispatch(appOperations.finishLinkingProvider({ token, redirect }))
  };
};

const ReturnPage = connect(
  null,
  mapDispatchToProps
)(ReturnPageComponent);

ReturnPage.getInitialProps = ReturnPageComponent.getInitialProps;
export default ReturnPage;
