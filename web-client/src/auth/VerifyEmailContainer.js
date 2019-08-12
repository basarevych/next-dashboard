import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import { appOperations } from "../app/state";
import VerifyEmailComponent, { styles } from "./VerifyEmail";

const mapDispatchToProps = dispatch => {
  return {
    onVerify: token =>
      dispatch(appOperations.finishEmailVerification({ token }))
  };
};

const VerifyEmail = withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(VerifyEmailComponent)
);
export default VerifyEmail;
