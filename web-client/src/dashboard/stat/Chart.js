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
        fill: `url(#statChartGradient${props.className})`,
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
    [props.data, props.colors, axisStyle, areaStyle, scatterStyle]
  );

  const renderDesktopChart = useCallback(
    ({ width }) => {
      if (!width) return null;
      const height = 0.3 * width;

      return (
        <VictoryChart
          animate
          width={width}
          height={height}
          padding={0}
          domainPadding={{ x: 0, y: 5 }}
          containerComponent={
            <VictoryVoronoiContainer
              responsive={false}
              voronoiDimension="x"
              voronoiBlacklist={["line"]}
              labels={getLabel}
              labelComponent={
                <VictoryTooltip
                  standalone={false}
                  renderInPortal
                  orientation="left"
                />
              }
            />
          }
        >
          <VictoryAxis dependentAxis orientation="left" style={axisStyle} />
          <VictoryArea
            name="line"
            data={props.data}
            interpolation="monotoneX"
            x="index"
            y="value"
            style={areaStyle}
          />
          <VictoryScatter
            name="scatter"
            data={props.data}
            size={3}
            x="index"
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
      <svg width={0} height={0}>
        <defs>
          <linearGradient
            id={`statChartGradient${props.className}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor={props.colors.area1} />
            <stop offset="100%" stopColor={props.colors.area2} />
          </linearGradient>
        </defs>
      </svg>
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
