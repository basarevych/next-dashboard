import { VictoryTheme } from "victory";
import { fade } from "@material-ui/core/styles/colorManipulator";

export default ({ theme, withAxis, withGrid, withArea } = {}) =>
  _.merge({}, VictoryTheme.material, {
    axis: {
      style: {
        axis: withAxis
          ? { stroke: theme.palette.text.primary }
          : { display: "none" },
        axisLabel:
          withAxis || withGrid
            ? { fill: theme.palette.text.primary }
            : { display: "none" },
        ticks: withAxis
          ? { stroke: fade(theme.palette.text.disabled, 0.25) }
          : { display: "none" },
        tickLabels:
          withAxis || withGrid
            ? { fill: theme.palette.text.secondary }
            : { display: "none" },
        grid: withGrid
          ? { stroke: fade(theme.palette.text.disabled, 0.25) }
          : { display: "none" }
      }
    },
    pie: {
      style: {
        data: { strokeWidth: 0 },
        labels: { fill: theme.palette.text.primary }
      }
    },
    area: withArea
      ? {
          style: {
            data: { strokeWidth: 1, stroke: theme.palette.text.primary }
          }
        }
      : undefined,
    candlestick: {
      style: {
        data: {
          stroke: theme.palette.text.primary,
          strokeWidth: 2
        },
        labels: {
          fill: theme.palette.text.primary
        }
      },
      candleColors: {
        positive: "#e45a51",
        negative: "#5ae451"
      }
    }
  });
