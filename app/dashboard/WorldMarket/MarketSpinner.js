import React from "react";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import CircularProgress from "@material-ui/core/CircularProgress";

export const styles = theme => ({
  root: {
    position: "relative"
  },
  spinnerWrapper: {
    position: "absolute"
  },
  spinner: {
    position: "absolute",
    width: 60,
    height: 60,
    top: "50%",
    left: "50%",
    transform: "translate3d(-50%, -50%, 0)",
    color: theme.main.color
  }
});

class MarketSpinner extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <AutoSizer disableHeight>
          {({ width }) => {
            if (!width || !this.props.isActive) return null;
            return (
              <div
                className={this.props.classes.spinnerWrapper}
                style={{ width, height: width }}
              >
                <div className={this.props.classes.spinner}>
                  <CircularProgress color="inherit" size={60} />
                </div>
              </div>
            );
          }}
        </AutoSizer>
      </div>
    );
  }
}

export default MarketSpinner;
