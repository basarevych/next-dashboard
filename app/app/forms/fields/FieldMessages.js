import React from "react";
import PropTypes from "prop-types";
import { intlShape } from "react-intl";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import ErrorIcon from "@material-ui/icons/ErrorOutlined";

export const styles = theme => ({
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
});

class ErrorMessage extends React.PureComponent {
  static propTypes = {
    intl: intlShape.isRequired,
    classes: PropTypes.object.isRequired,
    messages: PropTypes.array,
    errors: PropTypes.array
  };

  render() {
    let list = [];
    if (this.props.messages) {
      list = list.concat(
        _.map(this.props.messages, item => ({ message: item }))
      );
    }
    if (this.props.errors)
      list = list.concat(_.map(this.props.errors, item => ({ error: item })));
    return (
      <List classes={{ root: this.props.classes.list }}>
        {_.map(list, (item, index) => (
          <ListItem
            key={`message-${index}`}
            classes={{ root: this.props.classes.listItem }}
          >
            <ListItemIcon>
              {item.message ? (
                <InfoIcon className={this.props.classes.info} />
              ) : (
                <ErrorIcon className={this.props.classes.info} />
              )}
            </ListItemIcon>
            <ListItemText
              classes={{ primary: this.props.classes.info }}
              primary={this.props.intl.formatMessage({
                id: item.message ? item.message : item.error
              })}
            />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default ErrorMessage;
