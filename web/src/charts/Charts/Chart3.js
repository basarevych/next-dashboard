import React from "react";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import {
  VictoryChart,
  VictoryContainer,
  VictoryGroup,
  VictoryArea,
  VictoryPolarAxis,
  VictoryLabel
} from "victory";
import Paper from "@material-ui/core/Paper";
import theme from "./theme";

class Chart3 extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      data: this.processData(this.getCharacterData()),
      maxima: this.getMaxima(this.getCharacterData())
    };
  }

  getCharacterData() {
    return [
      { strength: 1, intelligence: 250, luck: 1, stealth: 40, charisma: 50 },
      { strength: 2, intelligence: 300, luck: 2, stealth: 80, charisma: 90 },
      { strength: 5, intelligence: 225, luck: 3, stealth: 60, charisma: 120 }
    ];
  }

  getMaxima(data) {
    const groupedData = _.reduce(
      _.keys(data[0]),
      (memo, key) => {
        memo[key] = _.map(data, d => d[key]);
        return memo;
      },
      {}
    );
    return _.reduce(
      _.keys(groupedData),
      (memo, key) => {
        memo[key] = Math.max(...groupedData[key]);
        return memo;
      },
      {}
    );
  }

  processData(data) {
    const maxByGroup = this.getMaxima(data);
    const makeDataArray = d => {
      return _.map(_.keys(d), key => ({ x: key, y: d[key] / maxByGroup[key] }));
    };
    return _.map(data, datum => makeDataArray(datum));
  }

  renderChart(width, height) {
    return (
      <svg width={width} height={height}>
        <VictoryChart
          polar
          domain={{ y: [0, 1] }}
          width={width}
          height={height}
          standalone={false}
          containerComponent={<VictoryContainer responsive={false} />}
          theme={theme({
            theme: this.props.theme,
            withGrid: true
          })}
        >
          <VictoryGroup
            colorScale={["gold", "orange", "tomato"]}
            style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
          >
            {_.map(this.state.data, (data, i) => (
              <VictoryArea key={i} data={data} />
            ))}
          </VictoryGroup>
          {_.map(_.keys(this.state.maxima), (key, i) => (
            <VictoryPolarAxis
              key={i}
              dependentAxis
              tickLabelComponent={<VictoryLabel labelPlacement="vertical" />}
              labelPlacement="perpendicular"
              axisValue={i + 1}
              label={key}
              tickFormat={t => Math.ceil(t * this.state.maxima[key])}
              tickValues={[0.25, 0.5, 0.75]}
            />
          ))}
          <VictoryPolarAxis
            labelPlacement="parallel"
            tickFormat={_.constant("")}
          />
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

export default Chart3;
