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

const ErrorMessage = withStyles(styles)(
  injectIntl(
    connect(
      null,
      mapDispathToProps
    )(ErrorMessageComponent)
  )
);
export default ErrorMessage;
