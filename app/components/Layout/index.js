import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { intlShape } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Sidebar from "../../containers/Layout/Sidebar";
import Header from "../../containers/Layout/Header";
import AppAuthModal from "../../containers/Modals/AppAuthModal";

import "../../styles";
import styledScroll from "../../styles/styledScroll";

const styles = theme => ({
  "@global": {
    html: {
      fontSize: `${theme.typography.fontSize}px`
    },
    body: _.merge(
      {
        fontFamily: theme.typography.fontFamily,
        background:
          theme.palette.background.default +
          (theme.main.wallpaper
            ? ` url("${
                theme.main.wallpaper
              }") top left / 100vw 100vh no-repeat fixed`
            : ""),
        color: theme.palette.text.primary
      },
      styledScroll(theme)
    ),
    pre: {
      fontFamily: '"Roboto Mono", monospace'
    }
  },
  app: {
    position: "relative"
  },
  backdrop: {
    background: theme.palette.background.default,
    opacity: 0.8,
    zIndex: 10000,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  spinner: {
    position: "fixed",
    width: 60,
    top: "50vh",
    left: "50vw",
    transform: "translate3d(-50%, -50%, 0)",
    color: theme.palette.primary.contrastText
  },
  sidebar: _.merge(
    {
      background: theme.sidebar.background,
      overflowX: "hidden",
      width: theme.sidebar.computerWidth * theme.spacing.unit,
      [theme.breakpoints.between("sm", "md")]: {
        width: theme.sidebar.tabletWidth * theme.spacing.unit
      },
      [theme.breakpoints.down("xs")]: {
        width: theme.sidebar.phoneWidth * theme.spacing.unit
      }
    },
    styledScroll(theme)
  ),
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: theme.sidebar.computerWidth * theme.spacing.unit,
    [theme.breakpoints.between("sm", "md")]: {
      marginLeft: theme.sidebar.tabletWidth * theme.spacing.unit
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  }
});

class Layout extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isStarted: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    title: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      isSidebarOpen: false
    };

    this.handleSidebarToggle = this.handleSidebarToggle.bind(this);
    this.handleSidebarClose = this.handleSidebarClose.bind(this);
  }

  handleSidebarToggle() {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
  }

  handleSidebarClose() {
    if (this.state.isSidebarOpen) this.setState({ isSidebarOpen: false });
  }

  render() {
    return (
      <div className="app">
        {this.props.title && (
          <Head>
            <title>
              {this.props.intl.formatMessage({ id: this.props.title })}
            </title>
          </Head>
        )}

        {this.props.isAuthenticated && (
          <Hidden implementation="css" smUp>
            <SwipeableDrawer
              open={this.state.isSidebarOpen}
              onOpen={this.handleSidebarToggle}
              onClose={this.handleSidebarClose}
            >
              <Sidebar onMenuClick={this.handleSidebarClose} />
            </SwipeableDrawer>
          </Hidden>
        )}

        {this.props.isAuthenticated && (
          <Hidden implementation="css" xsDown>
            <Drawer
              variant="permanent"
              open
              classes={{ paper: this.props.classes.sidebar }}
            >
              <Sidebar onMenuClick={this.handleSidebarClose} />
            </Drawer>
          </Hidden>
        )}

        {this.props.isAuthenticated && (
          <main className={this.props.classes.main}>
            {!this.props.isError && <Header />}
            {this.props.children}
          </main>
        )}

        {!this.props.isAuthenticated && this.props.children}

        {!this.props.isStarted && !this.props.isError && (
          <div className={this.props.classes.backdrop}>
            <div className={this.props.classes.spinner}>
              <CircularProgress color="inherit" size={60} />
            </div>
          </div>
        )}

        <AppAuthModal />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Layout);
