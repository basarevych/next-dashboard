import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/styles";
import ErrorMessageComponent, { styles } from "./ErrorMessage";
import { appOperations } from "../state";

const mapDispathToProps = dispatch => {
  return {
    onSignIn: () => dispatch(appOperations.showAuthModal())
  };
};

const ErrorMessage = connect(
  null,
  mapDispathToProps
)(withStyles(styles)(injectIntl(ErrorMessageComponent)));
export default ErrorMessage;
