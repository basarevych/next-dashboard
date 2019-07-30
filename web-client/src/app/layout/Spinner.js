import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";

export const styles = theme => ({
  backdrop: {
    pointerEvents: "none",
    background: theme.main.backdrop,
    opacity: 0.8,
    zIndex: 10000,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  spinner: {
    position: "fixed",
    width: 60,
    top: "50vh",
    left: "50vw",
    transform: "translate3d(-50%, -50%, 0)",
    color: theme.main.spinner
  }
});

class Spinner extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className={this.props.classes.backdrop}>
        <div className={this.props.classes.spinner}>
          <CircularProgress color="inherit" size={60} />
        </div>
      </div>
    );
  }
}

export default Spinner;
