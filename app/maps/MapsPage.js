import React from "react";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import isRouteAllowed from "../../common/isRouteAllowed";
import Map from "./MapContainer";

export const styles = () => ({
  layout: {
    width: "100%",
    flex: 1,
    marginTop: "-2rem"
  }
});

class MapsPage extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    userRoles: PropTypes.array.isRequired
  };

  render() {
    if (!isRouteAllowed("/maps", this.props.userRoles)) return null;

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
