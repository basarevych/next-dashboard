import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useIntl, FormattedMessage, FormattedNumber } from "react-intl";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { makeStyles, useTheme } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { fade } from "@material-ui/core/styles/colorManipulator";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
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
  deltaWrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    overflow: "hidden"
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
  same: {
    color: "#ffffff",
    background: fade(blue[800], 0.65)
  },
  chart: {
    marginTop: "-1rem"
  },
  "@global": {
    ".dash-stat-fade-enter": {
      opacity: 0
    },
    ".dash-stat-fade-enter-active": {
      opacity: 1,
      transition: "opacity 500ms ease-in"
    },
    ".dash-stat-fade-enter-done": {
      opacity: 1
    },
    ".dash-stat-fade-exit": {
      display: "none"
    },
    ".dash-stat-fade-exit-active:": {
      display: "none"
    },
    ".dash-stat-fade-exit-done": {
      display: "none"
    },
    ".dash-stat-slide-enter": {
      transform: "translate3d(0, -100%, 0)"
    },
    ".dash-stat-slide-enter-active": {
      transform: "translate3d(0, 0, 0)",
      transition: "transform 300ms"
    },
    ".dash-stat-slide-enter-done": {
      transform: "translate3d(0, 0, 0)"
    },
    ".dash-stat-slide-exit": {
      display: "none"
    },
    ".dash-stat-slide-exit-active:": {
      display: "none"
    },
    ".dash-stat-slide-exit-done": {
      display: "none"
    }
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
    const percent =
      items[0].value === 0
        ? items[1].value > 0
          ? 100
          : items[1].value === 0
          ? 0
          : -100
        : (100 * (items[1].value - items[0].value)) / items[0].value;
    if (!Number.isFinite(percent)) return null;

    const symbol =
      Math.abs(percent) < Number.EPSILON ? "■" : percent > 0 ? "▲" : "▼";

    const className =
      Math.abs(percent) < Number.EPSILON
        ? "same"
        : percent > 0
        ? "increasing"
        : "descreasing";

    return (
      <div className={classes.deltaWrapper}>
        <TransitionGroup>
          <CSSTransition
            key={percent}
            timeout={500}
            classNames="dash-stat-slide"
          >
            <div
              className={classNames(
                classes.delta,
                className && classes[className]
              )}
            >
              {symbol}
              &thinsp;
              <FormattedNumber
                value={Math.abs(percent)}
                maximumFractionDigits={0}
              />
              %
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }, [data]);

  const stat = useMemo(() => {
    return (
      <div className={classes.stat}>
        <Typography variant="h3" color="inherit">
          <TransitionGroup>
            <CSSTransition
              key={data.slice(-1)[0].value}
              timeout={500}
              classNames="dash-stat-fade"
            >
              {data.length ? (
                <div>
                  <FormattedNumber
                    value={data.slice(-1)[0].value}
                    maximumFractionDigits={props.precision}
                  />
                  {!!props.percent && "%"}
                </div>
              ) : (
                <div />
              )}
            </CSSTransition>
          </TransitionGroup>
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
