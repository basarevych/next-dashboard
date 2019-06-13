import React from "react";
import PropTypes from "prop-types";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Flag from "react-flags";
import l10n from "../../../../common/locales";

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

class Locales extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    apiServer: PropTypes.string.isRequired,
    anchor: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    onSetCookie: PropTypes.func.isRequired,
    onSetLocale: PropTypes.func.isRequired
  };

  handleLocaleSwitch(locale) {
    this.props.onClose();
    this.props.onSetCookie("locale", locale);
    this.props.onSetLocale(locale);
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
                basePath={"/static/img/flags"}
              />
            </ListItemIcon>
            <ListItemText>{l10n.names[locale]}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    );
  }
}

export default Locales;
