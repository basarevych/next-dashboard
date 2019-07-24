import { connect } from "react-redux";
import { withStyles, withTheme } from "@material-ui/styles";
import { appSelectors, appOperations } from "../app/state";
import ProfileComponent, { styles } from "./Profile";

const mapStateToProps = state => {
  return {
    user: appSelectors.getUserJS(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSave: (name, email, password) =>
      dispatch(appOperations.updateProfile({ name, email, password })),
    onLink: provider => dispatch(appOperations.linkProvider({ provider })),
    onUnlink: provider => dispatch(appOperations.unlinkProvider({ provider })),
    onVerify: () => dispatch(appOperations.requestEmailVerification()),
    onDestroy: () => dispatch(appOperations.deleteProfile())
  };
};

const Profile = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withTheme(ProfileComponent)));

export default Profile;
