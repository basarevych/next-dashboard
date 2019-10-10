import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import {
  VictoryChart,
  VictoryContainer,
  VictoryPolarAxis,
  VictoryLine
} from "victory";
import { useTheme } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import theme from "./theme";

const colors = ["#428517", "#77D200", "#D6D305", "#EC8E19", "#C92B05"];

function Chart1(props) {
  const materialTheme = useTheme();

  const data = useMemo(
    () =>
      [...Array(5).keys()].map((val, i) => (
        <VictoryLine
          key={i}
          samples={100}
          style={{ data: { stroke: colors[i] } }}
          y={d => val * (1 - Math.cos(d.x))}
        />
      )),
    []
  );

  const renderChart = useCallback(
    ({ width }) => {
      if (!width) return null;
      const height = 0.8 * width;

      return (
        <svg width={width} height={height}>
          <VictoryChart
            polar
            domain={{ y: [0, 10] }}
            width={width}
            height={height}
            standalone={false}
            containerComponent={<VictoryContainer responsive={false} />}
            theme={theme({
              theme: materialTheme,
              withAxis: true,
              withGrid: true
            })}
          >
            <VictoryPolarAxis dependentAxis tickFormat={() => ""} />
            <VictoryPolarAxis
              tickValues={[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2]}
              tickFormat={["2π", "π/2", "π", "3π/2"]}
              labelPlacement="vertical"
            />
            {data}
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

Chart1.propTypes = {
  className: PropTypes.string
};

export default Chart1;
