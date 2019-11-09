import React, { useCallback } from "react";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import OpenIcon from "@material-ui/icons/ZoomIn";
import Chart1 from "./charts/Chart1";
import Chart2 from "./charts/Chart2";
import Chart3 from "./charts/Chart3";
import Chart4 from "./charts/Chart4";
import Chart5 from "./charts/Chart5";
import Chart6 from "./charts/Chart6";

const useStyles = makeStyles(theme => ({
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.spacing(2)
  },
  title: {
    marginTop: "3rem",
    marginBottom: "1rem"
  },
  container: {
    position: "relative"
  },
  button: {
    position: "absolute",
    top: 0,
    right: 0
  }
}));

function ChartsPage(props) {
  const classes = useStyles(props);
  const router = useRouter();

  const openChart = useCallback(
    chart => router.push("/charts/[chart]", "/charts/" + chart),
    []
  );

  return (
    <div className={classes.layout}>
      <Typography variant="h3" color="inherit" className={classes.title}>
        <FormattedMessage id="TITLE_CHARTS" />
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4} className={classes.container}>
          <Chart1 />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => openChart(1)}
          >
            <OpenIcon />
          </Button>
        </Grid>
        <Grid item xs={12} md={6} lg={4} className={classes.container}>
          <Chart2 />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => openChart(2)}
          >
            <OpenIcon />
          </Button>
        </Grid>
        <Grid item xs={12} md={6} lg={4} className={classes.container}>
          <Chart3 />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => openChart(3)}
          >
            <OpenIcon />
          </Button>
        </Grid>
        <Grid item xs={12} md={6} lg={4} className={classes.container}>
          <Chart4 />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => openChart(4)}
          >
            <OpenIcon />
          </Button>
        </Grid>
        <Grid item xs={12} md={6} lg={4} className={classes.container}>
          <Chart5 />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => openChart(5)}
          >
            <OpenIcon />
          </Button>
        </Grid>
        <Grid item xs={12} md={6} lg={4} className={classes.container}>
          <Chart6 />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => openChart(6)}
          >
            <OpenIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ChartsPage;
