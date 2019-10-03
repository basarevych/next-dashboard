import React from "react";
import { FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chart1 from "./Charts/Chart1";
import Chart2 from "./Charts/Chart2";
import Chart3 from "./Charts/Chart3";
import Chart4 from "./Charts/Chart4";
import Chart5 from "./Charts/Chart5";
import Chart6 from "./Charts/Chart6";

const useStyles = makeStyles(theme => ({
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
}));

function ChartsPage(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.layout}>
      <Typography variant="h3" color="inherit" className={classes.title}>
        <FormattedMessage id="TITLE_CHARTS" />
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Chart1 className={classes.paper} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Chart2 className={classes.paper} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Chart3 className={classes.paper} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Chart4 className={classes.paper} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Chart5 className={classes.paper} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Chart6 className={classes.paper} />
        </Grid>
      </Grid>
    </div>
  );
}

export default ChartsPage;
