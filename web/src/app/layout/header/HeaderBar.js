import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { intlShape, FormattedMessage } from "react-intl";
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
import Inbox from "./InboxContainer";
import Locales from "./LocalesContainer";
import Themes from "./ThemesContainer";
import Shadow from "./ShadowContainer";

export const styles = theme => ({
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
});

class HeaderBar extends React.Component {
  static propTypes = {
    intl: intlShape,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    locale: PropTypes.string.isRequired,
    apiServer: PropTypes.string.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isVisible: PropTypes.bool.isRequired,
    withShadow: PropTypes.bool.isRequired,
    onSidebarToggle: PropTypes.func.isRequired,
    onSignOut: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      barHeight: 0,
      barWidth: 0,
      anchorInbox: null,
      anchorLocales: null,
      anchorThemes: null
    };

    this.isDestroyed = false;

    this.bar = React.createRef();

    this.onResize = this.onResize.bind(this);
    this.handleInboxOpen = this.handleInboxOpen.bind(this);
    this.handleLocalesOpen = this.handleLocalesOpen.bind(this);
    this.handleThemesOpen = this.handleThemesOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    if (this.bar.current) {
      this.setState({
        barHeight: this.bar.current.offsetHeight,
        barWidth: this.bar.current.offsetWidth
      });
    }
    window.addEventListener("resize", this.onResize);
    window.addEventListener("orientationchange", this.onResize);
  }

  componentDidUpdate() {
    if (
      this.bar.current &&
      (this.state.barHeight !== this.bar.current.offsetHeight ||
        this.state.barWidth !== this.bar.current.offsetWidth)
    ) {
      setTimeout(() => {
        if (!this.isDestroyed && this.bar.current) {
          this.setState({
            barHeight: this.bar.current.offsetHeight,
            barWidth: this.bar.current.offsetWidth
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.isDestroyed = true;
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("orientationchange", this.onResize);
  }

  onResize() {
    this.forceUpdate();
  }

  handleInboxOpen(event) {
    this.setState({ anchorInbox: event.currentTarget });
  }

  handleLocalesOpen(event) {
    this.setState({ anchorLocales: event.currentTarget });
  }

  handleThemesOpen(event) {
    this.setState({ anchorThemes: event.currentTarget });
  }

  handleMenuClose() {
    this.setState({
      anchorInbox: null,
      anchorLocales: null,
      anchorThemes: null
    });
    this.props.onClose();
  }

  handleProfile() {
    Router.push("/auth/profile");
    this.handleMenuClose();
  }

  handleSignOut() {
    this.props.onSignOut();
    this.handleMenuClose();
  }

  render() {
    const isVisible =
      this.props.isVisible ||
      this.state.anchorInbox ||
      this.state.anchorLocales ||
      this.state.anchorThemes;

    return (
      <ClickAwayListener onClickAway={this.handleMenuClose}>
        <div
          className={this.props.classes.barContainer}
          style={{
            transform: `translate3d(0, ${
              isVisible
                ? "0"
                : `-${
                    this.state.barHeight
                      ? this.state.barHeight - 2 + "px"
                      : "100%"
                  }`
            }, 0)`
          }}
        >
          <div ref={this.bar}>
            <AppBar
              className={this.props.classes.bar}
              elevation={0}
              position="static"
              color="primary"
            >
              <Toolbar>
                <Hidden xsDown>
                  <Button
                    color="inherit"
                    className={this.props.classes.barItem}
                    onClick={this.handleInboxOpen}
                  >
                    <Badge badgeContent={4} color="secondary">
                      <MailIcon />
                    </Badge>
                    &nbsp;&nbsp;
                    <FormattedMessage id="HEADER_INBOX_LABEL" />
                  </Button>
                  {!this.props.isAuthenticated && (
                    <Tooltip
                      title={this.props.intl.formatMessage({
                        id: "HEADER_PROFILE_TOOLTIP"
                      })}
                      classes={{ tooltip: this.props.classes.tooltip }}
                    >
                      <Button
                        color="inherit"
                        className={this.props.classes.barItem}
                      >
                        <ProfileIcon />
                        &nbsp;&nbsp;
                        <FormattedMessage id="HEADER_PROFILE_LABEL" />
                      </Button>
                    </Tooltip>
                  )}
                  {this.props.isAuthenticated && (
                    <Button
                      color="inherit"
                      className={this.props.classes.barItem}
                      onClick={this.handleProfile}
                    >
                      <ProfileIcon />
                      &nbsp;&nbsp;
                      <FormattedMessage id="HEADER_PROFILE_LABEL" />
                    </Button>
                  )}
                  <Button
                    color="inherit"
                    className={this.props.classes.barItem}
                    onClick={this.handleLocalesOpen}
                  >
                    <Flag
                      name={l10n.flags[this.props.locale]}
                      format="png"
                      pngSize={24}
                      basePath={"/static/img/flags"}
                    />
                    &nbsp;&nbsp;
                    {_.upperCase(this.props.locale)}
                  </Button>
                  <Button
                    color="inherit"
                    className={this.props.classes.barItem}
                    onClick={this.handleThemesOpen}
                  >
                    <ThemeIcon />
                    &nbsp;&nbsp;
                    <FormattedMessage
                      id={
                        "THEME_" + _.upperCase(this.props.theme.name) + "_MENU"
                      }
                    />
                  </Button>
                  <div className={this.props.classes.grow} />
                  <div className={this.props.classes.search}>
                    <div className={this.props.classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: this.props.classes.inputRoot,
                        input: this.props.classes.inputInput
                      }}
                    />
                  </div>
                  <div className={this.props.classes.grow} />
                  {this.props.isAuthenticated && (
                    <IconButton color="inherit" onClick={this.handleSignOut}>
                      <LogoutIcon />
                    </IconButton>
                  )}
                </Hidden>
                <Hidden smUp>
                  <IconButton
                    color="inherit"
                    onClick={this.props.onSidebarToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                  <IconButton color="inherit" onClick={this.handleInboxOpen}>
                    <Badge badgeContent={4} color="secondary">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                  {!this.props.isAuthenticated && (
                    <Tooltip
                      title={this.props.intl.formatMessage({
                        id: "HEADER_PROFILE_TOOLTIP"
                      })}
                      classes={{ tooltip: this.props.classes.tooltip }}
                    >
                      <IconButton color="inherit">
                        <ProfileIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  {this.props.isAuthenticated && (
                    <IconButton color="inherit" onClick={this.handleProfile}>
                      <ProfileIcon />
                    </IconButton>
                  )}
                  <IconButton color="inherit" onClick={this.handleLocalesOpen}>
                    <Flag
                      name={l10n.flags[this.props.locale]}
                      format="png"
                      pngSize={24}
                      basePath={"/static/img/flags"}
                    />
                  </IconButton>
                  <IconButton color="inherit" onClick={this.handleThemesOpen}>
                    <ThemeIcon />
                  </IconButton>
                  <div className={this.props.classes.grow} />
                  {this.props.isAuthenticated && (
                    <IconButton color="inherit" onClick={this.handleSignOut}>
                      <LogoutIcon />
                    </IconButton>
                  )}
                </Hidden>
              </Toolbar>
              <Inbox
                anchor={this.state.anchorInbox}
                onClose={this.handleMenuClose}
              />
              <Locales
                anchor={this.state.anchorLocales}
                onClose={this.handleMenuClose}
              />
              <Themes
                anchor={this.state.anchorThemes}
                onClose={this.handleMenuClose}
              />
            </AppBar>
          </div>
          {this.props.withShadow && (
            <React.Fragment>
              <Hidden mdDown initialWidth="lg">
                <Shadow isDesktop={true} width={this.state.barWidth} />
              </Hidden>
              <Hidden lgUp initialWidth="lg">
                <Shadow isDesktop={false} width={this.state.barWidth} />
              </Hidden>
            </React.Fragment>
          )}
        </div>
      </ClickAwayListener>
    );
  }
}

export default HeaderBar;
