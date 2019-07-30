import React from "react";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import {
  VictoryChart,
  VictoryContainer,
  VictoryGroup,
  VictoryStack,
  VictoryBar
} from "victory";
import Paper from "@material-ui/core/Paper";
import theme from "./theme";

class Chart1 extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    className: PropTypes.string
  };

  getData() {
    return _.times(5, () => {
      return [
        { x: 1, y: Math.random() },
        { x: 2, y: Math.random() },
        { x: 3, y: Math.random() }
      ];
    });
  }

  renderChart(width, height) {
    return (
      <svg width={width} height={height}>
        <VictoryChart
          domainPadding={{ x: 50 }}
          width={width}
          height={height}
          standalone={false}
          containerComponent={<VictoryContainer responsive={false} />}
          theme={theme({ theme: this.props.theme, withAxis: true })}
        >
          <VictoryGroup offset={20} style={{ data: { width: 15 } }}>
            <VictoryStack colorScale={"red"}>
              {_.map(this.getData(), (data, index) => (
                <VictoryBar key={index} data={data} />
              ))}
            </VictoryStack>
            <VictoryStack colorScale={"green"}>
              {_.map(this.getData(), (data, index) => (
                <VictoryBar key={index} data={data} />
              ))}
            </VictoryStack>
            <VictoryStack colorScale={"blue"}>
              {_.map(this.getData(), (data, index) => (
                <VictoryBar key={index} data={data} />
              ))}
            </VictoryStack>
          </VictoryGroup>
        </VictoryChart>
      </svg>
    );
  }

  render() {
    return (
      <Paper className={this.props.className}>
        <AutoSizer disableHeight>
          {({ width }) => !!width && this.renderChart(width, 0.8 * width)}
        </AutoSizer>
      </Paper>
    );
  }
}

export default Chart1;
