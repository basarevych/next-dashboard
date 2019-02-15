import { connect } from "react-redux";
import { authSelectors } from "../auth/state";
import DashboardPageComponent from "./DashboardPage";

const mapStateToProps = state => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state)
  };
};

const DashboardPage = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(DashboardPageComponent);

DashboardPage.getInitialProps = DashboardPageComponent.getInitialProps;

export default DashboardPage;
