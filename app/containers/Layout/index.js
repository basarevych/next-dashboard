import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withRouter } from "next/router";
import { appSelectors } from "../../state/app";
import { authSelectors } from "../../state/auth";
import LayoutComponent from "../../components/Layout";

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
  injectIntl(
    connect(
      mapStateToProps,
      null,
      null,
      { pure: false }
    )(LayoutComponent)
  )
);

export default Layout;
