import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { authSelectors } from "../auth/state";
import DashboardPageComponent, { styles } from "./DashboardPage";

const mapStateToProps = state => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state)
  };
};

const DashboardPage = withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    null,
    null,
    { pure: false }
  )(DashboardPageComponent)
);

DashboardPage.getInitialProps = DashboardPageComponent.getInitialProps;

export default DashboardPage;
