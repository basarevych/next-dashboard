import React, { useMemo, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { AutoSizer } from "react-virtualized";
import { useIntl } from "react-intl";
import { VictoryTheme } from "victory";
import { makeStyles, useTheme } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {
  VictoryChart,
  VictoryContainer,
  VictoryLegend,
  VictoryPie
} from "victory";
import {
  getColor,
  getColorStart,
  getColorEnd
} from "../../../common/src/colors";
import StateLegendLabel from "./StateLendendLabel";
import { dashboardSelectors } from "../state";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    minHeight: 500,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch",
    alignItems: "stretch"
  },
  chart: {
    flex: 1
  }
}));

function StateSales(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const intl = useIntl();

  const state = useSelector(dashboardSelectors.getState);

  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const newEdges = ((props.viewer || {}).stateCities || {}).edges;
    if (typeof newEdges !== "undefined") setEdges(newEdges);
  }, [props.viewer]);

  const data = useMemo(() => {
    const cities = edges.map(edge => ({
      x: edge.node.name,
      y: edge.node.population
    }));
    if (!cities.length) return [];
    const otherPopulation =
      ((props.viewer || {}).stateCities || {}).otherPopulation || 0;
    if (otherPopulation) {
      cities.push({
        x: intl.formatMessage({ id: "DASHBOARD_OTHER_LABEL" }),
        y: otherPopulation
      });
    }
    return cities;
  }, [edges]);

  const legends = useMemo(
    () =>
      data.map((item, i) => {
        const [r, g, b] = getColor(i, data.length);
        return {
          name: `${i + 1}: ${item.x}`,
          symbol: {
            fill: `rgb(${r},${g},${b})`,
            stroke: "rgba(0,0,0,0.5)",
            strokeWidth: 0.5
          }
        };
      }),
    [data]
  );

  const colorScale = useMemo(() => {
    const result = [];
    for (let i = 0; i < data.length; i++)
      result.push(`url(#stateChartGradient${i})`);
    return result;
  }, [data]);

  const labels = useMemo(() => {
    const result = [];
    for (let i = 0; i < data.length; i++) result.push(i + 1);
    return result;
  }, [data]);

  const gradients = useMemo(
    () =>
      [...Array(data.length).keys()].map(i => {
        const [r1, g1, b1] = getColorStart(i, data.length);
        const [r2, g2, b2] = getColorEnd(i, data.length);
        return (
          <linearGradient
            key={`stateChartGradient${i}`}
            id={`stateChartGradient${i}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor={`rgb(${r1},${g1},${b1})`} />
            <stop offset="100%" stopColor={`rgb(${r2},${g2},${b2})`} />
          </linearGradient>
        );
      }),
    [data]
  );

  const title = useMemo(
    () => (
      <React.Fragment>
        <Typography variant="h4" color="inherit">
          {state}
        </Typography>
      </React.Fragment>
    ),
    [state]
  );

  const renderChart = useCallback(
    ({ width, height }) => {
      if (!data || !width || !height) return null;

      let legendLineHeight = height / 2 / 10 / 2;
      let radius = Math.min(width / 2, height / 2) - 10;

      return (
        <svg width={width} height={height}>
          <defs>
            <filter
              id="stateChartShadow"
              xmlns="http://www.w3.org/2000/svg"
              height="130%"
              width="130%"
            >
              <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
              <feOffset dx="2" dy="2" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.7"></feFuncA>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            {gradients}
          </defs>
          <VictoryChart
            width={width}
            height={radius + height / 2}
            standalone={false}
            containerComponent={<VictoryContainer responsive={false} />}
            theme={Object.assign({}, VictoryTheme.material, {
              axis: {
                style: {
                  axis: { display: "none" },
                  axisLabel: { display: "none" },
                  ticks: { display: "none" },
                  tickLabels: { display: "none" },
                  grid: { display: "none" }
                }
              },
              pie: {
                style: {
                  data: {
                    strokeWidth: 0,
                    filter: "url(#stateChartShadow)"
                  },
                  labels: {
                    fill: theme.name === "dark" ? "#ffffff" : "#000000"
                  }
                }
              },
              legend: {
                style: {
                  labels: {
                    padding: 0,
                    fontSize: legendLineHeight
                  }
                }
              }
            })}
          >
            <VictoryPie
              data={data}
              labels={labels}
              colorScale={colorScale}
              padAngle={3}
              startAngle={90}
              endAngle={-90}
              radius={radius}
              innerRadius={0.5 * radius}
              labelRadius={0.75 * radius}
            />
            <VictoryLegend
              data={legends}
              x={(width - 2 * radius) / 2 + 15}
              y={height / 2}
              width={2 * radius}
              height={height / 2}
              colorScale={colorScale}
              labelComponent={
                <StateLegendLabel
                  chart={data}
                  theme={theme}
                  offsetY={0.45 * legendLineHeight}
                  offsetX={radius}
                />
              }
              rowGutter={0}
            />
          </VictoryChart>
        </svg>
      );
    },
    [gradients, data, labels, colorScale, legends, theme]
  );

  return (
    <Paper className={classes.root}>
      {title}
      <div className={classes.chart}>
        <AutoSizer>{renderChart}</AutoSizer>
      </div>
    </Paper>
  );
}

StateSales.propTypes = {
  viewer: PropTypes.object,
  retry: PropTypes.func
};

export default StateSales;
