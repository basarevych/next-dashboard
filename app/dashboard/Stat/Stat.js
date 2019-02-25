import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { intlShape, FormattedMessage, FormattedNumber } from "react-intl";
import { AutoSizer } from "react-virtualized";
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryAxis,
  VictoryLine,
  VictoryScatter,
  VictoryTooltip
} from "victory";
import Typography from "@material-ui/core/Typography";
import { fade, darken } from "@material-ui/core/styles/colorManipulator";
import blue from "@material-ui/core/colors/blue";
import amber from "@material-ui/core/colors/amber";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

export const styles = theme => ({
  root: {
    boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.85)",
    borderRadius: theme.shape.borderRadius,
    background: `linear-gradient(to bottom, ${
      theme.palette.background.paper
    } 0, ${darken(theme.palette.background.paper, 0.5)} 100%)`,
    color: amber[500],
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
    paddingTop: "1rem",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  chart: {
    marginTop: "-1rem"
  },
  increasing: {
    color: "#ffffff",
    background: fade(green[300], 0.65)
  },
  descreasing: {
    color: "#ffffff",
    background: fade(red[300], 0.65)
  }
});

class Stat extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    precision: PropTypes.number
  };

  static defaultProps = {
    precision: 0
  };

  getData() {
    return _.map(_.get(this.props.data, "edges", []), edge => ({
      date: new Date(_.get(edge, "node.date")),
      value: _.get(edge, "node.value")
    }));
  }

  renderStat() {
    return (
      <div className={this.props.classes.stat}>
        <Typography variant="h4" color="inherit">
          <FormattedNumber
            value={_.last(this.getData()).value}
            maximumFractionDigits={this.props.precision}
          />
        </Typography>
        <Typography variant="overline" color="inherit">
          <FormattedMessage id={this.props.label} />
        </Typography>
      </div>
    );
  }

  renderDelta() {
    const items = _.slice(this.getData(), -2);
    if (items.length !== 2) return null;

    const delta = (100 * (items[1].value - items[0].value)) / items[0].value;
    const symbol = delta > 0 ? "▲" : delta < 0 ? "▼" : "";
    const className =
      delta > 0 ? "increasing" : delta < 0 ? "descreasing" : null;

    return (
      <div
        className={classNames(
          this.props.classes.delta,
          className && this.props.classes[className]
        )}
      >
        {symbol}
        <FormattedNumber value={Math.abs(delta)} maximumFractionDigits={0} />%
      </div>
    );
  }

  renderChart(width, height) {
    const max = _.reduce(
      this.getData(),
      (acc, cur) => Math.max(acc, cur.value),
      0
    );
    return (
      <React.Fragment>
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="statGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={fade(blue[500], 0.25)} />
              <stop offset="100%" stopColor={blue[400]} />
            </linearGradient>
          </defs>
        </svg>
        <VictoryChart
          width={width}
          height={height}
          padding={0}
          domainPadding={{ x: [10, 10], y: [5, 5] }}
          containerComponent={
            <VictoryVoronoiContainer
              responsive={false}
              voronoiDimension="x"
              voronoiBlacklist={["line"]}
              labels={d =>
                this.props.intl.formatMessage({ id: this.props.label }) +
                ": " +
                d.value +
                "\n" +
                this.props.intl.formatDate(d.date)
              }
              labelComponent={
                <VictoryTooltip renderInPortal orientation="left" />
              }
            />
          }
        >
          <VictoryAxis
            dependentAxis
            domain={{ y: [0, 1.1 * max] }}
            orientation="left"
            style={{
              axis: { display: "none" },
              ticks: { display: "none" },
              tickLabels: { display: "none" },
              grid: {
                stroke: fade(amber[300], 0.3),
                strokeWidth: 0.75
              }
            }}
          />
          <VictoryLine
            name="line"
            data={this.getData()}
            x="date"
            y="value"
            interpolation="monotoneX"
            labels={_.constant("")}
            style={{
              data: {
                stroke: "url(#statGradient)",
                strokeWidth: 2
              }
            }}
          />
          <VictoryScatter
            data={this.getData()}
            x="date"
            y="value"
            symbol="diamond"
            size={3}
            style={{
              data: {
                fill: "#ffffff"
              }
            }}
          />
        </VictoryChart>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        {this.renderDelta()}
        {this.renderStat()}
        <div className={this.props.classes.chart}>
          <AutoSizer disableHeight>
            {({ width }) => !!width && this.renderChart(width, 0.3 * width)}
          </AutoSizer>
        </div>
      </div>
    );
  }
}

export default Stat;
