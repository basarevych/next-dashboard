import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ThemeIcon from "@material-ui/icons/ColorLens";
import themes from "../../../../styles/themes";

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
  }
});

class Themes extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    apiServer: PropTypes.string.isRequired,
    anchor: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    onSetCookie: PropTypes.func.isRequired,
    onSetTheme: PropTypes.func.isRequired
  };

  handleThemeSwitch(theme) {
    this.props.onClose();
    this.props.onSetCookie("theme", theme);
    this.props.onSetTheme(theme);
  }

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
        {_.map(themes.names, theme => (
          <MenuItem
            key={`theme-${theme}`}
            onClick={() => this.handleThemeSwitch(theme)}
          >
            <ListItemIcon>
              <ThemeIcon />
            </ListItemIcon>
            <ListItemText>
              <FormattedMessage id={"THEME_" + _.upperCase(theme) + "_LABEL"} />
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    );
  }
}

export default Themes;
