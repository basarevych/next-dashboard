import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import {
  VictoryChart,
  VictoryContainer,
  VictoryPie,
  VictoryTooltip,
  VictoryLabel
} from "victory";
import { useTheme } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import theme from "./theme";

const data = [
  { x: 1, y: 5 },
  { x: 2, y: 4 },
  { x: 3, y: 2 },
  { x: 4, y: 3 },
  { x: 5, y: 1 }
];

function CustomLabel(props) {
  return (
    <g>
      <VictoryLabel {...props} />
      <VictoryTooltip
        {...props}
        x={props.x0}
        y={props.y0}
        renderInPortal={false}
        orientation="top"
        pointerLength={0}
        cornerRadius={50}
        flyoutWidth={100}
        flyoutHeight={100}
        flyoutStyle={{ fill: "#000000" }}
        style={{ fill: "#ffffff" }}
      />
    </g>
  );
}
CustomLabel.propTypes = {
  x0: PropTypes.number.isRequired,
  y0: PropTypes.number.isRequired
};
CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;

function Chart4(props) {
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
            containerComponent={<VictoryContainer responsive={false} />}
            theme={theme({ theme: materialTheme })}
          >
            <VictoryPie
              style={{ labels: { fill: "$000000", pointerEvents: "none" } }}
              innerRadius={100}
              labelRadius={120}
              labels={({ datum }) => `# ${datum.y}`}
              padding={50}
              labelComponent={
                <CustomLabel x0={width / 2} y0={height / 2 + 50} />
              }
              data={data}
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

Chart4.propTypes = {
  className: PropTypes.string
};

export default Chart4;
