import React, { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import * as d3 from "d3";

const useStyles = makeStyles(theme => ({
  chart: {
    display: "flex",
    overflow: "hidden",
    marginTop: "-1rem"
  },
  grid: {
    "& line": {
      stroke: theme.chart.gridColor,
      strokeWidth: 1,
      strokeDasharray: "5 2"
    }
  },
  line: {
    stroke: theme.chart.lineColor,
    strokeWidth: 2,
    fill: "none"
  },
  circle: {
    stroke: theme.palette.background.paper,
    strokeWidth: 1,
    fill: theme.chart.dotColor,
    "&.hovered": {
      fill: [theme.chart.mapHoverBackground, "!important"]
    }
  },
  anchor: {
    opacity: 0
  },
  areaStop1: {
    stopColor: theme.chart.areaColor
  },
  areaStop2: {
    stopColor: fade(theme.chart.areaColor, 0)
  },
  tooltip: {
    zIndex: 100,
    position: "absolute",
    transform: "translate3d(-50%, 50%, 0)",
    textAlign: "center",
    whiteSpace: "pre",
    padding: 10,
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    border: "none",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    pointerEvents: "none"
  }
}));

function Chart(props) {
  const classes = useStyles(props);

  const xMin = 0;
  const [xMax, setXMax] = useState(0);

  useEffect(() => {
    const newMax = Math.ceil(
      props.data.reduce((acc, cur) => Math.max(acc, cur.index), 0)
    );
    setXMax(newMax);
  }, [props.data]);

  const yMin = 0;
  const [yMax, setYMax] = useState(0);

  useEffect(() => {
    const newMax = Math.ceil(
      1.1 * props.data.reduce((acc, cur) => Math.max(acc, cur.value), 0)
    );
    if (newMax > yMax) setYMax(newMax);
  }, [props.data]);

  const chartId = useMemo(() => `dash-stat-${props.id}`, []);
  const margin = { top: 0, right: 0, bottom: 0, left: 0 };
  const width = Math.ceil(props.width - margin.left - margin.right);
  const height = Math.ceil(0.35 * props.width - margin.top - margin.bottom);

  const xScale = useMemo(() => {
    const test = d3
      .scaleLinear()
      .domain([xMin, xMax])
      .range([0, width]);
    return d3
      .scaleLinear()
      .domain([xMin, xMax])
      .range([0, width + test(1)]);
  }, [xMin, xMax, width]);

  const yScale = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain([yMin, yMax])
        .range([height, 0]),
    [yMin, yMax, height]
  );

  const yAxisGrid = useMemo(
    () =>
      d3
        .axisLeft()
        .ticks(5)
        .tickSize(-width)
        .tickFormat("")
        .scale(yScale),
    [width, yScale]
  );

  const area = useMemo(
    () =>
      d3
        .area()
        .x(d => xScale(d.index))
        .y0(height)
        .y1(d => yScale(d.value)),
    [xScale, yScale]
  );

  const line = useMemo(
    () =>
      d3
        .line()
        .x(d => xScale(d.index))
        .y(d => yScale(d.value)),
    [xScale, yScale]
  );

  useEffect(() => {
    const tooltip = d3
      .select("#" + chartId)
      .append("div")
      .attr("id", chartId + "Tooltip")
      .attr("class", classes.tooltip)
      .style("opacity", 0);

    const svg = d3
      .select("#" + chartId)
      .append("svg")
      .attr("width", width + margin.left + margin.right + xScale(1))
      .attr("height", height + margin.top + margin.bottom);

    const g = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const defs = g.append("defs");

    defs
      .append("clipPath")
      .attr("id", chartId + "Clip")
      .append("rect")
      .attr("width", width)
      .attr("height", height);

    const grad = defs
      .append("linearGradient")
      .attr("id", chartId + "Gradient")
      .attr("x1", "0")
      .attr("y1", "0")
      .attr("x2", "0")
      .attr("y2", "100%");

    grad
      .append("stop")
      .attr("class", classes.areaStop1)
      .attr("offset", "0%");
    grad
      .append("stop")
      .attr("class", classes.areaStop2)
      .attr("offset", "100%");

    g.append("g")
      .attr("id", chartId + "GridG")
      .attr("class", classes.grid);

    g.append("g")
      .attr("id", chartId + "AreaG")
      .attr("clip-path", "url(#" + chartId + "Clip)");

    g.append("g")
      .attr("id", chartId + "LineG")
      .attr("clip-path", "url(#" + chartId + "Clip)");

    g.append("g")
      .attr("id", chartId + "DotG")
      .attr("clip-path", "url(#" + chartId + "Clip)");

    g.append("g")
      .attr("id", chartId + "AnchorG")
      .attr("clip-path", "url(#" + chartId + "Clip)");

    return () => {
      tooltip.remove();
      svg.remove();
    };
  }, [chartId, width, height]);

  useEffect(() => {
    if (xMin === xMax || yMin === yMax) return;

    // update grid

    d3.select("#" + chartId + "GridG")
      .call(yAxisGrid)
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick text").remove());

    // update area

    const gFill = d3.select("#" + chartId + "AreaG");
    const fill = gFill.selectAll("path").data([props.data]);

    const mergedFill = fill
      .enter()
      .append("path")
      .attr("fill", "url(#" + chartId + "Gradient)")
      .merge(fill)
      .attr("d", d => area(d));

    fill.exit().remove();

    // update line

    const gGraph = d3.select("#" + chartId + "LineG");
    const graph = gGraph.selectAll("path").data([props.data]);

    const mergedGraph = graph
      .enter()
      .append("path")
      .attr("class", classes.line)
      .merge(graph)
      .attr("d", d => line(d));

    graph.exit().remove();

    // update dots

    const gDots = d3.select("#" + chartId + "DotG");
    const dots = gDots.selectAll("circle").data(props.data);

    const mergedDots = dots
      .enter()
      .append("circle")
      .attr("class", classes.circle)
      .merge(dots)
      .attr("id", d => chartId + "dot" + d.index)
      .attr("cx", d => xScale(d.index))
      .attr("cy", d => yScale(d.value))
      .attr("r", 3);

    dots.exit().remove();

    // update tooltip anchors

    const tooltip = d3.select("#" + chartId + "Tooltip");

    const gAnchors = d3.select("#" + chartId + "AnchorG");
    const anchors = gAnchors.selectAll("circle").data(props.data);

    const mergedAnchors = anchors
      .enter()
      .append("circle")
      .attr("class", classes.anchor)
      .merge(anchors)
      .attr("cx", d => xScale(d.index))
      .attr("cy", d => yScale(d.value))
      .attr("r", xScale(1))
      .on("mouseover", function(d) {
        d3.select("#" + chartId + "dot" + d.index).classed("hovered", true);
        tooltip
          .text(d.tooltip)
          .style("left", d3.select(this).attr("cx") + "px")
          .style("top", d3.select(this).attr("cy") + "px")
          .transition()
          .duration(200)
          .style("opacity", 0.9);
      })
      .on("mousemove", function(d) {
        d3.select("#" + chartId + "dot" + d.index).classed("hovered", true);
        tooltip
          .style("left", d3.select(this).attr("cx") + "px")
          .style("top", d3.select(this).attr("cy") + "px");
      })
      .on("mouseout", function(d) {
        d3.select("#" + chartId + "dot" + d.index).classed("hovered", false);
        tooltip
          .transition()
          .duration(500)
          .style("opacity", 0);
      });

    anchors.exit().remove();

    if (props.isAnimated) {
      // slide to the left

      const tr = d3
        .transition()
        .duration(2000)
        .ease(d3.easePolyInOut);

      mergedFill
        .style("transform", null)
        .transition(tr)
        .style("transform", "translate(" + xScale(-1) + "px,0)");

      mergedGraph
        .style("transform", null)
        .transition(tr)
        .style("transform", "translate(" + xScale(-1) + "px,0)");

      mergedDots
        .style("transform", null)
        .transition(tr)
        .style("transform", "translate(" + xScale(-1) + "px,0)");

      mergedAnchors
        .style("transform", null)
        .transition(tr)
        .style("transform", "translate(" + xScale(-1) + "px,0)");
    }

    return () => {
      mergedFill.interrupt();
      mergedGraph.interrupt();
      mergedDots.interrupt();
      mergedAnchors.interrupt();
    };
  }, [props.data, xMin, xMax, xScale, yMin, yMax, yScale, props.isAnimated]);

  return <div id={chartId} className={classes.chart} />;
}

Chart.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  isAnimated: PropTypes.bool
};

export default Chart;
