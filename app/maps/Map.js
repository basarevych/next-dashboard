import React from "react";
import PropTypes from "prop-types";
import { GoogleMap, Marker } from "react-google-maps";

class Map extends React.PureComponent {
  static pointShape = PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  });

  static propTypes = {
    zoom: PropTypes.number,
    center: Map.pointShape.isRequired,
    marker: Map.pointShape.isRequired
  };

  static defaultProps = { zoom: 14 };
  render() {
    return (
      <GoogleMap
        defaultZoom={this.props.zoom}
        defaultCenter={{
          lat: this.props.center.lat,
          lng: this.props.center.lng
        }}
      >
        <Marker
          position={{ lat: this.props.marker.lat, lng: this.props.marker.lng }}
        />
      </GoogleMap>
    );
  }
}
export default Map;
