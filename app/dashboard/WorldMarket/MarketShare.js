import React from "react";
import PropTypes from "prop-types";
import { intlShape } from "react-intl";
import { AutoSizer } from "react-virtualized";
import {
  VictoryChart,
  VictoryContainer,
  VictoryStack,
  VictoryBar,
  VictoryAxis,
  VictoryLegend,
  VictoryTheme
} from "victory";
import Typography from "@material-ui/core/Typography";
import amber from "@material-ui/core/colors/amber";
import { getColorStart, getColorEnd } from "../../../common/colors";

export const styles = () => ({
  root: {
    textAlign: "center",
    color: amber[500]
  }
});

class MarketShare extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    relay: PropTypes.object.isRequired,
    selected: PropTypes.string.isRequired,
    viewer: PropTypes.object.isRequired,
    style: PropTypes.object,
    onLoaded: PropTypes.func.isRequired
  };

  componentDidMount() {
    setTimeout(() => this.props.onLoaded());
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selected !== this.props.selected) {
      this.props.relay.refetch(
        { country: this.props.selected },
        null,
        () => this.props.onLoaded(),
        {
          force: true
        }
      );
    }
  }

  renderTitle() {
    return (
      <Typography variant="h4" color="inherit">
        {_.get(this.props.viewer, "marketSharesByCountry.country") === null
          ? this.props.intl.formatMessage({ id: "DASHBOARD_WORLD_LABEL" })
          : _.get(this.props.viewer, "marketSharesByCountry.country.name")}
      </Typography>
    );
  }

  renderChart(width, height) {
    const shares = _.get(this.props.viewer, "marketSharesByCountry.shares", []);
    if (!shares.length) return null;

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
            {_.map([0, 1, 2, 3], index => {
              const [r1, g1, b1] = getColorStart(index, 4);
              const [r2, g2, b2] = getColorEnd(index, 4);
              return (
                <linearGradient
                  key={`gradient-${index}`}
                  id={`worldPieGradient${index + 1}`}
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor={`rgba(${r1}, ${g1}, ${b1})`} />
                  <stop offset="100%" stopColor={`rgba(${r2}, ${g2}, ${b2})`} />
                </linearGradient>
              );
            })}
          </defs>
        </svg>
        <VictoryChart
          width={width}
          height={height}
          padding={20}
          polar
          containerComponent={
            <VictoryContainer
              responsive={false}
              style={{ filter: "url(#worldPieShadow)" }}
            />
          }
          theme={_.merge({}, VictoryTheme.material, {
            axis: {
              style: {
                axis: { display: "none" },
                ticks: { display: "none" },
                tickLabels: { display: "none" },
                grid: { display: "none" }
              }
            },
            legend: {
              colorScale: [
                "url(#worldPieGradient1)",
                "url(#worldPieGradient2)",
                "url(#worldPieGradient3)",
                "url(#worldPieGradient4)"
              ],
              style: {
                labels: {
                  fill: "#ffffff"
                }
              }
            },
            stack: {
              colorScale: [
                "url(#worldPieGradient1)",
                "url(#worldPieGradient2)",
                "url(#worldPieGradient3)",
                "url(#worldPieGradient4)"
              ],
              style: {
                labels: {
                  fill: "#ffffff"
                }
              }
            }
          })}
        >
          <VictoryAxis />
          <VictoryStack labels={d => d.vendor}>
            {_.map([0, 1, 2, 3], index => (
              <VictoryBar
                key={`bar-${index}`}
                data={shares}
                x="name"
                y={d => d.values[index]}
              />
            ))}
          </VictoryStack>
          <VictoryLegend
            orientation="vertical"
            gutter={20}
            data={[
              { name: "Q1" },
              { name: "Q2" },
              { name: "Q3" },
              { name: "Q4" }
            ]}
          />
        </VictoryChart>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className={this.props.classes.root} style={this.props.style}>
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