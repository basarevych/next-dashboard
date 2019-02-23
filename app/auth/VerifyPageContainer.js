import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { authOperations } from "./state";
import VerifyPageComponent, { styles } from "./VerifyPage";

const mapDispatchToProps = dispatch => {
  return {
    onVerify: token =>
      dispatch(authOperations.finishEmailVerification({ token }))
  };
};

const VerifyPage = withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(VerifyPageComponent)
);
VerifyPage.getInitialProps = VerifyPageComponent.getInitialProps;

export default VerifyPage;
