import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { intlShape } from "react-intl";
import { ToastContainer } from "react-toastify";
import CircularProgress from "@material-ui/core/CircularProgress";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Sidebar from "./SidebarContainer";
import Header from "./HeaderContainer";
import AppAuthModal from "../../auth/AppAuthModalContainer";
import ErrorPage from "../error/ErrorPage";

import "../styles";
import styledScroll from "../styles/styledScroll";

export const styles = theme => ({
  "@global": {
    html: {
      fontSize: `${theme.typography.fontSize}px`
    },
    body: _.merge(
      {
        fontFamily: theme.typography.fontFamily,
        background: theme.palette.background.default,
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
    background: theme.main.backdrop,
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
    color: theme.main.spinner
  },
  sidebar: _.merge(
    {
      background: theme.sidebar.background,
      border: "none",
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
    background: theme.main.background,
    color: theme.main.color,
    minHeight: "100vh",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "stretch",
    marginLeft: theme.sidebar.computerWidth * theme.spacing.unit,
    [theme.breakpoints.between("sm", "md")]: {
      marginLeft: theme.sidebar.tabletWidth * theme.spacing.unit
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  content: {
    boxShadow: "-2px -2px 8px rgba(0, 0, 0, 0.3)",
    zIndex: 1300,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  anonymous: {
    background: theme.palette.background.paper,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

class Layout extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    classes: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isStarted: PropTypes.bool.isRequired,
    isStopped: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    statusCode: PropTypes.number.isRequired,
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
    this.handleSidebarOpen = this.handleSidebarOpen.bind(this);
    this.handleSidebarClose = this.handleSidebarClose.bind(this);
  }

  handleSidebarToggle() {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
  }

  handleSidebarOpen() {
    if (!this.state.isSidebarOpen) this.setState({ isSidebarOpen: true });
  }

  handleSidebarClose() {
    if (this.state.isSidebarOpen) this.setState({ isSidebarOpen: false });
  }

  render() {
    if (this.props.isStopped) return null;

    return (
      <div className="app">
        {this.props.title && (
          <Head>
            <title>
              {this.props.intl.formatMessage({ id: this.props.title })}
            </title>
          </Head>
        )}

        {this.props.isError && (
          <main className={this.props.classes.anonymous}>
            <ErrorPage statusCode={this.props.statusCode} />
          </main>
        )}

        {!this.props.isError && (
          <React.Fragment>
            {this.props.isAuthenticated && (
              <React.Fragment>
                <Hidden implementation="css" smUp>
                  <SwipeableDrawer
                    open={this.state.isSidebarOpen}
                    classes={{ paper: this.props.classes.sidebar }}
                    onOpen={this.handleSidebarOpen}
                    onClose={this.handleSidebarClose}
                  >
                    <Sidebar onMenuClick={this.handleSidebarClose} />
                  </SwipeableDrawer>
                </Hidden>

                <Hidden implementation="css" xsDown>
                  <Drawer
                    variant="permanent"
                    open
                    classes={{ paper: this.props.classes.sidebar }}
                  >
                    <Sidebar onMenuClick={this.handleSidebarClose} />
                  </Drawer>
                </Hidden>

                <div className={this.props.classes.main}>
                  <main className={this.props.classes.content}>
                    {!this.props.isError && (
                      <Header onSidebarToggle={this.handleSidebarToggle} />
                    )}
                    {this.props.children}
                  </main>
                </div>
              </React.Fragment>
            )}

            {!this.props.isAuthenticated && (
              <main className={this.props.classes.anonymous}>
                {this.props.children}
              </main>
            )}

            {!this.props.isStarted && (
              <div className={this.props.classes.backdrop}>
                <div className={this.props.classes.spinner}>
                  <CircularProgress color="inherit" size={60} />
                </div>
              </div>
            )}
          </React.Fragment>
        )}

        <AppAuthModal />
        <ToastContainer />
      </div>
    );
  }
}

export default Layout;
