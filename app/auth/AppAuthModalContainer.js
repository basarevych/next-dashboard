import Router from "next/router";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import { appSelectors, appOperations } from "../app/state";
import { authSelectors, authOperations } from "./state";
import AppAuthModalComponent, { styles } from "./AppAuthModal";

const mapStateToProps = state => {
  return {
    isOpen:
      (!process.browser || !_.startsWith(Router.pathname, "/auth")) &&
      appSelectors.isStarted(state) &&
      appSelectors.getStatusCode(state) === 200 &&
      !authSelectors.isAuthenticated(state),
    providers: authSelectors.getAllProviders(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetCookie: (name, value, days) =>
      dispatch(appOperations.setCookie({ name, value, days })),
    onSignIn: (email, password) =>
      dispatch(authOperations.signIn({ email, password })),
    onSignUp: (email, password) =>
      dispatch(authOperations.signUp({ email, password }))
  };
};

const AppAuthModal = withStyles(styles)(
  injectIntl(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(AppAuthModalComponent)
  )
);

export default AppAuthModal;
