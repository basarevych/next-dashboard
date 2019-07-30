import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import Typography from "@material-ui/core/Typography";
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
    padding: theme.spacing(2)
  },
  paper: {
    background: theme.main.paper
  },
  title: {
    marginTop: "3rem",
    marginBottom: "1rem"
  }
});

class ChartsDemo extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className={this.props.classes.layout}>
        <Typography
          variant="h3"
          color="inherit"
          className={this.props.classes.title}
        >
          <FormattedMessage id="TITLE_CHARTS" />
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Chart1
              theme={this.props.theme}
              className={this.props.classes.paper}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Chart2
              theme={this.props.theme}
              className={this.props.classes.paper}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Chart3
              theme={this.props.theme}
              className={this.props.classes.paper}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Chart4
              theme={this.props.theme}
              className={this.props.classes.paper}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Chart5
              theme={this.props.theme}
              className={this.props.classes.paper}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Chart6
              theme={this.props.theme}
              className={this.props.classes.paper}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ChartsDemo;
