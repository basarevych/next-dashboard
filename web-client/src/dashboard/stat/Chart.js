import React from "react";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import {
  VictoryChart,
  VictoryContainer,
  VictoryVoronoiContainer,
  VictoryAxis,
  VictoryArea,
  VictoryScatter,
  VictoryTooltip
} from "victory";
import Hidden from "@material-ui/core/Hidden";

class Chart extends React.Component {
  static propTypes = {
    colors: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    className: PropTypes.string
  };

  renderChart(isMobile, width, height) {
    const chartContainer = isMobile ? (
      <VictoryContainer responsive={false} />
    ) : (
      <VictoryVoronoiContainer
        responsive={false}
        voronoiDimension="x"
        voronoiBlacklist={["line"]}
        labels={d => d.tooltip}
        labelComponent={<VictoryTooltip renderInPortal orientation="left" />}
      />
    );

    const chart = (
      <VictoryChart
        width={width}
        height={height}
        padding={0}
        domainPadding={{ x: 0, y: 5 }}
        standalone={!isMobile}
        containerComponent={chartContainer}
      >
        <VictoryAxis
          dependentAxis
          orientation="left"
          style={{
            axis: { display: "none" },
            ticks: { display: "none" },
            tickLabels: { display: "none" },
            grid: {
              stroke: this.props.colors.grid,
              strokeWidth: 0.75
            }
          }}
        />
        <VictoryArea
          name="line"
          data={this.props.data}
          interpolation="monotoneX"
          x="date"
          y="value"
          style={{
            data: {
              fill: this.props.colors.area,
              stroke: this.props.colors.line,
              strokeWidth: 2
            }
          }}
        />
        <VictoryScatter
          name="scatter"
          data={this.props.data}
          size={3}
          x="date"
          y="value"
          style={{
            data: {
              fill: this.props.colors.line
            }
          }}
        />
      </VictoryChart>
    );

    if (isMobile) {
      return (
        <svg width={width} height={height}>
          {chart}
        </svg>
      );
    }

    return chart;
  }

  renderRoot(isMobile) {
    return (
      <div className={this.props.className}>
        <AutoSizer disableHeight>
          {({ width }) =>
            !!width && this.renderChart(isMobile, width, 0.3 * width)
          }
        </AutoSizer>
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Hidden smDown initialWidth="lg">
          {this.renderRoot(false)}
        </Hidden>
        <Hidden mdUp initialWidth="lg">
          {this.renderRoot(true)}
        </Hidden>
      </React.Fragment>
    );
  }
}

export default Chart;
