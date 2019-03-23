import React from "react";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import {
  VictoryChart,
  VictoryContainer,
  VictoryAxis,
  VictoryCandlestick
} from "victory";
import Paper from "@material-ui/core/Paper";
import theme from "./theme";

class Chart6 extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    className: PropTypes.string
  };

  getData() {
    return [
      { x: new Date(2016, 6, 1), open: 9, close: 30, high: 56, low: 7 },
      { x: new Date(2016, 6, 2), open: 80, close: 40, high: 120, low: 10 },
      { x: new Date(2016, 6, 3), open: 50, close: 80, high: 90, low: 20 },
      { x: new Date(2016, 6, 4), open: 70, close: 22, high: 70, low: 5 },
      { x: new Date(2016, 6, 5), open: 20, close: 35, high: 50, low: 10 },
      { x: new Date(2016, 6, 6), open: 35, close: 30, high: 40, low: 3 },
      { x: new Date(2016, 6, 7), open: 30, close: 90, high: 95, low: 30 },
      { x: new Date(2016, 6, 8), open: 50, close: 81, high: 83, low: 45 }
    ];
  }

  renderChart(width, height) {
    return (
      <svg width={width} height={height}>
        <VictoryChart
          width={width}
          height={height}
          standalone={false}
          scale={{ x: "time" }}
          containerComponent={<VictoryContainer responsive={false} />}
          theme={theme({
            theme: this.props.theme,
            withGrid: true
          })}
        >
          <VictoryAxis tickFormat={t => `${t.getDate()}/${t.getMonth()}`} />
          <VictoryAxis dependentAxis />
          <VictoryCandlestick data={this.getData()} size={8} />
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

export default Chart6;
