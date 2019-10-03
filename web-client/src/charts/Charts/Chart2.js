import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import {
  VictoryChart,
  VictoryContainer,
  VictoryAxis,
  VictoryLine,
  VictoryScatter
} from "victory";
import { useTheme } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import theme from "./theme";

function Chart2(props) {
  const materialTheme = useTheme();

  const data = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 3, y: 4 },
    { x: 4, y: 3 },
    { x: 5, y: 5 }
  ];

  const renderChart = useCallback(
    ({ width }) => {
      if (!width) return null;
      const height = 0.8 * width;

      return (
        <svg width={width} height={height}>
          <VictoryChart
            domainPadding={{ x: 50 }}
            width={width}
            height={height}
            standalone={false}
            containerComponent={<VictoryContainer responsive={false} />}
            theme={theme({ theme: materialTheme, withAxis: true })}
          >
            <VictoryAxis />
            <VictoryAxis dependentAxis />
            <VictoryLine
              interpolation="linear"
              data={data}
              style={{ data: { stroke: "#e45a51" } }}
            />
            <VictoryScatter
              data={data}
              size={5}
              style={{ data: { fill: "#c43a31" } }}
            />
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

Chart2.propTypes = {
  className: PropTypes.string
};

export default Chart2;
