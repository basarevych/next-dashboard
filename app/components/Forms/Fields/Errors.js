import React from "react";
import PropTypes from "prop-types";
import { List as ImmList } from "immutable";
import { injectIntl, intlShape } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ErrorIcon from "@material-ui/icons/InfoOutlined";

const styles = theme => ({
  errorList: {
    padding: 0
  },
  errorListItem: {
    paddingTop: "0.5rem",
    paddingLeft: "0.5rem",
    paddingRight: 0
  },
  error: {
    color: theme.palette.text.secondary
  }
});

class Errors extends React.PureComponent {
  static propTypes = {
    intl: intlShape.isRequired,
    classes: PropTypes.object.isRequired,
    errors: PropTypes.instanceOf(ImmList).isRequired
  };

  render() {
    return (
      <List classes={{ root: this.props.classes.errorList }}>
        {/* eslint-disable-line */ this.props.errors.map((error, index) => (
          <ListItem
            key={`error-${index}`}
            classes={{ root: this.props.classes.errorListItem }}
          >
            <ListItemIcon>
              <ErrorIcon className={this.props.classes.error} />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: this.props.classes.error }}
              primary={this.props.intl.formatMessage({ id: error })}
            />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default injectIntl(withStyles(styles)(Errors));
