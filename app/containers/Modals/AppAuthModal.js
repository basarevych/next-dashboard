import { injectIntl } from "react-intl";
import { appSelectors } from "../../state/app";
import { authSelectors, authOperations } from "../../state/auth";
import connectForm from "../../lib/connectForm";
import AppAuthModalComponent from "../../components/Modals/AppAuthModal";

const mapStateToProps = state => {
  return {
    isOpen:
      appSelectors.isStarted(state) &&
      appSelectors.getStatusCode(state) === 200 &&
      !authSelectors.isAuthenticated(state),
    providers: authSelectors.getAllProviders(state),
    cookie: appSelectors.getService(state, { service: "cookie" })
  };
};

const mapDispatchToProps = dispatch => {
  return {
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
