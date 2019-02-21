import { VictoryTheme } from "victory";

export default ({ withAxis, withGrid, withDarkGrid, withArea } = {}) =>
  _.merge({}, VictoryTheme.material, {
    axis: {
      style: {
        axis: withAxis ? { stroke: "#cccccc" } : { display: "none" },
        axisLabel:
          withAxis || withGrid ? { fill: "#ffffff" } : { display: "none" },
        ticks: withAxis ? { stroke: "#cccccc" } : { display: "none" },
        tickLabels:
          withAxis || withGrid ? { fill: "#ffffff" } : { display: "none" },
        grid: withGrid
          ? { stroke: withDarkGrid ? "#666666" : "#aaaaaa" }
          : { display: "none" }
      }
    },
    pie: {
      style: {
        data: { strokeWidth: 0 },
        labels: { fill: "#ffffff" }
      }
    },
    area: withArea
      ? {
          style: {
            data: { strokeWidth: 1, stroke: "#ffffff" }
          }
        }
      : undefined,
    candlestick: {
      style: {
        data: {
          stroke: "#aaaaaa",
          strokeWidth: 1
        },
        labels: {
          fill: "#ffffff"
        }
      },
      candleColors: {
        positive: "#ffffff",
        negative: "#aaaaaa"
      }
    }
  });
