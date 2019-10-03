import React, {
  useRef,
  useReducer,
  useState,
  useEffect,
  useCallback
} from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useIntl, FormattedMessage } from "react-intl";
import { makeStyles, useTheme } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Tooltip from "@material-ui/core/Tooltip";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import ProfileIcon from "@material-ui/icons/AccountBox";
import ThemeIcon from "@material-ui/icons/ColorLens";
import LogoutIcon from "@material-ui/icons/PowerSettingsNew";
import Flag from "react-flags";
import l10n from "../../../../common/locales";
import Inbox from "./Inbox";
import Locales from "./Locales";
import Themes from "./Themes";
import Shadow from "./Shadow";
import { appSelectors, appOperations } from "../../state";
import constants from "../../../../common/constants";

const useStyles = makeStyles(theme => ({
  barContainer: {
    transition: "all 0.25s ease-in-out"
  },
  bar: {
    color: theme.header.color,
    background: theme.header.background,
    boxShadow: "none"
  },
  barItem: {
    marginLeft: "0.5rem",
    marginRight: "0.5rem"
  },
  grow: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1)
  },
  searchIcon: {
    width: theme.spacing(5),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(5),
    transition: theme.transitions.create("width"),
    width: 300,
    [theme.breakpoints.down("md")]: {
      width: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(1)
    }
  },
  tooltip: {
    fontSize: ["1em", "!important"]
  }
}));

function HeaderBar(props) {
  const intl = useIntl();
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();

  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const barRef = useRef(null);

  const [barHeight, setBarHeight] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const [anchorInbox, setAnchorInbox] = useState(null);
  const [anchorLocales, setAnchorLocales] = useState(null);
  const [anchorThemes, setAnchorThemes] = useState(null);

  const locale = useSelector(state => appSelectors.getLocale(state));

  useEffect(() => {
    const onResize = () => forceUpdate();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  const newHeight = _.get(barRef, "current.offsetHeight");
  const newWidth = _.get(barRef, "current.offsetWidth");
  useEffect(() => {
    if (newHeight && newHeight !== barHeight) setBarHeight(newHeight);
    if (newWidth && newWidth !== barWidth) setBarWidth(newWidth);
  }, [newHeight, newWidth]);

  const handleInboxOpen = useCallback(
    evt => {
      setAnchorInbox(evt.currentTarget);
    },
    [setAnchorInbox]
  );

  const handleLocalesOpen = useCallback(
    evt => {
      setAnchorLocales(evt.currentTarget);
    },
    [setAnchorLocales]
  );

  const handleThemesOpen = useCallback(
    evt => {
      setAnchorThemes(evt.currentTarget);
    },
    [setAnchorThemes]
  );

  const handleMenuClose = useCallback(() => {
    setAnchorInbox(null);
    setAnchorLocales(null);
    setAnchorThemes(null);
    props.onClose();
  }, [setAnchorInbox, setAnchorLocales, setAnchorThemes, props.onClose]);

  const handleProfile = useCallback(() => {
    Router.push(constants.pages["/auth/profile"].page, "/auth/profile");
    handleMenuClose();
  }, [handleMenuClose]);

  const handleSignOut = useCallback(() => {
    dispatch(appOperations.signOut());
    handleMenuClose();
  }, [dispatch, handleMenuClose]);

  const isVisible =
    props.isVisible || !!anchorInbox || !!anchorLocales || !!anchorThemes;

  return (
    <ClickAwayListener onClickAway={handleMenuClose}>
      <div
        className={classes.barContainer}
        style={{
          transform: `translate3d(0, ${
            isVisible ? "0" : `-${barHeight ? barHeight - 2 + "px" : "100%"}`
          }, 0)`
        }}
      >
        <div ref={barRef}>
          <AppBar
            className={classes.bar}
            elevation={0}
            position="static"
            color="primary"
          >
            <Toolbar>
              <Hidden xsDown>
                <Button
                  color="inherit"
                  className={classes.barItem}
                  onClick={handleInboxOpen}
                >
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                  &nbsp;&nbsp;
                  <FormattedMessage id="HEADER_INBOX_LABEL" />
                </Button>
                {!props.isAuthenticated && (
                  <Tooltip
                    title={intl.formatMessage({ id: "HEADER_PROFILE_TOOLTIP" })}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button color="inherit" className={classes.barItem}>
                      <ProfileIcon />
                      &nbsp;&nbsp;
                      <FormattedMessage id="HEADER_PROFILE_LABEL" />
                    </Button>
                  </Tooltip>
                )}
                {props.isAuthenticated && (
                  <Button
                    color="inherit"
                    className={classes.barItem}
                    onClick={handleProfile}
                  >
                    <ProfileIcon />
                    &nbsp;&nbsp;
                    <FormattedMessage id="HEADER_PROFILE_LABEL" />
                  </Button>
                )}
                <Button
                  color="inherit"
                  className={classes.barItem}
                  onClick={handleLocalesOpen}
                >
                  <Flag
                    name={l10n.flags[locale]}
                    format="png"
                    pngSize={24}
                    basePath={"/static/img/flags"}
                  />
                  &nbsp;&nbsp;
                  {_.upperCase(locale)}
                </Button>
                <Button
                  color="inherit"
                  className={classes.barItem}
                  onClick={handleThemesOpen}
                >
                  <ThemeIcon />
                  &nbsp;&nbsp;
                  <FormattedMessage
                    id={"THEME_" + _.upperCase(theme.name) + "_MENU"}
                  />
                </Button>
                <div className={classes.grow} />
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                  />
                </div>
                <div className={classes.grow} />
                {props.isAuthenticated && (
                  <IconButton color="inherit" onClick={handleSignOut}>
                    <LogoutIcon />
                  </IconButton>
                )}
              </Hidden>
              <Hidden smUp>
                <IconButton color="inherit" onClick={props.onSidebarToggle}>
                  <MenuIcon />
                </IconButton>
                <IconButton color="inherit" onClick={handleInboxOpen}>
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                {!props.isAuthenticated && (
                  <Tooltip
                    title={intl.formatMessage({ id: "HEADER_PROFILE_TOOLTIP" })}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <IconButton color="inherit">
                      <ProfileIcon />
                    </IconButton>
                  </Tooltip>
                )}
                {props.isAuthenticated && (
                  <IconButton color="inherit" onClick={handleProfile}>
                    <ProfileIcon />
                  </IconButton>
                )}
                <IconButton color="inherit" onClick={handleLocalesOpen}>
                  <Flag
                    name={l10n.flags[locale]}
                    format="png"
                    pngSize={24}
                    basePath={"/static/img/flags"}
                  />
                </IconButton>
                <IconButton color="inherit" onClick={handleThemesOpen}>
                  <ThemeIcon />
                </IconButton>
                <div className={classes.grow} />
                {props.isAuthenticated && (
                  <IconButton color="inherit" onClick={handleSignOut}>
                    <LogoutIcon />
                  </IconButton>
                )}
              </Hidden>
            </Toolbar>
            <Inbox anchor={anchorInbox} onClose={handleMenuClose} />
            <Locales anchor={anchorLocales} onClose={handleMenuClose} />
            <Themes anchor={anchorThemes} onClose={handleMenuClose} />
          </AppBar>
        </div>
        {props.withShadow && (
          <React.Fragment>
            <Hidden mdDown initialWidth="lg">
              <Shadow isDesktop={true} width={barWidth} />
            </Hidden>
            <Hidden lgUp initialWidth="lg">
              <Shadow isDesktop={false} width={barWidth} />
            </Hidden>
          </React.Fragment>
        )}
      </div>
    </ClickAwayListener>
  );
}

HeaderBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  withShadow: PropTypes.bool.isRequired,
  onSidebarToggle: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default HeaderBar;
