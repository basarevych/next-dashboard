import React from "react";
import PropTypes from "prop-types";
import { intlShape } from "react-intl";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import constants from "../../../../common/constants";
import moment from "../../../../common/src/moment";

export const styles = theme => ({
  menu: {
    width: "100%",
    maxWidth: theme.spacing(45),
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
    height: 60,
    marginRight: "1rem"
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

class Inbox extends React.Component {
  static propTypes = {
    intl: intlShape,
    classes: PropTypes.object.isRequired,
    apiServer: PropTypes.string.isRequired,
    anchor: PropTypes.object,
    onClose: PropTypes.func.isRequired
  };

  render() {
    return (
      <Menu
        classes={{ paper: this.props.classes.menu }}
        anchorEl={this.props.anchor}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        open={!!this.props.anchor}
        onClose={this.props.onClose}
      >
        <MenuItem
          className={this.props.classes.menuItem}
          onClick={this.props.onClose}
        >
          <ListItemAvatar>
            <Avatar
              className={this.props.classes.inboxAvatar}
              alt="Mitch Stigall"
              src={
                this.props.apiServer +
                constants.apiBase +
                "/avatars/x0?size=small&t=" +
                Date.now()
              }
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
          />
        </MenuItem>
        <MenuItem
          className={this.props.classes.menuItem}
          onClick={this.props.onClose}
        >
          <ListItemAvatar>
            <Avatar
              className={this.props.classes.inboxAvatar}
              alt="Marie Wineinger"
              src={
                this.props.apiServer +
                constants.apiBase +
                "/avatars/x1?size=small&t=" +
                Date.now()
              }
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
          />
        </MenuItem>
        <MenuItem
          className={this.props.classes.menuItem}
          onClick={this.props.onClose}
        >
          <ListItemAvatar>
            <Avatar
              className={this.props.classes.inboxAvatar}
              alt="Ted Eriksson"
              src={
                this.props.apiServer +
                constants.apiBase +
                "/avatars/x2?size=small&t=" +
                Date.now()
              }
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
          />
        </MenuItem>
        <MenuItem
          className={this.props.classes.menuItem}
          onClick={this.props.onClose}
        >
          <ListItemAvatar>
            <Avatar
              className={this.props.classes.inboxAvatar}
              alt="Martin Murry"
              src={
                this.props.apiServer +
                constants.apiBase +
                "/avatars/x3?size=small&t=" +
                Date.now()
              }
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
          />
        </MenuItem>
      </Menu>
    );
  }
}

export default Inbox;
