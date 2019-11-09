import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import {
  VictoryChart,
  VictoryContainer,
  VictoryAxis,
  VictoryCandlestick
} from "victory";
import { useTheme } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import theme from "./theme";

const data = [
  { x: new Date(2016, 6, 1), open: 9, close: 30, high: 56, low: 7 },
  { x: new Date(2016, 6, 2), open: 80, close: 40, high: 120, low: 10 },
  { x: new Date(2016, 6, 3), open: 50, close: 80, high: 90, low: 20 },
  { x: new Date(2016, 6, 4), open: 70, close: 22, high: 70, low: 5 },
  { x: new Date(2016, 6, 5), open: 20, close: 35, high: 50, low: 10 },
  { x: new Date(2016, 6, 6), open: 35, close: 30, high: 40, low: 3 },
  { x: new Date(2016, 6, 7), open: 30, close: 90, high: 95, low: 30 },
  { x: new Date(2016, 6, 8), open: 50, close: 81, high: 83, low: 45 }
];

function Chart6(props) {
  const materialTheme = useTheme();

  const renderChart = useCallback(
    ({ width }) => {
      if (!width) return null;
      const height = 0.8 * width;

      return (
        <svg width={width} height={height}>
          <VictoryChart
            width={width}
            height={height}
            standalone={false}
            scale={{ x: "time" }}
            containerComponent={<VictoryContainer responsive={false} />}
            theme={theme({ theme: materialTheme, withGrid: true })}
          >
            <VictoryAxis tickFormat={t => `${t.getDate()}/${t.getMonth()}`} />
            <VictoryAxis dependentAxis />
            <VictoryCandlestick data={data} size={8} candleWidth={10} />
          </VictoryChart>
        </svg>
      );
    },
    [data, materialTheme]
  );

  return (
    <Paper className={props.className}>
      <AutoSizer disableHeight>{renderChart}</AutoSizer>
    </Paper>
  );
}

Chart6.propTypes = {
  className: PropTypes.string
};

export default Chart6;
