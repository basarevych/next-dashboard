import { connect } from "react-redux";
import { withStyles, withTheme } from "@material-ui/styles";
import { appOperations } from "../app/state";
import { graphql, createRefetchContainer } from "react-relay";
import ProfileComponent, { styles } from "./Profile";

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

const Profile = createRefetchContainer(
  connect(
    null,
    mapDispatchToProps
  )(withStyles(styles)(withTheme(ProfileComponent))),
  {
    viewer: graphql`
      fragment ProfileContainer_viewer on Viewer {
        me {
          isAuthenticated
          name
          email
          isEmailVerified
          roles
          providers {
            name
            isLinked
          }
        }
      }
    `
  },
  graphql`
    query ProfileContainerQuery {
      viewer {
        ...ProfileContainer_viewer
      }
    }
  `
);

export default Profile;
