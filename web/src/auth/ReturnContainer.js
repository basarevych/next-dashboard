import { connect } from "react-redux";
import { appOperations } from "../app/state";
import ReturnComponent from "./Return";

const mapDispatchToProps = dispatch => {
  return {
    onReturn: (token, redirect) =>
      dispatch(appOperations.finishLinkingProvider({ token, redirect }))
  };
};

const Return = connect(
  null,
  mapDispatchToProps
)(ReturnComponent);

export default Return;
