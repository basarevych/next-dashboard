import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import OpenIcon from "@material-ui/icons/ZoomOut";
import Chart1 from "./charts/Chart1";
import Chart2 from "./charts/Chart2";
import Chart3 from "./charts/Chart3";
import Chart4 from "./charts/Chart4";
import Chart5 from "./charts/Chart5";
import Chart6 from "./charts/Chart6";
import { appOperations } from "../app/state";

const useStyles = makeStyles(theme => ({
  layout: {
    width: "100%",
    maxWidth: 1000,
    flex: 1,
    alignSelf: "center",
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
    top: "-" + theme.spacing(1) + "px",
    right: "-" + theme.spacing(1) + "px"
  }
}));

function SingleChartPage(props) {
  const classes = useStyles(props);
  const router = useRouter();

  const goBack = useCallback(() => router.push("/charts", "/charts"), []);

  if (!props.chart) return null;

  return (
    <div className={classes.layout}>
      <Typography variant="h3" color="inherit" className={classes.title}>
        <FormattedMessage id="TITLE_CHARTS" />/{props.chart}
      </Typography>
      <div className={classes.container}>
        {props.chart === 1 && <Chart1 />}
        {props.chart === 2 && <Chart2 />}
        {props.chart === 3 && <Chart3 />}
        {props.chart === 4 && <Chart4 />}
        {props.chart === 5 && <Chart5 />}
        {props.chart === 6 && <Chart6 />}
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={goBack}
        >
          <OpenIcon />
        </Button>
      </div>
    </div>
  );
}

SingleChartPage.propTypes = {
  chart: PropTypes.number
};

SingleChartPage.getInitialProps = async ({ query, store }) => {
  let chart = parseInt(query.chart);
  if (!Number.isFinite(chart) || chart < 1 || chart > 6) {
    chart = null;
    await store.dispatch(appOperations.setStatusCode({ code: 404 }));
  }
  return {
    chart
  };
};

export default SingleChartPage;
