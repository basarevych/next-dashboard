import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import { authSelectors } from "../auth/state";
import MapComponent from "./Map";

const Map = withScriptjs(withGoogleMap(MapComponent));

const mapStateToProps = state => {
  return {
    googleMapsKey: authSelectors.getGoogleMapsKey(state)
  };
};

const MapContainer = connect(
  mapStateToProps,
  null
)(({ width, height, googleMapsKey, ...props }) => (
  <Map
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMapsKey}&v=3.exp&libraries=geometry,drawing,places`}
    loadingElement={<div style={{ height: "100%" }} />}
    containerElement={<div style={{ width, height }} />}
    mapElement={<div style={{ height: "100%" }} />}
    {...props}
  />
));

MapContainer.propTypes = {
  ...MapComponent.propTypes,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default MapContainer;
