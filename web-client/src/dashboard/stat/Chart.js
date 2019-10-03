import React, { useCallback, useMemo } from "react";
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

function Chart(props) {
  const getLabel = useCallback(d => d.datum.tooltip, []);

  const axisStyle = useMemo(
    () => ({
      axis: { display: "none" },
      ticks: { display: "none" },
      tickLabels: { display: "none" },
      grid: {
        stroke: props.colors.grid,
        strokeWidth: 0.75
      }
    }),
    [props.colors.grid]
  );

  const areaStyle = useMemo(
    () => ({
      data: {
        fill: props.colors.area,
        stroke: props.colors.line,
        strokeWidth: 2
      }
    }),
    [props.colors.area, props.colors.line]
  );

  const scatterStyle = useMemo(
    () => ({
      data: {
        fill: props.colors.line
      }
    }),
    [props.colors.line]
  );

  const renderMobileChart = useCallback(
    ({ width }) => {
      if (!width) return null;
      const height = 0.3 * width;

      return (
        <svg width={width} height={height}>
          <VictoryChart
            width={width}
            height={height}
            padding={0}
            domainPadding={{ x: 0, y: 5 }}
            standalone={false}
            containerComponent={<VictoryContainer responsive={false} />}
          >
            <VictoryAxis dependentAxis orientation="left" style={axisStyle} />
            <VictoryArea
              name="line"
              data={props.data}
              interpolation="monotoneX"
              x="date"
              y="value"
              style={areaStyle}
            />
            <VictoryScatter
              name="scatter"
              data={props.data}
              size={3}
              x="date"
              y="value"
              style={scatterStyle}
            />
          </VictoryChart>
        </svg>
      );
    },
    [props.data, axisStyle, areaStyle, scatterStyle]
  );

  const renderDesktopChart = useCallback(
    ({ width }) => {
      if (!width) return null;
      const height = 0.3 * width;

      return (
        <VictoryChart
          width={width}
          height={height}
          padding={0}
          domainPadding={{ x: 0, y: 5 }}
          standalone={true}
          containerComponent={
            <VictoryVoronoiContainer
              responsive={false}
              voronoiDimension="x"
              voronoiBlacklist={["line"]}
              labels={getLabel}
              labelComponent={
                <VictoryTooltip renderInPortal orientation="left" />
              }
            />
          }
        >
          <VictoryAxis dependentAxis orientation="left" style={axisStyle} />
          <VictoryArea
            name="line"
            data={props.data}
            interpolation="monotoneX"
            x="date"
            y="value"
            style={areaStyle}
          />
          <VictoryScatter
            name="scatter"
            data={props.data}
            size={3}
            x="date"
            y="value"
            style={scatterStyle}
          />
        </VictoryChart>
      );
    },
    [props.data, axisStyle, areaStyle, scatterStyle]
  );

  return (
    <>
      <Hidden smDown initialWidth="lg">
        <div className={props.className}>
          <AutoSizer disableHeight>{renderDesktopChart}</AutoSizer>
        </div>
      </Hidden>
      <Hidden mdUp initialWidth="lg">
        <div className={props.className}>
          <AutoSizer disableHeight>{renderMobileChart}</AutoSizer>
        </div>
      </Hidden>
    </>
  );
}

Chart.propTypes = {
  colors: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default Chart;
