import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { intlShape, FormattedMessage, FormattedNumber } from "react-intl";
import { AutoSizer } from "react-virtualized";
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryAxis,
  VictoryArea,
  VictoryScatter,
  VictoryTooltip
} from "victory";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { fade } from "@material-ui/core/styles/colorManipulator";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

export const styles = theme => ({
  root: {
    color: theme.palette.primary.main,
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
        <Typography variant="h3" color="inherit">
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
    return (
      <VictoryChart
        width={width}
        height={height}
        padding={0}
        domainPadding={{ x: 0, y: 5 }}
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
          orientation="left"
          style={{
            axis: { display: "none" },
            ticks: { display: "none" },
            tickLabels: { display: "none" },
            grid: {
              stroke: fade(this.props.theme.palette.text.secondary, 0.25),
              strokeWidth: 0.75
            }
          }}
        />
        <VictoryArea
          name="line"
          data={this.getData()}
          x="date"
          y="value"
          interpolation="monotoneX"
          labels={_.constant("")}
          style={{
            data: {
              fill: this.props.theme.chart.areaColor,
              stroke: this.props.theme.chart.lineColor,
              strokeWidth: 2
            }
          }}
        />
        <VictoryScatter
          data={this.getData()}
          x="date"
          y="value"
          size={3}
          style={{
            data: {
              fill: this.props.theme.chart.lineColor
            }
          }}
        />
      </VictoryChart>
    );
  }

  render() {
    return (
      <Paper className={this.props.classes.root}>
        {this.renderDelta()}
        {this.renderStat()}
        <div className={this.props.classes.chart}>
          <AutoSizer disableHeight>
            {({ width }) => !!width && this.renderChart(width, 0.3 * width)}
          </AutoSizer>
        </div>
      </Paper>
    );
  }
}

export default Stat;
