import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import {
  VictoryChart,
  VictoryContainer,
  VictoryAxis,
  VictoryPie
} from "victory";
import { useTheme } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import theme from "./theme";

const data = [
  { x: "Cats", y: 35 },
  { x: "Dogs", y: 40 },
  { x: "Birds", y: 55 }
];

function Chart4(props) {
  const materialTheme = useTheme();

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
            theme={theme({ theme: materialTheme })}
          >
            <VictoryAxis />
            <VictoryAxis dependentAxis />
            <VictoryPie data={data} />
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

Chart4.propTypes = {
  className: PropTypes.string
};

export default Chart4;
