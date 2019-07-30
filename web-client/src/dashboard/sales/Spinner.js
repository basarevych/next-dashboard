import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";

export const styles = () => ({
  root: {
    width: "100%",
    height: "100%",
    minHeight: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

class Spinner extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <CircularProgress
          className={this.props.classes.spinner}
          color="inherit"
          size={60}
        />
      </div>
    );
  }
}

export default Spinner;
