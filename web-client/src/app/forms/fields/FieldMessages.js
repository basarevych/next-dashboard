import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useIntl } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import ErrorIcon from "@material-ui/icons/ErrorOutlined";

const useStyles = makeStyles(theme => ({
  list: {
    padding: 0
  },
  listItem: {
    paddingTop: "0.5rem",
    paddingLeft: "0.5rem",
    paddingRight: 0
  },
  info: {
    color: theme.palette.text.secondary
  },
  error: {
    color: theme.palette.text.secondary
  }
}));

function FieldMessages(props) {
  const classes = useStyles(props);
  const intl = useIntl();

  const list = useMemo(() => {
    let result = [];
    if (props.messages) {
      result = result.concat(
        Array.isArray(props.messages)
          ? props.messages.map(item => ({ message: item }))
          : [{ messages: props.messages }]
      );
    }
    if (props.errors) {
      result = result.concat(
        Array.isArray(props.errors)
          ? props.errors.map(item => ({ error: item }))
          : [{ error: props.errors }]
      );
    }
    return result;
  }, [props.messages, props.errors]);

  return (
    <List classes={{ root: classes.list }}>
      {list.map((item, index) => (
        <ListItem key={`message-${index}`} classes={{ root: classes.listItem }}>
          <ListItemIcon>
            {item.message ? (
              <InfoIcon className={classes.info} />
            ) : (
              <ErrorIcon className={classes.info} />
            )}
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.info }}
            primary={intl.formatMessage({
              id: item.message ? item.message : item.error
            })}
          />
        </ListItem>
      ))}
    </List>
  );
}

FieldMessages.propTypes = {
  messages: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  errors: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
};

export default FieldMessages;
