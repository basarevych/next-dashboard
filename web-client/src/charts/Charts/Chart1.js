import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import {
  VictoryChart,
  VictoryContainer,
  VictoryGroup,
  VictoryStack,
  VictoryBar
} from "victory";
import { useTheme } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import theme from "./theme";

function Chart1(props) {
  const materialTheme = useTheme();

  const data = useMemo(
    () =>
      _.times(5, () => {
        return [
          { x: 1, y: Math.random() },
          { x: 2, y: Math.random() },
          { x: 3, y: Math.random() }
        ];
      }),
    []
  );

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
            <VictoryGroup offset={20} style={{ data: { width: 15 } }}>
              <VictoryStack colorScale={"red"}>
                {_.map(data, (item, index) => (
                  <VictoryBar key={index} data={item} />
                ))}
              </VictoryStack>
              <VictoryStack colorScale={"green"}>
                {_.map(data, (item, index) => (
                  <VictoryBar key={index} data={item} />
                ))}
              </VictoryStack>
              <VictoryStack colorScale={"blue"}>
                {_.map(data, (item, index) => (
                  <VictoryBar key={index} data={item} />
                ))}
              </VictoryStack>
            </VictoryGroup>
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
