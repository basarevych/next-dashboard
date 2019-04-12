import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { authSelectors, authOperations } from "../auth/state";
import ProfilePageComponent, { styles } from "./ProfilePage";

const mapStateToProps = state => {
  return {
    userRoles: authSelectors.getRoles(state),
    userVerified: authSelectors.getIsEmailVerified(state),
    userProviders: authSelectors.getUserProviders(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(authOperations.getStatus()),
    onSave: (name, email, password) =>
      dispatch(authOperations.updateProfile({ name, email, password })),
    onLink: provider => dispatch(authOperations.linkProvider({ provider })),
    onUnlink: provider => dispatch(authOperations.unlinkProvider({ provider })),
    onVerify: () => dispatch(authOperations.requestEmailVerification()),
    onDestroy: () => dispatch(authOperations.deleteProfile())
  };
};

const ProfilePage = withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfilePageComponent)
);
ProfilePage.getInitialProps = ProfilePageComponent.getInitialProps;

export default ProfilePage;
