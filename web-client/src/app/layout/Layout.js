import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { intlShape, FormattedMessage } from "react-intl";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Snackbar from "@material-ui/core/Snackbar";
import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Sidebar from "./SidebarContainer";
import Header from "./HeaderContainer";
import AppAuthModal from "../modals/AppAuthModalContainer";
import ErrorMessage from "../error/ErrorMessageContainer";
import constants from "../../../common/constants";

import "../../../styles";
import styledScroll from "../../../styles/styledScroll";

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
  update: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    zIndex: 11000,
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    padding: "0.5rem 1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  sidebar: _.merge(
    {
      background: theme.sidebar.background,
      border: "none",
      overflowX: "hidden",
      width: theme.spacing(theme.sidebar.computerWidth),
      [theme.breakpoints.between("sm", "md")]: {
        width: theme.spacing(theme.sidebar.tabletWidth)
      },
      [theme.breakpoints.down("xs")]: {
        width: theme.spacing(theme.sidebar.phoneWidth)
      }
    },
    styledScroll(theme)
  ),
  main: {
    position: "relative",
    boxShadow: "-2px -2px 8px rgba(0, 0, 0, 0.3)",
    background: theme.main.background,
    color: theme.main.color,
    zIndex: 1200,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "stretch",
    marginLeft: theme.spacing(theme.sidebar.computerWidth),
    [theme.breakpoints.between("sm", "md")]: {
      marginLeft: theme.spacing(theme.sidebar.tabletWidth)
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  }
});

class Layout extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    classes: PropTypes.object.isRequired,
    isStopped: PropTypes.bool.isRequired,
    isDisconnected: PropTypes.bool.isRequired,
    isAuthModalOpen: PropTypes.bool.isRequired,
    statusCode: PropTypes.number.isRequired,
    page: PropTypes.string.isRequired,
    relay: PropTypes.object.isRequired,
    error: PropTypes.object,
    viewer: PropTypes.object,
    render: PropTypes.func,
    onSetUser: PropTypes.func.isRequired
  };

  static getDerivedStateFromProps(nextProps) {
    const user = _.get(nextProps, "viewer.me");
    if (user) nextProps.onSetUser(user);
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      isUpdateNeeded: !!global.__updateReady,
      isSidebarOpen: false
    };

    this.isDestroyed = false;

    this.handleSidebarToggle = this.handleSidebarToggle.bind(this);
    this.handleSidebarOpen = this.handleSidebarOpen.bind(this);
    this.handleSidebarClose = this.handleSidebarClose.bind(this);
    this.handleAuthMessage = this.handleAuthMessage.bind(this);
    this.handleUpdateReady = this.handleUpdateReady.bind(this);
    this.doUpdate = this.doUpdate.bind(this);
  }

  componentDidMount() {
    window.addEventListener(
      constants.events.IDENTITY_CHANGED,
      this.handleAuthMessage
    );
    window.addEventListener(
      constants.events.PROFILE_CHANGED,
      this.handleAuthMessage
    );
    window.addEventListener(
      constants.events.UPDATE_READY,
      this.handleUpdateReady
    );

    this.setState({ isLoaded: true, isUpdateNeeded: !!global.__updateReady });
  }

  componentWillUnmount() {
    this.isDestroyed = true;

    window.removeEventListener(
      constants.events.IDENTITY_CHANGED,
      this.handleAuthMessage
    );
    window.removeEventListener(
      constants.events.PROFILE_CHANGED,
      this.handleAuthMessage
    );
    window.removeEventListener(
      constants.events.UPDATE_READY,
      this.handleUpdateReady
    );
  }

  getTitle() {
    const page = constants.pages[this.props.page] || {};
    return page.title;
  }

  handleAuthMessage() {
    if (!this.isDestroyed)
      this.props.relay.refetch(null, null, null, { force: true });
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

  handleUpdateReady() {
    this.setState({ isUpdateNeeded: true });
  }

  doUpdate() {
    this.setState({ isUpdateNeeded: false });
    window.location.reload(true);
  }

  render() {
    if (this.props.isStopped) return null;

    const title = this.getTitle();
    const isError = this.props.error || this.props.statusCode !== 200;

    return (
      <div className="app">
        {!!title && (
          <Head>
            <title>{this.props.intl.formatMessage({ id: title })}</title>
          </Head>
        )}

        {this.state.isLoaded && this.state.isUpdateNeeded && (
          <div className={this.props.classes.update}>
            <Button variant="text" color="inherit" onClick={this.doUpdate}>
              <FormattedMessage id="LAYOUT_UPDATE_READY_MESSAGE" />
            </Button>
          </div>
        )}

        {this.state.isLoaded && this.props.isDisconnected && (
          <Snackbar
            open
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            message={<FormattedMessage id="LAYOUT_NOT_CONNECTED_MESSAGE" />}
          />
        )}

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

        <main className={this.props.classes.main}>
          {isError && (
            <ErrorMessage
              statusCode={this.props.statusCode}
              error={this.props.error}
            />
          )}
          {!isError && (
            <>
              <Header onSidebarToggle={this.handleSidebarToggle} />
              {!!this.props.viewer &&
                !!this.props.render &&
                this.props.render()}
            </>
          )}
        </main>

        {this.props.isAuthModalOpen && <AppAuthModal />}
      </div>
    );
  }
}

export default Layout;
