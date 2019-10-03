import React, { useState, useCallback, useMemo } from "react";
import StaticMap, { NavigationControl, FlyToInterpolator } from "react-map-gl";
import DeckGL from "deck.gl";
import { useSelector } from "react-redux";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { makeStyles } from "@material-ui/styles";
import FlatModeIcon from "@material-ui/icons/Map";
import ThreeDModeIcon from "@material-ui/icons/ThreeSixty";
import LocateUserIcon from "@material-ui/icons/MyLocation";
import ContourViewIcon from "@material-ui/icons/Category";
import StreetsViewIcon from "@material-ui/icons/Streetview";
import SatelliteViewIcon from "@material-ui/icons/Satellite";
import { appSelectors } from "../app/state";

const useStyles = makeStyles(theme => ({
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
    top: "100px",
    right: "10px"
  },
  controlsSpacer: {
    height: "10px"
  },
  controlsSelected: {
    background: [fade(theme.palette.secondary.main, 0.5), "!important"]
  }
}));

const initialViewState = {
  latitude: 53.35014,
  longitude: -6.266155,
  zoom: 13,
  bearing: 0,
  pitch: 0
};

function MapsPage(props) {
  const classes = useStyles(props);

  const theme = useSelector(state => appSelectors.getTheme(state));
  const mapboxToken = useSelector(state => appSelectors.getMapboxToken(state));

  const [viewMode, setViewMode] = useState("contour");
  const [viewState, setViewState] = useState(initialViewState);

  const updateViewState = useCallback(
    ({ viewState: newViewState }) => {
      const {
        latitude,
        longitude,
        zoom,
        bearing,
        pitch,
        ...restOfState
      } = newViewState;
      setViewState({
        latitude: _.isUndefined(latitude) ? viewState.latitude : latitude,
        longitude: _.isUndefined(longitude) ? viewState.longitude : longitude,
        zoom: _.isUndefined(zoom) ? viewState.zoom : zoom,
        bearing: _.isUndefined(bearing) ? viewState.bearing : bearing,
        pitch: _.isUndefined(pitch) ? viewState.pitch : pitch,
        ...restOfState
      });
    },
    [viewState]
  );

  // "Look North" button also tries to reset the pitch, so we prevent this here
  const updateViewportNoPitch = useCallback(
    viewport => {
      viewport.pitch = viewState.pitch;
      updateViewState({ viewState: viewport });
    },
    [viewState, updateViewState]
  );

  const updateMapMode = useCallback(
    mode => {
      switch (mode) {
        case "flat":
          updateViewState({
            viewState: {
              pitch: 0,
              transitionDuration: 2000, // animate the change
              transitionInterpolator: new FlyToInterpolator()
            }
          });
          break;
        case "perspective":
          updateViewState({
            viewState: {
              pitch: 60,
              transitionDuration: 2000, // animate the change
              transitionInterpolator: new FlyToInterpolator()
            }
          });
          break;
      }
    },
    [updateViewState]
  );

  const locateUser = useCallback(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position =>
          updateViewState({
            viewState: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              transitionDuration: 2000, // add transition animation
              transitionInterpolator: new FlyToInterpolator()
            }
          }),
        error => {
          console.error(error);
        },
        {
          timeout: 25000,
          enableHighAccuracy: true
        }
      );
    } else {
      console.error("Geolocation IS NOT available");
    }
  }, [updateViewState]);

  const mapStyle = useMemo(() => {
    switch (viewMode) {
      case "contour":
        return "mapbox://styles/mapbox/" + theme + "-v9";
      case "streets":
        return "mapbox://styles/mapbox/streets-v10";
      case "satellite":
        return "mapbox://styles/mapbox/satellite-v9";
    }
    return null;
  }, [viewMode, theme]);

  return (
    <div className={classes.layout}>
      <DeckGL
        controller
        width="100%"
        height="100%"
        viewState={viewState}
        getCursor={_.constant("crosshair")}
        onViewStateChange={updateViewState}
      >
        <StaticMap mapboxApiAccessToken={mapboxToken} mapStyle={mapStyle}>
          <div className={classes.controls}>
            <NavigationControl onViewportChange={updateViewportNoPitch} />

            <div className={classes.controlsSpacer} />

            <div className="mapboxgl-ctrl mapboxgl-ctrl-group ">
              <button
                title="My Location"
                className="mapboxgl-ctrl-icon "
                onClick={locateUser}
              >
                <LocateUserIcon />
              </button>
            </div>

            <div className={classes.controlsSpacer} />

            <div className="mapboxgl-ctrl mapboxgl-ctrl-group ">
              <button
                title="Flat Mode"
                className={
                  "mapboxgl-ctrl-icon " +
                  (viewState.pitch ? "" : classes.controlsSelected)
                }
                onClick={() => updateMapMode("flat")}
              >
                <FlatModeIcon />
              </button>
              <button
                title="3D Mode"
                className={
                  "mapboxgl-ctrl-icon " +
                  (viewState.pitch ? classes.controlsSelected : "")
                }
                onClick={() => updateMapMode("perspective")}
              >
                <ThreeDModeIcon />
              </button>
            </div>

            <div className={classes.controlsSpacer} />

            <div className="mapboxgl-ctrl mapboxgl-ctrl-group ">
              <button
                title="Contour View"
                className={
                  "mapboxgl-ctrl-icon " +
                  (viewMode === "contour" ? classes.controlsSelected : "")
                }
                onClick={() => setViewMode("contour")}
              >
                <ContourViewIcon />
              </button>
              <button
                title="Streets View"
                className={
                  "mapboxgl-ctrl-icon " +
                  (viewMode === "streets" ? classes.controlsSelected : "")
                }
                onClick={() => setViewMode("streets")}
              >
                <StreetsViewIcon />
              </button>
              <button
                title="Satellite View"
                className={
                  "mapboxgl-ctrl-icon " +
                  (viewMode === "satellite" ? classes.controlsSelected : "")
                }
                onClick={() => setViewMode("satellite")}
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

export default MapsPage;
