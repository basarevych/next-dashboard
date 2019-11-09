import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import {
  VictoryChart,
  VictoryZoomContainer,
  VictoryBrushContainer,
  VictoryAxis,
  VictoryLine
} from "victory";
import { useTheme } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import theme from "./theme";

const data1 = [
  { a: new Date(1982, 1, 1), b: 125 },
  { a: new Date(1987, 1, 1), b: 257 },
  { a: new Date(1993, 1, 1), b: 345 },
  { a: new Date(1997, 1, 1), b: 515 },
  { a: new Date(2001, 1, 1), b: 132 },
  { a: new Date(2005, 1, 1), b: 305 },
  { a: new Date(2011, 1, 1), b: 270 },
  { a: new Date(2015, 1, 1), b: 470 }
];

const data2 = [
  { key: new Date(1982, 1, 1), b: 125 },
  { key: new Date(1987, 1, 1), b: 257 },
  { key: new Date(1993, 1, 1), b: 345 },
  { key: new Date(1997, 1, 1), b: 515 },
  { key: new Date(2001, 1, 1), b: 132 },
  { key: new Date(2005, 1, 1), b: 305 },
  { key: new Date(2011, 1, 1), b: 270 },
  { key: new Date(2015, 1, 1), b: 470 }
];

function Chart2(props) {
  const materialTheme = useTheme();

  const [zoomDomain, setZoomDomain] = useState({
    x: [new Date(1990, 1, 1), new Date(2005, 1, 1)]
  });

  const renderChart = useCallback(
    ({ width }) => {
      if (!width) return null;
      const height = 0.8 * width;

      return (
        <>
          <VictoryChart
            width={width}
            height={(height / 4) * 3}
            scale={{ x: "time" }}
            containerComponent={
              <VictoryZoomContainer
                responsive={false}
                zoomDimension="x"
                zoomDomain={zoomDomain}
                onZoomDomainChange={setZoomDomain}
              />
            }
            theme={theme({
              theme: materialTheme,
              withAxis: true,
              withGrid: true
            })}
          >
            <VictoryLine
              style={{
                data: { stroke: "tomato" }
              }}
              data={data1}
              x="a"
              y="b"
            />
          </VictoryChart>
          <VictoryChart
            padding={{ top: 0, left: 50, right: 50, bottom: 50 }}
            width={width}
            height={height / 4}
            scale={{ x: "time" }}
            containerComponent={
              <VictoryBrushContainer
                responsive={false}
                brushDimension="x"
                brushDomain={zoomDomain}
                onBrushDomainChange={setZoomDomain}
              />
            }
            theme={theme({
              theme: materialTheme,
              withAxis: true,
              withGrid: true
            })}
          >
            <VictoryAxis tickFormat={x => new Date(x).getFullYear()} />
            <VictoryLine
              style={{
                data: { stroke: "tomato" }
              }}
              data={data2}
              x="key"
              y="b"
            />
          </VictoryChart>
        </>
        //containerComponent={<VictoryContainer responsive={false} />}
      );
    },
    [data1, data2, zoomDomain, materialTheme]
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
