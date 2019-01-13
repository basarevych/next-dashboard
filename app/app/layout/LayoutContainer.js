import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withRouter } from "next/router";
import { withStyles } from "@material-ui/core/styles";
import { appSelectors } from "../state";
import { authSelectors } from "../../auth/state";
import LayoutComponent, { styles } from "./Layout";

const mapStateToProps = state => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state),
    isStarted:
      appSelectors.isStarted(state) &&
      (!authSelectors.isAuthenticated(state) ||
        appSelectors.isConnected(state)),
    isError: appSelectors.getStatusCode(state) !== 200
  };
};

const Layout = withRouter(
  withStyles(styles)(
    injectIntl(
      connect(
        mapStateToProps,
        null,
        null,
        { pure: false }
      )(LayoutComponent)
    )
  )
);

export default Layout;
