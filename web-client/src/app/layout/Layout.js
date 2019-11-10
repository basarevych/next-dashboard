import React, {
  useMemo,
  useState,
  useLayoutEffect,
  useEffect,
  useCallback
} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
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
import loader from "../../../public/img/loader.svg";

import "../../../styles";
import styledScroll from "../../../styles/styledScroll";

const TIMEOUT = 500;

const useIsomorphicLayoutEffect = process.browser ? useLayoutEffect : useEffect;

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
    },
    ".page-transition-enter": {
      opacity: 0
    },
    ".page-transition-enter-active": {
      opacity: 1,
      transition: `opacity ${TIMEOUT}ms`
    },
    ".page-transition-enter-done": {
      opacity: 1
    },
    ".page-transition-exit": {
      opacity: 1
    },
    ".page-transition-exit-active": {
      opacity: 0,
      transition: `opacity ${TIMEOUT}ms`
    },
    ".page-transition-exit-done": {
      opacity: 0
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
  },
  loaderWrapper: {
    position: "fixed",
    top: "50vh",
    left: "50vw",
    width: "auto",
    height: "auto",
    transform: "translate3d(-50%, -50%, 0)",
    display: "flex",
    alignItems: "center"
  },
  loaderIcon: {
    "& svg": {
      width: 60,
      height: 60,
      fill: "currentColor",
      verticalAlign: "middle"
    }
  },
  contentWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "stretch"
  },
  contentTransitioning: {
    opacity: 0
  }
}));

function Layout(props) {
  const classes = useStyles(props);
  const intl = useIntl();
  const router = useRouter();

  const [isLoaded, setIsLoaded] = useState(false);
  const [isUpdateNeeded, setIsUpdateNeeded] = useState(!!global.__updateReady);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  useIsomorphicLayoutEffect(() => {
    const handleRouteChangeStart = () => {
      setIsTransitioning(true);
    };
    const handleRouteChangeComplete = () => {
      setIsTransitioning(false);
    };
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router, setIsTransitioning]);

  if (isStopped) return null;

  const page = constants.pages[props.path] || {};
  const title = page.title;

  const content =
    statusCode === 200 ? (
      <PageTransition
        timeout={TIMEOUT}
        classNames="page-transition"
        loadingTimeout={0}
      >
        {props.children}
      </PageTransition>
    ) : (
      <ErrorMessage statusCode={statusCode} />
    );

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

      {props.path === "/pwa" && props.children}

      {props.path !== "/pwa" && (
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

            {isTransitioning && (
              <div className={classes.loaderWrapper}>
                <div
                  className={classes.loaderIcon}
                  dangerouslySetInnerHTML={{ __html: loader }}
                />
              </div>
            )}

            <div
              className={classNames([
                classes.contentWrapper,
                isTransitioning && classes.contentTransitioning
              ])}
            >
              {content}
            </div>
          </main>
        </>
      )}

      {isAuthModalOpen && <AppAuthModal />}
    </div>
  );
}

Layout.propTypes = {
  path: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default Layout;
