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
    classes: PropTypes.object.isRequired,
    pageTransitionReadyToEnter: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      isStarted: false
    };

    this.isDestroyed = false;
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.props.pageTransitionReadyToEnter)
        this.props.pageTransitionReadyToEnter();
      setTimeout(() => {
        if (!this.isDestroyed) this.setState({ isStarted: true });
      });
    }, 500);
  }

  componentWillUnmount() {
    this.isDestroyed = true;
  }

  render() {
    const { isStarted } = this.state;

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
              isStarted={isStarted}
              theme={this.props.theme}
              className={this.props.classes.paper}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Chart2
              isStarted={isStarted}
              theme={this.props.theme}
              className={this.props.classes.paper}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Chart3
              isStarted={isStarted}
              theme={this.props.theme}
              className={this.props.classes.paper}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Chart4
              isStarted={isStarted}
              theme={this.props.theme}
              className={this.props.classes.paper}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Chart5
              isStarted={isStarted}
              theme={this.props.theme}
              className={this.props.classes.paper}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Chart6
              isStarted={isStarted}
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
