import { connect } from "react-redux";
import { authSelectors } from "../auth/state";
import UsersPageComponent from "./UsersPage";

const mapStateToProps = state => {
  return {
    userRoles: authSelectors.getRoles(state)
  };
};

const UsersPage = connect(mapStateToProps)(UsersPageComponent);
UsersPage.getInitialProps = UsersPageComponent.getInitialProps;

export default UsersPage;
