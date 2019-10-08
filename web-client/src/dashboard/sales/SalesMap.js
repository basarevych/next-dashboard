import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useMemo
} from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import StaticMap, { NavigationControl } from "react-map-gl";
import { PhongMaterial } from "@luma.gl/core";
import DeckGL, {
  AmbientLight,
  PointLight,
  LightingEffect,
  HexagonLayer,
  GeoJsonLayer
} from "deck.gl";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import { appSelectors } from "../../app/state";
import { dashboardOperations } from "../state";
import useAnimation from "../../app/lib/useAnimation.js";

const useIsomorphicLayoutEffect = process.browser ? useLayoutEffect : useEffect;

const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 1.0
});

const pointLight1 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-98.5556199, 39.8097343, 80000]
});

const pointLight2 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-98.5556199, 39.8097343, 20000]
});

const lightingEffects = [
  new LightingEffect({
    ambientLight,
    pointLight1,
    pointLight2
  })
];

const material = new PhongMaterial({
  ambient: 0.64,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [100, 100, 100]
});

const colorRangeDark = [
  [251, 140, 0],
  [255, 152, 0],
  [255, 167, 38],
  [255, 183, 77],
  [255, 204, 128],
  [255, 224, 178]
];

const colorRangeLight = [
  [23, 189, 244],
  [61, 202, 246],
  [99, 115, 247],
  [129, 212, 250],
  [179, 229, 252],
  [225, 245, 254]
];

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    "& canvas": {
      borderRadius: theme.shape.borderRadius,
      top: 0,
      left: 0
    }
  },
  title: {
    position: "absolute",
    left: 10,
    top: 10,
    zIndex: 2,
    color:
      theme.name === "dark"
        ? theme.palette.text.primary
        : theme.palette.primary.main,
    textShadow:
      theme.name === "dark" ? "2px 2px 3px #000000" : "2px 2px 3px #ffffff"
  },
  map: {
    width: "100%",
    height: "100%",
    minHeight: 500
  },
  controls: {
    position: "absolute",
    zIndex: 100,
    top: "10px",
    right: "10px"
  },
  links: {
    display: "flex",
    justifyContent: "space-between"
  },
  tooltip: {
    pointerEvents: "none",
    position: "absolute"
  },
  tooltipText: {
    color: "#ffffff",
    background: "#333333",
    padding: "5px"
  }
}));

const initialViewState = {
  latitude: 39.8097343,
  longitude: -98.5556199,
  zoom: 3.3,
  bearing: 0,
  pitch: 0
};

function SalesMap(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [viewState, setViewState] = useState(initialViewState);
  const [finalViewState, setFinalViewState] = useState(initialViewState);
  const [tooltip, setTooltip] = useState(null);
  const [elevationScale, setElevationScale] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPitched, setIsPitched] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [pitchDuration, setPitchDuration] = useState(0);
  const pitchAnimation = useAnimation(pitchDuration);

  const [bearingDuration, setBearingDuration] = useState(0);
  const bearingAnimation = useAnimation(bearingDuration);

  const theme = useSelector(appSelectors.getTheme);
  const mapboxToken = useSelector(appSelectors.getMapboxToken);
  const isSubscribed = useSelector(appSelectors.isSubscribed);

  const updateViewState = useCallback(
    ({ viewState: newViewState }) => {
      const { latitude, longitude, zoom, bearing, pitch } = newViewState;
      setViewState({
        latitude:
          typeof latitude === "undefined" ? viewState.latitude : latitude,
        longitude:
          typeof longitude === "undefined" ? viewState.longitude : longitude,
        zoom: typeof zoom === "undefined" ? viewState.zoom : zoom,
        bearing: typeof bearing === "undefined" ? viewState.bearing : bearing,
        pitch: typeof pitch === "undefined" ? viewState.pitch : pitch
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
    [viewState]
  );

  const handleMouseOver = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseOut = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleHover = useCallback(({ object, x, y }) => {
    const tooltip = object ? { text: object.properties.NAME, x, y } : null;
    setTooltip(tooltip);
  }, []);

  const handleClick = useCallback(
    ({ object }) => {
      const state = object && object.properties.NAME;
      if (state && isSubscribed)
        dispatch(dashboardOperations.setState({ state }));
    },
    [isSubscribed]
  );

  useEffect(
    // parse the data
    () => {
      setData(
        (props.data || []).reduce((acc, cur) => {
          let population = Math.floor(cur.population / 1000);
          let point = { lat: cur.lat, lng: cur.lng };
          for (let i = 0; i < population; i++) acc.push(point);
          return acc;
        }, [])
      );
    },
    [props.data]
  );

  useEffect(
    // activate animations after a delay
    () => {
      let isDestroyed = false;

      setTimeout(() => {
        if (isDestroyed) return;
        setIsLoaded(true);
      }, 2000);

      return () => {
        isDestroyed = true;
      };
    },
    []
  );

  useEffect(
    // animate raising the hexagon bars
    () => {
      if (!isLoaded) return;

      let elevationTimer = null;
      if (elevationScale < 50) {
        let newElevationScale = elevationScale + 2;
        if (newElevationScale > 50) newElevationScale = 50;
        elevationTimer = setTimeout(() => {
          elevationTimer = null;
          setElevationScale(newElevationScale);
        });
      }

      return () => {
        if (elevationTimer) {
          clearTimeout(elevationTimer);
          elevationTimer = null;
        }
      };
    },
    [isLoaded, elevationScale]
  );

  useEffect(
    // pitch the map
    () => {
      if (!isLoaded || isPitched) return;

      if (pitchDuration === 0) {
        setPitchDuration(2000);
      } else if (pitchAnimation === 1) {
        setViewState(state => ({ ...state, pitch: 60 }));
        setIsPitched(true);
        setPitchDuration(0);
      }
    },
    [isLoaded, isPitched, pitchDuration, pitchAnimation]
  );

  useEffect(
    // and rotate the map when not hovered
    () => {
      if (!isLoaded || !isPitched) return;

      if (bearingDuration === 0 && !isHovered) {
        setBearingDuration(25000);
      } else if (
        bearingAnimation === 1 ||
        (bearingDuration !== 0 && isHovered)
      ) {
        setViewState(state => ({
          ...state,
          bearing: state.bearing - 100 * bearingAnimation
        }));
        setBearingDuration(0);
      }
    },
    [isLoaded, isPitched, isHovered, bearingDuration, bearingAnimation]
  );

  useIsomorphicLayoutEffect(() => {
    const state = { ...viewState };
    state.pitch += pitchAnimation * 60;
    state.bearing -= bearingAnimation * 100;
    setFinalViewState(state);
  }, [viewState, pitchAnimation, bearingAnimation]);

  const layers = useMemo(() => {
    const layers = [];
    if (data.length) {
      layers.push(
        new HexagonLayer({
          id: "heatmap-layer",
          data,
          pickable: false,
          extruded: true,
          opacity: 1,
          coverage: 0.75,
          radius: 30000,
          colorRange: theme === "dark" ? colorRangeDark : colorRangeLight,
          elevationRange: [0, 20000],
          material,
          elevationScale,
          getPosition: d => [d.lng, d.lat]
        })
      );
    }
    if (props.states) {
      layers.push(
        new GeoJsonLayer({
          id: "geojson-layer",
          data: props.states,
          pickable: true,
          stroked: true,
          filled: true,
          extruded: false,
          lineWidthMinPixels: 1,
          lineWidthMaxPixels: 1,
          autoHighlight: true,
          highlightColor: [160, 160, 180, 100],
          getFillColor: [160, 160, 180, 25],
          getLineColor: theme === "dark" ? [255, 255, 255, 100] : [0, 0, 0, 25],
          onHover: handleHover,
          onClick: handleClick
        })
      );
    }
    return layers;
  }, [props.states, data, elevationScale, theme, handleClick]);

  const crosshair = useCallback(() => "crosshair", []);

  return (
    <div
      className={classes.root}
      onMouseOverCapture={handleMouseOver}
      onMouseOutCapture={handleMouseOut}
    >
      <Paper>
        <div className={classes.title}>
          <Typography variant="h4" color="inherit">
            <FormattedMessage id="DASHBOARD_US_SALES_LABEL" />
          </Typography>
        </div>
        <div className={classes.map}>
          <DeckGL
            controller
            viewState={finalViewState}
            layers={layers}
            effects={lightingEffects}
            getCursor={crosshair}
            onViewStateChange={updateViewState}
          >
            <StaticMap
              mapboxApiAccessToken={mapboxToken}
              mapStyle={`mapbox://styles/mapbox/${theme}-v9`}
            >
              <div className={classes.controls}>
                <NavigationControl onViewportChange={updateViewportNoPitch} />
              </div>
            </StaticMap>
          </DeckGL>
        </div>
      </Paper>
      <div className={classes.links}>
        <Link
          color="primary"
          target="_blank"
          href="https://simplemaps.com/data/us-cities"
        >
          https://simplemaps.com/data/us-cities
        </Link>
        <Link color="primary" target="_blank" href="https://www.census.gov">
          https://www.census.gov
        </Link>
      </div>
      {!!tooltip && (
        <div
          className={classes.tooltip}
          style={{ left: tooltip.x + 10, top: tooltip.y + 10 }}
        >
          <div className={classes.tooltipText}>{tooltip.text}</div>
        </div>
      )}
    </div>
  );
}

SalesMap.propTypes = {
  states: PropTypes.object,
  data: PropTypes.array
};

export default SalesMap;
