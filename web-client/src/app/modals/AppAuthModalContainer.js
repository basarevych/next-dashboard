import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/styles";
import { appOperations, appSelectors } from "../state";
import AppAuthModalComponent, { styles } from "./AppAuthModal";

const mapStateToProps = state => {
  return {
    user: appSelectors.getUserJS(state),
    apiServer: appSelectors.getApiServer(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLink: provider => dispatch(appOperations.linkProvider({ provider })),
    onSignIn: (email, password) =>
      dispatch(appOperations.signIn({ email, password })),
    onSignUp: (email, password) =>
      dispatch(appOperations.signUp({ email, password })),
    onClose: () => dispatch(appOperations.hideAuthModal())
  };
};

const AppAuthModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(injectIntl(AppAuthModalComponent)));

export default AppAuthModal;
