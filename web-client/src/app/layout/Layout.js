import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { PageTransition } from "next-page-transitions";
import { useSelector } from "react-redux";
import { useIntl, FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Snackbar from "@material-ui/core/Snackbar";
import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content, { timeout } from "./Content";
import ErrorMessage from "../errors/ErrorMessage";
import AppAuthModal from "../modals/AppAuthModal";
import constants from "../../../common/constants";
import { appSelectors } from "../state";

import styledScroll from "../../../styles/styledScroll";

const useStyles = makeStyles(theme => ({
  "@global": {
    html: {
      fontSize: `${theme.typography.fontSize}px`
    },
    body: Object.assign(
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
  sidebar: Object.assign(
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
    height: "100%",
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
}));

function Layout(props) {
  const classes = useStyles(props);
  const intl = useIntl();

  const [isLoaded, setIsLoaded] = useState(false);
  const [isUpdateNeeded, setIsUpdateNeeded] = useState(!!global.__updateReady);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const statusCode = useSelector(appSelectors.getStatusCode);
  const isStopped = useSelector(appSelectors.getIsStopped);
  const isDisconnected = useSelector(
    state =>
      appSelectors.getIsStarted(state) &&
      !appSelectors.getIsStopped(state) &&
      !appSelectors.getIsConnected(state)
  );
  const isAuthModalOpen = useSelector(appSelectors.getIsAuthModalOpen);

  const handleSidebarToggle = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen]);

  const handleSidebarOpen = useCallback(() => {
    setIsSidebarOpen(true);
  }, []);

  const handleSidebarClose = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const doUpdate = useCallback(() => {
    setIsUpdateNeeded(false);
    window.location.reload(true);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    setIsUpdateNeeded(!!global.__updateReady);

    const handleUpdateReady = () => {
      setIsUpdateNeeded(true);
    };
    window.addEventListener(constants.events.UPDATE_READY, handleUpdateReady);

    return () => {
      window.removeEventListener(
        constants.events.UPDATE_READY,
        handleUpdateReady
      );
    };
  }, []);

  if (isStopped) return null;

  const page = Object.values(constants.pages).find(
    item => item.page === props.route
  );
  const title = (page || {}).title;

  return (
    <div className="app">
      {!!title && (
        <Head>
          <title>{intl.formatMessage({ id: title })}</title>
        </Head>
      )}

      {isLoaded && isUpdateNeeded && (
        <div className={classes.update}>
          <Button variant="text" color="inherit" onClick={doUpdate}>
            <FormattedMessage id="LAYOUT_UPDATE_READY_MESSAGE" />
          </Button>
        </div>
      )}

      {isLoaded && isDisconnected && (
        <Snackbar
          open
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          message={<FormattedMessage id="LAYOUT_NOT_CONNECTED_MESSAGE" />}
        />
      )}

      {props.route === "/pwa" && props.children}

      {props.route !== "/pwa" && (
        <>
          <Hidden implementation="css" smUp>
            <SwipeableDrawer
              open={isSidebarOpen}
              classes={{ paper: classes.sidebar }}
              onOpen={handleSidebarOpen}
              onClose={handleSidebarClose}
            >
              <Sidebar onMenuClick={handleSidebarClose} />
            </SwipeableDrawer>
          </Hidden>

          <Hidden implementation="css" xsDown>
            <Drawer
              variant="permanent"
              open
              classes={{ paper: classes.sidebar }}
            >
              <Sidebar onMenuClick={handleSidebarClose} />
            </Drawer>
          </Hidden>

          <main className={classes.main}>
            <Header onSidebarToggle={handleSidebarToggle} />

            {statusCode === 200 && (
              <PageTransition
                tag={Content}
                timeout={timeout}
                classNames="page-transition"
                loadingTimeout={0}
              >
                {props.children}
              </PageTransition>
            )}

            {statusCode !== 200 && (
              <Content>
                <ErrorMessage statusCode={statusCode} />
              </Content>
            )}
          </main>
        </>
      )}

      {isAuthModalOpen && <AppAuthModal />}
    </div>
  );
}

Layout.propTypes = {
  route: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default Layout;
