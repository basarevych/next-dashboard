import { connect } from "react-redux";
import { authSelectors } from "../../state/auth";
import DashboardPageComponent from "../../components/Pages/DashboardPage";

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

export default DashboardPage;
