import React from "react";
import PropTypes from "prop-types";
import { intlShape } from "react-intl";
import { AutoSizer } from "react-virtualized";
import { VictoryTheme } from "victory";
import { darken } from "@material-ui/core/styles/colorManipulator";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {
  VictoryChart,
  VictoryContainer,
  VictoryLegend,
  VictoryPie
} from "victory";

export const styles = () => ({
  root: {
    width: "100%",
    height: "100%",
    minHeight: 300,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch",
    alignItems: "stretch"
  },
  chart: {
    flex: 1
  }
});

class StateLegendLabel extends React.Component {
  static propTypes = {
    index: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    text: PropTypes.string,
    chart: PropTypes.array,
    theme: PropTypes.object
  };

  render() {
    const { index, x, y, offsetX, offsetY, text, chart, theme } = this.props;
    if (!chart || !text) return null;
    return (
      <g>
        <text
          x={x}
          y={y + offsetY}
          alignmentBaseline="middle"
          fill={theme.palette.text.primary}
        >
          {text}
        </text>
        <text
          x={x + offsetX}
          y={y + offsetY}
          alignmentBaseline="middle"
          fill={theme.palette.text.primary}
        >
          {chart[index].y}
        </text>
      </g>
    );
  }
}

class StateSales extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired,
    selected: PropTypes.string.isRequired,
    viewer: PropTypes.object.isRequired,
    onLoaded: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.isDestroyed = false;
  }

  componentDidMount() {
    this.props.onLoaded();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selected !== this.props.selected) {
      if (!this.isDestroyed) {
        this.props.relay.refetch(
          { stateName: this.props.selected },
          null,
          () => this.props.onLoaded(),
          { force: true }
        );
      }
    }
  }

  componentWillUnmount() {
    this.isDestroyed = true;
  }

  getData() {
    const cities = _.map(
      _.get(this.props.viewer, "stateCities.edges", []),
      edge => ({
        x: _.get(edge, "node.name"),
        y: _.get(edge, "node.population")
      })
    );
    if (!cities.length) return null;
    const otherPopulation = _.get(
      this.props.viewer,
      "stateCities.otherPopulation",
      0
    );
    if (otherPopulation) {
      cities.push({
        x: this.props.intl.formatMessage({ id: "DASHBOARD_OTHER_LABEL" }),
        y: otherPopulation
      });
    }
    return cities;
  }

  renderTitle() {
    return (
      <React.Fragment>
        <Typography variant="h4" color="inherit">
          {this.props.selected}
        </Typography>
      </React.Fragment>
    );
  }

  renderChart(width, height) {
    const data = this.getData();
    if (!data) return null;

    let legendLineHeight = height / 2 / 10 / 2;
    let radius = Math.min(width / 2, height / 2) - 10;
    let colorScale = [];
    let labels = [];
    let legends = _.map(data, (item, i) => ({
      name: `${i + 1}: ${item.x}`,
      symbol: {
        fill:
          this.props.theme.name === "dark"
            ? darken("rgb(255, 167, 38)", i * 0.05)
            : darken("rgb(66, 165, 245)", i * 0.05)
      }
    }));
    for (let i = 0; i <= 10; i++) {
      colorScale.push(
        this.props.theme.name === "dark"
          ? darken("rgb(255, 167, 38)", i * 0.05)
          : darken("rgb(66, 165, 245)", i * 0.05)
      );
      labels.push(i + 1);
    }

    return (
      <svg width={width} height={height}>
        <VictoryChart
          width={width}
          height={radius + height / 2}
          standalone={false}
          containerComponent={<VictoryContainer responsive={false} />}
          theme={_.merge({}, VictoryTheme.material, {
            axis: {
              style: {
                axis: { display: "none" },
                axisLabel: { display: "none" },
                ticks: { display: "none" },
                tickLabels: { display: "none" },
                grid: { display: "none" }
              }
            },
            pie: {
              style: {
                data: { strokeWidth: 0 },
                labels: {
                  fill: "#ffffff",
                  textShadow: "0 0 3px #000000"
                }
              }
            },
            legend: {
              style: {
                labels: {
                  padding: 0,
                  fontSize: legendLineHeight
                }
              }
            }
          })}
        >
          <VictoryPie
            data={data}
            labels={labels}
            colorScale={colorScale}
            padAngle={3}
            startAngle={90}
            endAngle={-90}
            radius={radius}
            innerRadius={0.5 * radius}
            labelRadius={0.75 * radius}
          />
          <VictoryLegend
            data={legends}
            x={(width - 2 * radius) / 2 + 15}
            y={height / 2}
            width={2 * radius}
            height={height / 2}
            colorScale={colorScale}
            labelComponent={
              <StateLegendLabel
                chart={data}
                theme={this.props.theme}
                offsetY={0.45 * legendLineHeight}
                offsetX={radius}
              />
            }
            rowGutter={0}
          />
        </VictoryChart>
      </svg>
    );
  }

  render() {
    return (
      <Paper className={this.props.classes.root}>
        {this.renderTitle()}
        <div className={this.props.classes.chart}>
          <AutoSizer>
            {({ width, height }) =>
              !!width && !!height && this.renderChart(width, height)
            }
          </AutoSizer>
        </div>
      </Paper>
    );
  }
}

export default StateSales;
