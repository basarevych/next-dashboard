import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { PageTransition } from "next-page-transitions";
import SVG from "react-inlinesvg";
import Paper from "@material-ui/core/Paper";
import { graphql } from "react-relay";
import { QueryRenderer } from "../providers/Relay";
import Layout from "../layout/LayoutContainer";
import ErrorMessage from "../error/ErrorMessageContainer";
import logo from "../../../static/img/react-logo.svg";

const timeout = 500;

export const styles = theme => ({
  "@global": {
    ".page-transition-enter": {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "stretch",
      opacity: 0
    },
    ".page-transition-enter-active": {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "stretch",
      opacity: 1,
      transition: `opacity ${timeout}ms`
    },
    ".page-transition-enter-done": {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "stretch"
    },
    ".page-transition-exit": {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "stretch",
      opacity: 1
    },
    ".page-transition-exit-active": {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "stretch",
      opacity: 0,
      transition: `opacity ${timeout}ms`
    },
    ".page-transition-exit-done": {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "stretch"
    },
    "@keyframes page-loader-rotation": {
      from: {
        transform: "rotate(0deg)"
      },
      to: {
        transform: "rotate(359deg)"
      }
    }
  },
  loaderWrapper: {
    position: "fixed",
    top: "50vh",
    left: "50vw",
    width: "auto",
    height: "auto",
    transform: "translate3d(-50%, -50%, 0)",
    display: "flex",
    alignItems: "center",
    paddingRight: 30,
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  loaderIcon: {
    width: 100,
    height: 100,
    animation: "page-loader-rotation 5s infinite linear"
  },
  loaderText: {
    fontSize: 32
  }
});

export const query = graphql`
  query PageLoaderQuery {
    viewer {
      ...LayoutContainer_viewer
    }
  }
`;

class PageLoader extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
  };

  renderLoader() {
    const { classes } = this.props;
    return (
      <Paper className={classes.loaderWrapper}>
        <SVG src={logo} className={classes.loaderIcon} />
        <div className={classes.loaderText}>
          <FormattedMessage id="LAYOUT_LOADING_MESSAGE" />
        </div>
      </Paper>
    );
  }

  render() {
    const { children } = this.props;
    return (
      <QueryRenderer
        query={query}
        render={({ error, props }) => (
          <Layout
            viewer={props && props.viewer}
            render={() => {
              if (error) return <ErrorMessage error={error} />;
              return (
                <PageTransition
                  timeout={timeout}
                  classNames="page-transition"
                  loadingComponent={this.renderLoader()}
                  loadingDelay={300}
                  loadingTimeout={0}
                >
                  {children}
                </PageTransition>
              );
            }}
          />
        )}
      />
    );
  }
}

export default PageLoader;
