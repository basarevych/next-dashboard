import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ThemeIcon from "@material-ui/icons/ColorLens";
import themes from "../../../../styles/themes";
import { appOperations } from "../../state";

const useStyles = makeStyles(theme => ({
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
}));

function Themes(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const handleThemeSwitch = theme => {
    props.onClose();
    dispatch(appOperations.setCookie({ name: "theme", value: theme }));
    dispatch(appOperations.setTheme({ theme }));
  };

  return (
    <Menu
      classes={{ paper: classes.menu }}
      anchorEl={props.anchor}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={!!props.anchor}
      onClose={props.onClose}
    >
      {_.map(themes.names, theme => (
        <MenuItem
          key={`theme-${theme}`}
          onClick={() => handleThemeSwitch(theme)}
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

Themes.propTypes = {
  anchor: PropTypes.object,
  onClose: PropTypes.func.isRequired
};

export default Themes;
