import React, { useState, useEffect, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
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

function StateLegendLabel(props) {
  const intl = useIntl();

  const { index, x, y, offsetX, offsetY, text, chart, theme } = props;
  if (!chart || !text) return null;

  return (
    <g>
      <text
        x={x}
        y={y + offsetY}
        alignmentBaseline="middle"
        fill={theme.palette.text.primary}
      >
        {text}
      </text>
      <text
        x={x + offsetX}
        y={y + offsetY}
        alignmentBaseline="middle"
        fill={theme.palette.text.primary}
      >
        {intl.formatNumber(chart[index].y)}
      </text>
    </g>
  );
}

StateLegendLabel.propTypes = {
  index: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  text: PropTypes.string,
  chart: PropTypes.array,
  theme: PropTypes.object
};

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

  const [selected, setSelected] = useState(props.selected);

  useEffect(() => {
    if (selected !== props.selected) {
      props.relay.refetch({ stateName: props.selected }, null, null, {
        force: true
      });
      setSelected(props.selected);
    }
  }, [props.selected, setSelected]);

  const edges = _.get(props, "viewer.stateCities.edges", []);

  const data = useMemo(() => {
    const cities = _.map(edges, edge => ({
      x: _.get(edge, "node.name"),
      y: _.get(edge, "node.population")
    }));
    if (!cities.length) return null;
    const otherPopulation = _.get(
      props.viewer,
      "stateCities.otherPopulation",
      0
    );
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
      _.map(data, (item, i) => {
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
      _.map(_.range(0, data.length), i => {
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
          {selected}
        </Typography>
      </React.Fragment>
    ),
    [selected]
  );

  const renderChart = useCallback(({ width, height }) => {
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
              <feFuncA type="linear" slope="0.2"></feFuncA>
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
          theme={_.merge({}, VictoryTheme.material, {
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
                  fill: "#ffffff",
                  textShadow: "0 0 3px #000000"
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
  });

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
  relay: PropTypes.object.isRequired,
  selected: PropTypes.string.isRequired,
  viewer: PropTypes.object.isRequired
};

export default StateSales;
