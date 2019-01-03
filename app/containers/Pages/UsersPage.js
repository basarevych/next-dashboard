import { connect } from "react-redux";
import { authSelectors } from "../../state/auth";
import { usersOperations } from "../../state/users";
import UsersPageComponent from "../../components/Pages/UsersPage";

const mapStateToProps = state => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state)
  };
};

const UsersPage = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(UsersPageComponent);

UsersPage.getInitialProps = async ({ store, req }) => {
  await store.dispatch(usersOperations.load({ req }));
};

export default UsersPage;
