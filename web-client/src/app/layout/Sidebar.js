import React, { useContext, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useIntl, FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FormsIcon from "@material-ui/icons/Ballot";
import ChartsIcon from "@material-ui/icons/InsertChart";
import TablesIcon from "@material-ui/icons/TableChart";
import MapsIcon from "@material-ui/icons/Map";
import NotificationsIcon from "@material-ui/icons/SpeakerNotes";
import TypographyIcon from "@material-ui/icons/BrightnessAuto";
import IconsIcon from "@material-ui/icons/Pets";
import UsersIcon from "@material-ui/icons/People";
import constants from "../../../common/constants";
import { appSelectors, appOperations } from "../../app/state";
import { UserContext } from "../providers/User";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch",
    alignItems: props => (props.pwa ? "center" : "stretch")
  },
  grow: {
    flex: 1
  },
  linkWrapper: {
    paddingTop: props => (props.pwa ? 20 : undefined)
  },
  link: {
    display: "block",
    margin: "1rem",
    textAlign: "center",
    color: theme.sidebar.color,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.main
    }
  },
  list: {
    width: props => (props.pwa ? 200 : undefined)
  },
  avatar: {
    paddingBottom: props => (props.pwa ? 30 : undefined),
    margin: "2rem 0 1rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: theme.sidebar.color,
    "& img": {
      width: 160,
      height: 160,
      borderRadius: theme.shape.borderRadius
    }
  },
  item: {
    background: [theme.sidebar.itemBackground, "!important"],
    color: [theme.sidebar.itemColor, "!important"],
    borderTop: ["none", "!important"],
    borderLeft: [theme.sidebar.itemBorder, "!important"],
    borderRight: ["none", "!important"],
    borderBottom: ["none", "!important"],
    justifyContent: "center",
    "& svg, & span": {
      color: [theme.sidebar.itemColor, "!important"]
    },
    "&:hover": {
      background: [theme.sidebar.itemHoverBackground, "!important"],
      color: [theme.sidebar.itemHoverColor, "!important"],
      borderTop: ["none", "!important"],
      borderLeft: [theme.sidebar.itemHoverBorder, "!important"],
      borderRight: ["none", "!important"],
      borderBottom: ["none", "!important"],
      "& svg, & span": {
        color: [theme.sidebar.itemHoverColor, "!important"]
      }
    }
  },
  itemSelected: {
    background: [theme.sidebar.itemSelectedBackground, "!important"],
    color: [theme.sidebar.itemSelectedColor, "!important"],
    borderTop: ["none", "!important"],
    borderLeft: [theme.sidebar.itemSelectedBorder, "!important"],
    borderRight: ["none", "!important"],
    borderBottom: ["none", "!important"],
    "& svg, & span": {
      color: [theme.sidebar.itemSelectedColor, "!important"]
    },
    "&:hover": {
      background: [theme.sidebar.itemSelectedHoverBackground, "!important"],
      color: [theme.sidebar.itemSelectedHoverColor, "!important"],
      borderTop: ["none", "!important"],
      borderLeft: [theme.sidebar.itemSelectedHoverBorder, "!important"],
      borderRight: ["none", "!important"],
      borderBottom: ["none", "!important"],
      "& svg, & span": {
        color: [theme.sidebar.itemSelectedHoverColor, "!important"]
      }
    }
  }
}));

function Sidebar(props) {
  const classes = useStyles(props);
  const intl = useIntl();
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useContext(UserContext);

  const apiServer = useSelector(state => appSelectors.getApiServer(state));

  const handleLoginClick = useCallback(
    () => dispatch(appOperations.showAuthModal()),
    [dispatch]
  );

  const handleMenuClick = useCallback(
    (path, asPath) => {
      router.push(path, asPath);
      props.onMenuClick();
    },
    [router, props.onMenuClick]
  );

  const handleRedirectClick = useCallback(
    () => window.open(apiServer + constants.apiBase + "/redirect/github"),
    [apiServer]
  );

  const handleBenchmarksClick = useCallback(
    () => window.open(apiServer + constants.apiBase + "/redirect/benchmarks"),
    [apiServer]
  );

  const handleResponsivenessClick = useCallback(
    () =>
      window.open(apiServer + constants.apiBase + "/redirect/responsiveness"),
    [apiServer]
  );

  const { isAuthenticated, userId, name, email } = user;

  const header = useMemo(() => {
    return (
      <div className={classes.avatar}>
        <img
          alt="Avatar"
          src={
            isAuthenticated && userId
              ? apiServer +
                constants.apiBase +
                "/avatars/" +
                userId +
                "?size=large"
              : "/static/img/anonymous.png"
          }
        />
        <Typography variant="subtitle1" color="inherit">
          {(isAuthenticated && (name || email)) || "Anonymous"}
        </Typography>
        {!isAuthenticated && (
          <Button variant="contained" onClick={handleLoginClick}>
            <FormattedMessage id="SIDEBAR_LOGIN_BUTTON" />
          </Button>
        )}
      </div>
    );
  }, [
    classes,
    isAuthenticated,
    userId,
    name,
    email,
    apiServer,
    handleLoginClick
  ]);

  const renderItem = path => {
    const { page, icon, menu, isAllowed } = constants.pages[path] || {};
    if (!page || !icon || !menu) return null;
    if (typeof isAllowed === "function" && !isAllowed(user)) return null;

    return (
      <MenuItem
        key={`page-${path}`}
        classes={{
          root: classes.item,
          selected: classes.itemSelected
        }}
        selected={router.asPath === path}
        onClick={() => handleMenuClick(page, path)}
      >
        <ListItemIcon>
          <>
            {icon === "dashboard" && <DashboardIcon />}
            {icon === "forms" && <FormsIcon />}
            {icon === "charts" && <ChartsIcon />}
            {icon === "tables" && <TablesIcon />}
            {icon === "maps" && <MapsIcon />}
            {icon === "notifications" && <NotificationsIcon />}
            {icon === "typography" && <TypographyIcon />}
            {icon === "icons" && <IconsIcon />}
            {icon === "users" && <UsersIcon />}
          </>
        </ListItemIcon>

        <ListItemText primary={intl.formatMessage({ id: menu })} />
      </MenuItem>
    );
  };

  return (
    <div className={classes.root}>
      <MenuList classes={{ root: classes.list }} subheader={header}>
        {Object.keys(constants.pages).map(path => renderItem(path))}
      </MenuList>

      <div className={classes.grow} />

      <div className={classes.linkWrapper}>
        <Link className={classes.link} onClick={handleRedirectClick}>
          <FormattedMessage id="SIDEBAR_GITHUB_LINK" />
        </Link>
        <Link className={classes.link} onClick={handleBenchmarksClick}>
          <FormattedMessage id="SIDEBAR_BENCHMARKS_LINK" />
        </Link>
        <Link className={classes.link} onClick={handleResponsivenessClick}>
          <FormattedMessage id="SIDEBAR_RESPONSIVENESS_LINK" />
        </Link>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  pwa: PropTypes.bool,
  onMenuClick: PropTypes.func.isRequired
};

export default Sidebar;
