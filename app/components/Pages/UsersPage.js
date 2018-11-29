import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Users from "../../containers/Users";

const styles = theme => ({
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.main.spacing
  }
});

class UsersPage extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  };

  render() {
    if (!this.props.isAuthenticated) return null;

    return (
      <div className={this.props.classes.layout}>
        <Grid container spacing={this.props.theme.main.spacing}>
          <Grid item xs={12}>
            <Users />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(UsersPage);
