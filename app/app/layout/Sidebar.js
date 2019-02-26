import React from "react";
import PropTypes from "prop-types";
import { intlShape, FormattedMessage } from "react-intl";
import md5 from "js-md5";
import Typography from "@material-ui/core/Typography";
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
import isRouteAllowed from "../../../common/isRouteAllowed";

export const styles = theme => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch"
  },
  grow: {
    flex: 1
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
    padding: 0
  },
  avatar: {
    margin: "2rem 0 1rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: theme.sidebar.color
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
});

class Sidebar extends React.Component {
  static propTypes = {
    router: PropTypes.object.isRequired,
    intl: intlShape.isRequired,
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    roles: PropTypes.array.isRequired,
    onMenuClick: PropTypes.func.isRequired
  };

  handleMenuClick(path) {
    this.props.router.push(path);
    this.props.onMenuClick();
  }

  renderHeader() {
    return (
      <div className={this.props.classes.avatar}>
        <img
          src={`${constants.apiBase}/avatars/0?h=${md5(this.props.email)}`}
        />
        <Typography variant="subtitle1" color="inherit">
          {this.props.name}
        </Typography>
      </div>
    );
  }

  renderItem(path) {
    if (
      !path ||
      !constants.pages[path] ||
      !isRouteAllowed(path, this.props.roles)
    ) {
      return null;
    }

    const { icon, menu } = constants.pages[path];
    if (!icon && !menu) return null;

    return (
      <MenuItem
        key={`page-${path}`}
        classes={{
          root: this.props.classes.item,
          selected: this.props.classes.itemSelected
        }}
        selected={this.props.router.pathname === path}
        onClick={() => this.handleMenuClick(path)}
      >
        {icon === "dashboard" && (
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
        )}
        {icon === "forms" && (
          <ListItemIcon>
            <FormsIcon />
          </ListItemIcon>
        )}
        {icon === "charts" && (
          <ListItemIcon>
            <ChartsIcon />
          </ListItemIcon>
        )}
        {icon === "tables" && (
          <ListItemIcon>
            <TablesIcon />
          </ListItemIcon>
        )}
        {icon === "maps" && (
          <ListItemIcon>
            <MapsIcon />
          </ListItemIcon>
        )}
        {icon === "notifications" && (
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
        )}
        {icon === "typography" && (
          <ListItemIcon>
            <TypographyIcon />
          </ListItemIcon>
        )}
        {icon === "icons" && (
          <ListItemIcon>
            <IconsIcon />
          </ListItemIcon>
        )}
        {icon === "users" && (
          <ListItemIcon>
            <UsersIcon />
          </ListItemIcon>
        )}

        {!!menu && (
          <ListItemText primary={this.props.intl.formatMessage({ id: menu })} />
        )}
      </MenuItem>
    );
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <MenuList
          classes={{ root: this.props.classes.list }}
          subheader={this.renderHeader()}
        >
          {_.map(_.keys(constants.pages), path => this.renderItem(path))}
        </MenuList>
        <div className={this.props.classes.grow} />
        <div>
          <a
            href="javascript:void(0)"
            className={this.props.classes.link}
            onClick={() => window.open(`${constants.apiBase}/redirect/github`)}
          >
            <FormattedMessage id="SIDEBAR_GITHUB_LINK" />
          </a>
          <a
            href="javascript:void(0)"
            className={this.props.classes.link}
            onClick={() =>
              window.open(`${constants.apiBase}/redirect/benchmarks`)
            }
          >
            <FormattedMessage id="SIDEBAR_BENCHMARKS_LINK" />
          </a>
          <a
            href="javascript:void(0)"
            className={this.props.classes.link}
            onClick={() =>
              window.open(`${constants.apiBase}/redirect/responsiveness`)
            }
          >
            <FormattedMessage id="SIDEBAR_RESPONSIVENESS_LINK" />
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
