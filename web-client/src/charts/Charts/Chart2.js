import React from "react";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import {
  VictoryChart,
  VictoryContainer,
  VictoryAxis,
  VictoryLine,
  VictoryScatter
} from "victory";
import Paper from "@material-ui/core/Paper";
import theme from "./theme";

class Chart2 extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    className: PropTypes.string
  };

  getData() {
    return [
      { x: 0, y: 0 },
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 3, y: 4 },
      { x: 4, y: 3 },
      { x: 5, y: 5 }
    ];
  }

  renderChart(width, height) {
    return (
      <svg width={width} height={height}>
        <VictoryChart
          domainPadding={{ x: 50 }}
          width={width}
          height={height}
          standalone={false}
          containerComponent={<VictoryContainer responsive={false} />}
          theme={theme({ theme: this.props.theme, withAxis: true })}
        >
          <VictoryAxis />
          <VictoryAxis dependentAxis />
          <VictoryLine
            interpolation="linear"
            data={this.getData()}
            style={{ data: { stroke: "#e45a51" } }}
          />
          <VictoryScatter
            data={this.getData()}
            size={5}
            style={{ data: { fill: "#c43a31" } }}
          />
        </VictoryChart>
      </svg>
    );
  }

  render() {
    return (
      <Paper className={this.props.className}>
        <AutoSizer disableHeight>
          {({ width }) => !!width && this.renderChart(width, 0.8 * width)}
        </AutoSizer>
      </Paper>
    );
  }
}

export default Chart2;
