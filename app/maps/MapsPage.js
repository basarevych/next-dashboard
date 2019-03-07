import React from "react";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import Map from "./MapContainer";

export const styles = theme => ({
  layout: {
    width: "100%",
    flex: 1,
    marginTop: "-2rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: 0
    }
  }
});

class MapsPage extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className={this.props.classes.layout}>
        <AutoSizer>
          {({ width, height }) => (
            <Map
              width={width}
              height={height}
              center={{ lat: 53.342686, lng: -6.267118 }}
              marker={{ lat: 53.341874, lng: -6.286709 }}
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}

export default MapsPage;
