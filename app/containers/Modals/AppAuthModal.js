import { injectIntl } from "react-intl";
import { appSelectors, appOperations } from "../../state/app";
import { authSelectors, authOperations } from "../../state/auth";
import connectForm from "../../lib/connectForm";
import AppAuthModalComponent from "../../components/Modals/AppAuthModal";

const mapStateToProps = state => {
  return {
    isOpen:
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

const AppAuthModal = injectIntl(
  connectForm(AppAuthModalComponent, mapStateToProps, mapDispatchToProps)
);
export default AppAuthModal;
