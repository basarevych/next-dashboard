import React, { useMemo, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Head from "next/head";
import { PageTransition } from "next-page-transitions";
import { useSelector } from "react-redux";
import { useIntl, FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Snackbar from "@material-ui/core/Snackbar";
import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ErrorMessage from "../errors/ErrorMessage";
import AppAuthModal from "../modals/AppAuthModal";
import constants from "../../../common/constants";
import { appSelectors } from "../state";
import logo from "../../../static/img/react-logo.svg";

import "../../../styles";
import styledScroll from "../../../styles/styledScroll";

const TIMEOUT = 500;

const useStyles = makeStyles(theme => ({
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
    },
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
      transition: `opacity ${TIMEOUT}ms`
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
      transition: `opacity ${TIMEOUT}ms`
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
    padding: "10px 50px 10px 30px",
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  loaderIcon: {
    animation: "page-loader-rotation 5s infinite linear",
    "& svg": {
      height: 40,
      fill: "currentColor",
      verticalAlign: "middle"
    }
  },
  loaderText: {
    fontSize: 32
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
  const router = useRouter();

  const [isLoaded, setIsLoaded] = useState(false);
  const [isUpdateNeeded, setIsUpdateNeeded] = useState(!!global.__updateReady);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const statusCode = useSelector(state => appSelectors.getStatusCode(state));
  const isStopped = useSelector(state => appSelectors.isStopped(state));
  const isDisconnected = useSelector(
    state =>
      appSelectors.isStarted(state) &&
      !appSelectors.isStopped(state) &&
      !appSelectors.isConnected(state)
  );
  const isAuthModalOpen = useSelector(state =>
    appSelectors.isAuthModalOpen(state)
  );

  const handleSidebarToggle = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen, setIsSidebarOpen]);

  const handleSidebarOpen = useCallback(() => {
    setIsSidebarOpen(true);
  }, [setIsSidebarOpen]);

  const handleSidebarClose = useCallback(() => {
    setIsSidebarOpen(false);
  }, [setIsSidebarOpen]);

  const doUpdate = useCallback(() => {
    setIsUpdateNeeded(false);
    window.location.reload(true);
  }, [setIsUpdateNeeded]);

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

  const loader = useMemo(
    () => (
      <Paper className={classes.loaderWrapper} elevation={5}>
        <div className={classes.loaderIcon}>
          <span dangerouslySetInnerHTML={{ __html: logo }} />
        </div>
        <div className={classes.loaderText}>
          <FormattedMessage id="LAYOUT_LOADING_MESSAGE" />
        </div>
      </Paper>
    ),
    [classes, logo]
  );

  if (isStopped) return null;

  const page = constants.pages[router.asPath] || {};
  const title = page.title;

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
        <Drawer variant="permanent" open classes={{ paper: classes.sidebar }}>
          <Sidebar onMenuClick={handleSidebarClose} />
        </Drawer>
      </Hidden>

      <main className={classes.main}>
        <Header onSidebarToggle={handleSidebarToggle} />
        {statusCode === 200 && (
          <PageTransition
            timeout={TIMEOUT}
            classNames="page-transition"
            loadingComponent={loader}
            loadingDelay={300}
            loadingTimeout={0}
          >
            {props.children}
          </PageTransition>
        )}
        {statusCode !== 200 && <ErrorMessage statusCode={statusCode} />}
      </main>

      {isAuthModalOpen && <AppAuthModal />}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default Layout;
