import { connect } from "react-redux";
import { authSelectors } from "../../state/auth";
import { dashboardOperations } from "../../state/dashboard";
import FormsPageComponent from "../../components/Pages/FormsPage";

const mapStateToProps = state => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state)
  };
};

const FormsPage = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(FormsPageComponent);

FormsPage.getInitialProps = async ({ store, req }) => {
  await store.dispatch(dashboardOperations.loadCountries({ req }));
};

export default FormsPage;
