import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { intlShape, FormattedMessage } from "react-intl";
import { fade, lighten } from "@material-ui/core/styles/colorManipulator";
import Tooltip from "@material-ui/core/Tooltip";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import ProfileIcon from "@material-ui/icons/AccountBox";
import ThemeIcon from "@material-ui/icons/ColorLens";
import LogoutIcon from "@material-ui/icons/PowerSettingsNew";
import Flag from "react-flags";
import l10n from "../../../common/locales";
import themes from "../../../common/themes";
import moment from "../../../common/moment";
import constants from "../../../common/constants";

export const styles = theme => ({
  spacer: {
    height: "2rem"
  },
  wrapper: {
    zIndex: 1400,
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    height: 50
  },
  smallWrapper: {
    zIndex: 1400,
    flex: 1,
    alignSelf: "stretch"
  },
  barContainer: {
    transition: "all 0.25s ease-in-out"
  },
  bar: {
    background: theme.palette.primary.main,
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
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit
  },
  searchIcon: {
    width: theme.spacing.unit * 5,
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
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 5,
    transition: theme.transitions.create("width"),
    width: 300,
    [theme.breakpoints.down("md")]: {
      width: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing.unit
    }
  },
  menu: {
    width: "100%",
    maxWidth: theme.spacing.unit * 45,
    background: lighten(theme.palette.background.paper, 0.1),
    "& svg": {
      color: [theme.palette.text.primary, "!important"]
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      maxWidth: "90%"
    }
  },
  menuItem: {
    height: "auto"
  },
  inboxAvatar: {
    width: 60,
    height: 60
  },
  inboxName: {
    fontSize: "120%"
  },
  inboxDate: {
    fontSize: "80%"
  },
  inboxPreview: {
    display: "inline",
    whiteSpace: "normal"
  },
  tooltip: {
    fontSize: ["1em", "!important"]
  }
});

class Header extends React.Component {
  static propTypes = {
    intl: intlShape,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    locale: PropTypes.string.isRequired,
    isAnonymous: PropTypes.bool.isRequired,
    onSidebarToggle: PropTypes.bool.isRequired,
    onSetCookie: PropTypes.func.isRequired,
    onSetLocale: PropTypes.func.isRequired,
    onSignOut: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      isWrapperHovered: false,
      isBarHovered: false,
      barHeight: 0,
      barWidth: 0,
      anchorInbox: null,
      anchorLocales: null,
      anchorThemes: null
    };

    this.isDestroyed = false;

    this.bar = React.createRef();

    this.onResize = this.onResize.bind(this);

    this.handleWrapperMouseEnter = this.handleWrapperMouseEnter.bind(this);
    this.handleWrapperMouseLeave = this.handleWrapperMouseLeave.bind(this);
    this.handleWrapperClick = this.handleWrapperClick.bind(this);
    this.handleBarMouseEnter = this.handleBarMouseEnter.bind(this);
    this.handleBarMouseLeave = this.handleBarMouseLeave.bind(this);
    this.handleInboxOpen = this.handleInboxOpen.bind(this);
    this.handleLocalesOpen = this.handleLocalesOpen.bind(this);
    this.handleThemesOpen = this.handleThemesOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
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
      this.setState({
        barHeight: this.bar.current.offsetHeight,
        barWidth: this.bar.current.offsetWidth
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

  handleWrapperMouseEnter() {
    if (!this.state.isWrapperHovered) this.setState({ isWrapperHovered: true });
  }

  handleWrapperMouseLeave() {
    if (this.state.isWrapperHovered) this.setState({ isWrapperHovered: false });
  }

  handleWrapperClick(event) {
    event.stopPropagation();
    if (!this.state.isWrapperHovered) this.setState({ isWrapperHovered: true });
    const onWindowClick = () => {
      window.removeEventListener("click", onWindowClick);
      if (!this.isDestroyed && this.state.isWrapperHovered)
        this.setState({ isWrapperHovered: false });
    };
    window.addEventListener("click", onWindowClick);
  }

  handleBarMouseEnter() {
    if (!this.state.isBarHovered) this.setState({ isBarHovered: true });
  }

  handleBarMouseLeave() {
    if (this.state.isBarHovered) this.setState({ isBarHovered: false });
  }

  handleInboxOpen(event) {
    this.setState({ anchorInbox: event.currentTarget });
  }

  handleLocalesOpen(event) {
    this.setState({ anchorLocales: event.currentTarget });
  }

  handleLocaleSwitch(locale) {
    this.props.onSetCookie("locale", locale);
    this.handleMenuClose();
    this.props.onSetLocale(locale);
  }

  handleThemesOpen(event) {
    this.setState({ anchorThemes: event.currentTarget });
  }

  handleThemeSwitch(theme) {
    this.props.onSetCookie("theme", theme);
    this.handleMenuClose();
    window.location.reload(true);
  }

  handleMenuClose() {
    this.setState({
      anchorInbox: null,
      anchorLocales: null,
      anchorThemes: null,
      isWrapperHovered: false,
      isBarHovered: false
    });
  }

  handleSignOut() {
    this.props.onSignOut();
  }

  renderInbox() {
    return (
      <Menu
        classes={{ paper: this.props.classes.menu }}
        anchorEl={this.state.anchorInbox}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        open={!!this.state.anchorInbox}
        onClose={this.handleMenuClose}
      >
        <MenuItem
          className={this.props.classes.menuItem}
          onClick={this.handleMenuClose}
        >
          <ListItemAvatar>
            <Avatar
              className={this.props.classes.inboxAvatar}
              alt="Mitch Stigall"
              src={`${constants.apiBase}/avatars/1`}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <div className={this.props.classes.inboxName}>
                  Mitch Stigall
                </div>
                <div className={this.props.classes.inboxDate}>
                  {this.props.intl.formatDate(
                    moment("2030-03-21 09:31:40").toDate(),
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric"
                    }
                  )}
                </div>
              </React.Fragment>
            }
            secondary={
              <span className={this.props.classes.inboxPreview}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            }
          />{" "}
        </MenuItem>
        <MenuItem
          className={this.props.classes.menuItem}
          onClick={this.handleMenuClose}
        >
          <ListItemAvatar>
            <Avatar
              className={this.props.classes.inboxAvatar}
              alt="Marie Wineinger"
              src={`${constants.apiBase}/avatars/2`}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <div className={this.props.classes.inboxName}>
                  Marie Wineinger
                </div>
                <div className={this.props.classes.inboxDate}>
                  {this.props.intl.formatDate(
                    moment("2030-03-21 10:03:12").toDate(),
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric"
                    }
                  )}
                </div>
              </React.Fragment>
            }
            secondary={
              <span className={this.props.classes.inboxPreview}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            }
          />{" "}
        </MenuItem>
        <MenuItem
          className={this.props.classes.menuItem}
          onClick={this.handleMenuClose}
        >
          <ListItemAvatar>
            <Avatar
              className={this.props.classes.inboxAvatar}
              alt="Ted Eriksson"
              src={`${constants.apiBase}/avatars/3`}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <div className={this.props.classes.inboxName}>Ted Eriksson</div>
                <div className={this.props.classes.inboxDate}>
                  {this.props.intl.formatDate(
                    moment("2030-03-21 10:27:42").toDate(),
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric"
                    }
                  )}
                </div>
              </React.Fragment>
            }
            secondary={
              <span className={this.props.classes.inboxPreview}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            }
          />{" "}
        </MenuItem>
        <MenuItem
          className={this.props.classes.menuItem}
          onClick={this.handleMenuClose}
        >
          <ListItemAvatar>
            <Avatar
              className={this.props.classes.inboxAvatar}
              alt="Martin Murry"
              src={`${constants.apiBase}/avatars/4`}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <div className={this.props.classes.inboxName}>Martin Murry</div>
                <div className={this.props.classes.inboxDate}>
                  {this.props.intl.formatDate(
                    moment("2030-03-21 11:35:09").toDate(),
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric"
                    }
                  )}
                </div>
              </React.Fragment>
            }
            secondary={
              <span className={this.props.classes.inboxPreview}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            }
          />{" "}
        </MenuItem>
      </Menu>
    );
  }

  renderLocales() {
    return (
      <Menu
        classes={{ paper: this.props.classes.menu }}
        anchorEl={this.state.anchorLocales}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        open={!!this.state.anchorLocales}
        onClose={this.handleMenuClose}
      >
        {_.map(l10n.locales, locale => (
          <MenuItem
            key={`locale-${locale}`}
            onClick={() => this.handleLocaleSwitch(locale)}
          >
            <ListItemIcon>
              <Flag
                name={l10n.flags[locale]}
                format="png"
                pngSize={24}
                basePath={process.env.APP_STATIC + "/static/img/flags"}
              />
            </ListItemIcon>
            <ListItemText>{l10n.names[locale]}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    );
  }

  renderThemes() {
    return (
      <Menu
        classes={{ paper: this.props.classes.menu }}
        anchorEl={this.state.anchorThemes}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        open={!!this.state.anchorThemes}
        onClose={this.handleMenuClose}
      >
        {_.map(_.keys(themes.names), theme => (
          <MenuItem
            key={`theme-${theme}`}
            onClick={() => this.handleThemeSwitch(theme)}
          >
            <ListItemIcon>
              <ThemeIcon />
            </ListItemIcon>
            <ListItemText>{themes.names[theme]}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    );
  }

  renderShadow(isLong = true) {
    let boundary =
      (isLong
        ? this.props.theme.sidebar.computerWidth
        : this.props.theme.sidebar.tabletWidth) * this.props.theme.spacing.unit;
    return (
      <svg
        key={`shadow-${this.state.barWidth}`}
        xmlns="http://www.w3.org/2000/svg"
        width={this.state.barWidth}
        height="30"
      >
        <defs>
          <clipPath id="appBarClipLeft">
            <rect x="0" y="0" width={boundary} height="30" />
          </clipPath>
          <filter
            id="appBarShadowLeft"
            x="-10"
            y="-10"
            width={this.state.barWidth + 20}
            height="60"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
            <feOffset dx="0" dy="2" result="offsetblur" />
            <feFlood floodColor="rgba(0, 0, 0, 0.9)" />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <clipPath id="appBarClipRight">
            <rect
              x={boundary}
              y="0"
              width={this.state.barWidth - boundary}
              height="30"
            />
          </clipPath>
          <filter
            id="appBarShadowRight"
            x="-10"
            y="-10"
            width={this.state.barWidth + 20}
            height="60"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
            <feOffset dx="0" dy="2" result="offsetblur" />
            <feFlood floodColor="rgba(0, 0, 0, 0.5)" />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g clipPath="url(#appBarClipLeft)">
          <rect
            x="-10"
            y="-16"
            width={boundary + 20}
            height="20"
            fill={this.props.theme.palette.secondary.main}
            filter="url(#appBarShadowLeft)"
          />
        </g>
        <g clipPath="url(#appBarClipRight)">
          <rect
            x={boundary - 10}
            y="-16"
            width={this.state.barWidth - boundary + 20}
            height="20"
            fill={this.props.theme.palette.secondary.main}
            filter="url(#appBarShadowRight)"
          />
        </g>
      </svg>
    );
  }

  renderBar(isPermanent) {
    const isVisible =
      isPermanent || this.state.isWrapperHovered || this.state.isBarHovered;

    return (
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
            color={isVisible ? "primary" : "secondary"}
            onMouseEnter={this.handleBarMouseEnter}
            onMouseLeave={this.handleBarMouseLeave}
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
                {this.props.isAnonymous && (
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
                {!this.props.isAnonymous && (
                  <Button
                    color="inherit"
                    className={this.props.classes.barItem}
                    onClick={() => Router.push("/auth/profile")}
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
                    basePath={process.env.APP_STATIC + "/static/img/flags"}
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
                  {_.upperFirst(this.props.theme.name)}
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
                <IconButton color="inherit" onClick={this.handleSignOut}>
                  <LogoutIcon />
                </IconButton>
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
                <IconButton color="inherit">
                  <ProfileIcon />
                </IconButton>
                <IconButton color="inherit" onClick={this.handleLocalesOpen}>
                  <Flag
                    name={l10n.flags[this.props.locale]}
                    format="png"
                    pngSize={24}
                    basePath={process.env.APP_STATIC + "/static/img/flags"}
                  />
                </IconButton>
                <IconButton color="inherit" onClick={this.handleThemesOpen}>
                  <ThemeIcon />
                </IconButton>
                <div className={this.props.classes.grow} />
                <IconButton color="inherit" onClick={this.handleSignOut}>
                  <LogoutIcon />
                </IconButton>
              </Hidden>
            </Toolbar>
            {this.renderInbox()}
            {this.renderLocales()}
            {this.renderThemes()}
          </AppBar>
        </div>
        {!isPermanent && (
          <React.Fragment>
            <Hidden mdDown>{this.renderShadow(true)}</Hidden>
            <Hidden lgUp>{this.renderShadow(false)}</Hidden>
          </React.Fragment>
        )}
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Hidden smUp initialWidth="lg">
          <div
            className={this.props.classes.smallWrapper}
            style={{ height: this.state.height }}
          >
            {this.renderBar(true)}
          </div>
        </Hidden>
        <Hidden xsDown initialWidth="lg">
          <div
            className={this.props.classes.wrapper}
            onMouseEnter={this.handleWrapperMouseEnter}
            onMouseLeave={this.handleWrapperMouseLeave}
            onClick={this.handleWrapperClick}
          >
            {this.renderBar(false)}
          </div>
          <div className={this.props.classes.spacer} />
        </Hidden>
      </React.Fragment>
    );
  }
}

export default Header;
