import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Flag from "react-flags";
import l10n from "../../../../common/locales";
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

function Locales(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const handleLocaleSwitch = locale => {
    props.onClose();
    dispatch(appOperations.setCookie({ name: "locale", value: locale }));
    dispatch(appOperations.setLocale({ locale }));
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
      {l10n.locales.map(locale => (
        <MenuItem
          key={`locale-${locale}`}
          onClick={() => handleLocaleSwitch(locale)}
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

Locales.propTypes = {
  anchor: PropTypes.object,
  onClose: PropTypes.func.isRequired
};

export default Locales;
