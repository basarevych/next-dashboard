import { connect } from "react-redux";
import { graphql, createRefetchContainer } from "react-relay";
import { injectIntl } from "react-intl";
import { withRouter } from "next/router";
import { withStyles } from "@material-ui/styles";
import { appSelectors, appOperations } from "../state";
import LayoutComponent, { styles } from "./Layout";

const mapStateToProps = state => {
  return {
    statusCode: appSelectors.getStatusCode(state),
    isStopped: appSelectors.isStopped(state),
    isDisconnected:
      appSelectors.isStarted(state) &&
      !appSelectors.isStopped(state) &&
      !appSelectors.isConnected(state),
    isAuthModalOpen: appSelectors.isAuthModalOpen(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetStatusCode: code => dispatch(appOperations.setStatusCode({ code }))
  };
};

const Layout = createRefetchContainer(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { pure: false }
  )(withRouter(withStyles(styles)(injectIntl(LayoutComponent)))),
  {
    viewer: graphql`
      fragment LayoutContainer_viewer on Viewer {
        me {
          isAuthenticated
          userId
          name
          email
          roles
          providers {
            name
          }
        }
      }
    `
  },
  graphql`
    query LayoutContainerQuery {
      viewer {
        ...LayoutContainer_viewer
      }
    }
  `
);

export default Layout;
