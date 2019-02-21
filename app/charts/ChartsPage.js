import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Chart1 from "./Charts/Chart1";
import Chart2 from "./Charts/Chart2";
import Chart3 from "./Charts/Chart3";
import Chart4 from "./Charts/Chart4";
import Chart5 from "./Charts/Chart5";
import Chart6 from "./Charts/Chart6";

export const styles = theme => ({
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.main.spacing
  },
  paper: {
    background: theme.main.paper
  }
});

class ChartsPage extends React.Component {
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
          <Grid item xs={12} md={6} lg={4}>
            <Chart1 className={this.props.classes.paper} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Chart2 className={this.props.classes.paper} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Chart3 className={this.props.classes.paper} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Chart4 className={this.props.classes.paper} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Chart5 className={this.props.classes.paper} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Chart6 className={this.props.classes.paper} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ChartsPage;
