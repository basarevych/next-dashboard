import React from "react";
import PropTypes from "prop-types";
import StaticMap, { NavigationControl, FlyToInterpolator } from "react-map-gl";
import DeckGL from "deck.gl";
import FlatModeIcon from "@material-ui/icons/Map";
import ThreeDModeIcon from "@material-ui/icons/ThreeSixty";
import LocateUserIcon from "@material-ui/icons/MyLocation";
import ContourViewIcon from "@material-ui/icons/Category";
import StreetsViewIcon from "@material-ui/icons/Streetview";
import SatelliteViewIcon from "@material-ui/icons/Satellite";

export const styles = theme => ({
  layout: {
    width: "100%",
    flex: 1,
    marginTop: "-2rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: 0
    },
    "& canvas": {
      top: 0,
      left: 0
    }
  },
  controls: {
    position: "absolute",
    zIndex: 100,
    top: "10px",
    right: "10px"
  },
  controlsSpacer: {
    height: "10px"
  },
  controlsSelected: {
    background: ["rgba(0, 0, 255, 0.1)", "!important"]
  }
});

class MapsDemo extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.string.isRequired,
    mapboxToken: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      mode: "contour",
      viewState: {
        latitude: 53.35014,
        longitude: -6.266155,
        zoom: 13,
        bearing: 0,
        pitch: 0
      }
    };

    this.updateViewState = this.updateViewState.bind(this);
    this.updateViewportNoPitch = this.updateViewportNoPitch.bind(this);
    this.updateMapMode = this.updateMapMode.bind(this);
    this.updateViewMode = this.updateViewMode.bind(this);
  }

  updateViewState({ viewState }) {
    viewState = { ...this.state.viewState, ...viewState };
    this.setState({ viewState }, this.renderLayers);
  }

  // "Look North" button also tries to reset the pitch, so we prevent this here
  updateViewportNoPitch(viewport) {
    viewport.pitch = this.state.viewState.pitch;
    this.updateViewState({ viewState: viewport });
  }

  updateMapMode(mode) {
    switch (mode) {
      case "flat":
        this.updateViewState({
          viewState: {
            pitch: 0,
            transitionDuration: 2000, // animate the change
            transitionInterpolator: new FlyToInterpolator()
          }
        });
        break;
      case "perspective":
        this.updateViewState({
          viewState: {
            pitch: 60,
            transitionDuration: 2000, // animate the change
            transitionInterpolator: new FlyToInterpolator()
          }
        });
        break;
    }
  }

  updateViewMode(mode) {
    this.setState({ mode });
  }

  async locateUser() {
    let location = await new Promise(resolve => {
      /*
      // Quick test
      return resolve({
        latitude: 35.778105,
        longitude: -78.638618
      });
      */

      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          position =>
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }),
          error => {
            console.error(error);
            resolve(null);
          },
          {
            timeout: 5000,
            enableHighAccuracy: true
          }
        );
      } else {
        console.error("Geolocation IS NOT available");
        resolve(null);
      }
    });

    if (!location) return;

    let state = {
      viewState: {
        ...this.state.viewState, // copy previous values
        ...location,
        transitionDuration: 2000, // add transition animation
        transitionInterpolator: new FlyToInterpolator()
      }
    };

    this.setState(state);
  }

  render() {
    const { mapboxToken, theme } = this.props;
    const {
      viewState: { pitch },
      mode
    } = this.state;

    let mapStyle;
    switch (mode) {
      case "contour":
        mapStyle = "mapbox://styles/mapbox/" + theme + "-v9";
        break;
      case "streets":
        mapStyle = "mapbox://styles/mapbox/streets-v10";
        break;
      case "satellite":
        mapStyle = "mapbox://styles/mapbox/satellite-v9";
        break;
    }

    return (
      <div className={this.props.classes.layout}>
        <DeckGL
          controller
          width="100%"
          height="100%"
          viewState={this.state.viewState}
          getCursor={() => "crosshair"}
          onViewStateChange={this.updateViewState}
        >
          <StaticMap
            reuseMaps
            preventStyleDiffing
            mapboxApiAccessToken={mapboxToken}
            mapStyle={mapStyle}
          >
            <div className={this.props.classes.controls}>
              <NavigationControl
                onViewportChange={this.updateViewportNoPitch}
              />

              <div className={this.props.classes.controlsSpacer} />

              <div className="mapboxgl-ctrl mapboxgl-ctrl-group ">
                <button
                  title="My Location"
                  className="mapboxgl-ctrl-icon "
                  onClick={this.locateUser}
                >
                  <LocateUserIcon />
                </button>
              </div>

              <div className={this.props.classes.controlsSpacer} />

              <div className="mapboxgl-ctrl mapboxgl-ctrl-group ">
                <button
                  title="Flat Mode"
                  className={
                    "mapboxgl-ctrl-icon " +
                    (pitch ? "" : this.props.classes.controlsSelected)
                  }
                  onClick={() => this.updateMapMode("flat")}
                >
                  <FlatModeIcon />
                </button>
                <button
                  title="3D Mode"
                  className={
                    "mapboxgl-ctrl-icon " +
                    (pitch ? this.props.classes.controlsSelected : "")
                  }
                  onClick={() => this.updateMapMode("perspective")}
                >
                  <ThreeDModeIcon />
                </button>
              </div>

              <div className={this.props.classes.controlsSpacer} />

              <div className="mapboxgl-ctrl mapboxgl-ctrl-group ">
                <button
                  title="Contour View"
                  className={
                    "mapboxgl-ctrl-icon " +
                    (mode === "contour"
                      ? this.props.classes.controlsSelected
                      : "")
                  }
                  onClick={() => this.updateViewMode("contour")}
                >
                  <ContourViewIcon />
                </button>
                <button
                  title="Streets View"
                  className={
                    "mapboxgl-ctrl-icon " +
                    (mode === "streets"
                      ? this.props.classes.controlsSelected
                      : "")
                  }
                  onClick={() => this.updateViewMode("streets")}
                >
                  <StreetsViewIcon />
                </button>
                <button
                  title="Satellite View"
                  className={
                    "mapboxgl-ctrl-icon " +
                    (mode === "satellite"
                      ? this.props.classes.controlsSelected
                      : "")
                  }
                  onClick={() => this.updateViewMode("satellite")}
                >
                  <SatelliteViewIcon />
                </button>
              </div>
            </div>
          </StaticMap>
        </DeckGL>
      </div>
    );
  }
}

export default MapsDemo;
