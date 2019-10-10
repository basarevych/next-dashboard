import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useIntl, FormattedMessage, FormattedNumber } from "react-intl";
import { makeStyles, useTheme } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { fade } from "@material-ui/core/styles/colorManipulator";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import Chart from "./Chart";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: "1rem",
    color: theme.chart.statColor,
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    position: "relative",
    "& svg": {
      overflow: ["visible", "!important"]
    }
  },
  delta: {
    position: "absolute",
    top: 0,
    right: 0,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    padding: "0.25rem 0.5rem"
  },
  stat: {
    padding: "1rem",
    width: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  increasing: {
    color: "#ffffff",
    background: fade(green[800], 0.65)
  },
  descreasing: {
    color: "#ffffff",
    background: fade(red[800], 0.65)
  },
  chart: {
    marginTop: "-1rem"
  }
}));

function Stat(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const intl = useIntl();

  const edges = (props.data || {}).edges || [];

  const data = useMemo(() => {
    return edges
      .filter(edge => !!edge.node)
      .map((edge, index) => {
        const date = new Date(edge.node.date);
        const value = edge.node.value;
        return {
          date,
          index,
          value,
          tooltip:
            intl.formatMessage({ id: props.label }) +
            ": " +
            intl.formatNumber(value) +
            "\n" +
            intl.formatDate(date) +
            " " +
            intl.formatTime(date, {
              hour: "numeric",
              minute: "numeric",
              second: "numeric"
            })
        };
      });
  }, [edges]);

  const delta = useMemo(() => {
    if (data.length < 2) return null;

    const items = data.slice(-2);
    const change = (100 * (items[1].value - items[0].value)) / items[0].value;
    if (!isFinite(change)) return null;

    const symbol = change > 0 ? "▲" : change < 0 ? "▼" : "";
    const className =
      change > 0 ? "increasing" : change < 0 ? "descreasing" : null;

    return (
      <div
        className={classNames(classes.delta, className && classes[className])}
      >
        {symbol}
        <FormattedNumber value={Math.abs(change)} maximumFractionDigits={0} />%
      </div>
    );
  }, [data]);

  const stat = useMemo(() => {
    return (
      <div className={classes.stat}>
        <Typography variant="h3" color="inherit">
          {data.length ? (
            <>
              <FormattedNumber
                value={data.slice(-1)[0].value}
                maximumFractionDigits={props.precision}
              />
              {props.percent && "%"}
            </>
          ) : (
            " "
          )}
        </Typography>
        <Typography variant="overline" color="inherit">
          <FormattedMessage id={props.label} />
        </Typography>
      </div>
    );
  }, [data, props.precision, props.label]);

  const colors = useMemo(
    () => ({
      grid: fade(theme.palette.text.secondary, 0.25),
      area1: theme.chart.areaColor,
      area2: fade(theme.chart.areaColor, 0),
      line: theme.chart.lineColor
    }),
    [theme]
  );

  return (
    <Paper className={classes.root}>
      {delta}
      {stat}
      <Chart className={classes.chart} data={data} colors={colors} />
    </Paper>
  );
}

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.object,
  percent: PropTypes.bool,
  precision: PropTypes.number
};

Stat.defaultProps = {
  percent: false,
  precision: 0
};

export default Stat;
