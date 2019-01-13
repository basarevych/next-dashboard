import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { authSelectors } from "../auth/state";
import UsersPageComponent, { styles } from "./UsersPage";

const mapStateToProps = state => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state)
  };
};

const UsersPage = withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    null,
    null,
    { pure: false }
  )(UsersPageComponent)
);

UsersPage.getInitialProps = UsersPageComponent.getInitialProps;

export default UsersPage;
