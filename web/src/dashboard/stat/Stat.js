import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { intlShape, FormattedMessage, FormattedNumber } from "react-intl";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { fade } from "@material-ui/core/styles/colorManipulator";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import Chart from "./Chart";

export const styles = theme => ({
  root: {
    marginBottom: "1rem",
    color: theme.chart.statColor,
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    position: "relative",
    "& svg": {
      overflow: ["visible", "!important"]
    }
  },
  delta: {
    position: "absolute",
    top: 0,
    right: 0,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    padding: "0.25rem 0.5rem"
  },
  stat: {
    padding: "1rem",
    width: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  increasing: {
    color: "#ffffff",
    background: fade(green[800], 0.65)
  },
  descreasing: {
    color: "#ffffff",
    background: fade(red[800], 0.65)
  },
  chart: {
    marginTop: "-1rem"
  }
});

class Stat extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    data: PropTypes.object,
    precision: PropTypes.number
  };

  static defaultProps = {
    precision: 0
  };

  getData() {
    return _.map(_.get(this.props.data, "edges", []), edge => {
      const date = new Date(_.get(edge, "node.date"));
      const value = _.get(edge, "node.value");
      return {
        date,
        value,
        tooltip:
          this.props.intl.formatMessage({ id: this.props.label }) +
          ": " +
          value +
          "\n" +
          this.props.intl.formatDate(date)
      };
    });
  }

  renderStat() {
    const data = this.getData();
    if (!data.length) return null;

    return (
      <div className={this.props.classes.stat}>
        <Typography variant="h3" color="inherit">
          <FormattedNumber
            value={_.last(data).value}
            maximumFractionDigits={this.props.precision}
          />
        </Typography>
        <Typography variant="overline" color="inherit">
          <FormattedMessage id={this.props.label} />
        </Typography>
      </div>
    );
  }

  renderDelta() {
    const data = this.getData();
    if (data.length < 2) return null;

    const items = _.slice(data, -2);
    const delta = (100 * (items[1].value - items[0].value)) / items[0].value;
    const symbol = delta > 0 ? "▲" : delta < 0 ? "▼" : "";
    const className =
      delta > 0 ? "increasing" : delta < 0 ? "descreasing" : null;

    return (
      <div
        className={classNames(
          this.props.classes.delta,
          className && this.props.classes[className]
        )}
      >
        {symbol}
        <FormattedNumber value={Math.abs(delta)} maximumFractionDigits={0} />%
      </div>
    );
  }

  render() {
    return (
      <Paper className={this.props.classes.root}>
        {this.renderDelta()}
        {this.renderStat()}
        <Chart
          className={this.props.classes.chart}
          data={this.getData()}
          colors={{
            grid: fade(this.props.theme.palette.text.secondary, 0.25),
            area: this.props.theme.chart.areaColor,
            line: this.props.theme.chart.lineColor
          }}
        />
      </Paper>
    );
  }
}

export default Stat;
