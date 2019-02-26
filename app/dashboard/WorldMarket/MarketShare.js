import React from "react";
import PropTypes from "prop-types";
import { intlShape, FormattedMessage } from "react-intl";
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
import { getColorStart, getColorEnd } from "../../../common/colors";

export const styles = theme => ({
  root: {
    textAlign: "center",
    color: theme.window.color
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
    onLoaded: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
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
        { force: true }
      );
    }
  }

  renderTitle() {
    return (
      <React.Fragment>
        <Typography variant="h4" color="inherit">
          {_.get(this.props.viewer, "marketSharesByCountry.country") === null
            ? this.props.intl.formatMessage({ id: "DASHBOARD_WORLD_LABEL" })
            : _.get(this.props.viewer, "marketSharesByCountry.country.name")}
        </Typography>
        <Typography variant="body2" color="inherit">
          <FormattedMessage id="DASHBOARD_NOT_REALLY_LABEL" />
        </Typography>
      </React.Fragment>
    );
  }

  renderChart(width, height) {
    const shares = _.get(this.props.viewer, "marketSharesByCountry.shares", []);
    if (!shares.length) return null;

    return (
      <svg width={width} height={height}>
        <defs>
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
        <VictoryChart
          standalone={false}
          width={width}
          height={height}
          padding={{ top: 20, right: 20, bottom: 20, left: 35 }}
          polar
          events={[
            {
              childName: "all",
              eventHandlers: {
                onClick: () => this.props.onSelect("WORLD")
              }
            }
          ]}
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
                  fill: this.props.theme.window.mapColor
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
                  fill: this.props.theme.window.mapColor
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
      </svg>
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
