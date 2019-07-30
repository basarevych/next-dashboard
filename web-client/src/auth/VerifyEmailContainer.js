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

const VerifyEmail = connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(VerifyEmailComponent));
export default VerifyEmail;
