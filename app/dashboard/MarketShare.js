import React from "react";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import {
  VictoryChart,
  VictoryContainer,
  VictoryPie,
  VictoryAxis,
  VictoryTheme
} from "victory";
import Typography from "@material-ui/core/Typography";
import lightBlue from "@material-ui/core/colors/lightBlue";
import amber from "@material-ui/core/colors/amber";
import orange from "@material-ui/core/colors/orange";
import cyan from "@material-ui/core/colors/cyan";

export const styles = theme => ({
  root: {
    textAlign: "center",
    color: amber[500]
  }
});

class MarketShare extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    title: PropTypes.string,
    data: PropTypes.array
  };

  renderTitle() {
    return (
      <Typography variant="h4" color="inherit">
        {this.props.title}
      </Typography>
    );
  }

  renderChart(width, height) {
    if (!this.props.data) return <div style={{ width, height }} />;

    return (
      <React.Fragment>
        <svg width={0} height={0}>
          <defs>
            <filter id="worldPieShadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
              <feOffset dx="3" dy="3" result="offsetblur" />
              <feFlood floodColor="rgba(0, 0, 0, 0.85)" />
              <feComposite in2="offsetblur" operator="in" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
        <VictoryChart
          width={width}
          height={height}
          padding={20}
          containerComponent={
            <VictoryContainer
              responsive={false}
              style={{ filter: "url(#worldPieShadow)" }}
            />
          }
          theme={VictoryTheme.material}
        >
          <VictoryPie
            animate
            colorScale={[lightBlue[200], orange[200], amber[200], cyan[200]]}
            data={this.props.data}
            x="vendor"
            y="value"
            innerRadius={60}
            labelRadius={100}
            style={{ labels: { fontSize: 20, fill: "#000000" } }}
          />
          <VictoryAxis
            style={{
              axis: { display: "none" },
              ticks: { display: "none" },
              tickLabels: { display: "none" },
              grid: { display: "none" }
            }}
          />
        </VictoryChart>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        {this.renderTitle()}
        <div>
          <AutoSizer disableHeight>
            {({ width }) => !!width && this.renderChart(width, width)}
          </AutoSizer>
        </div>
      </div>
    );
  }
}

export default MarketShare;
