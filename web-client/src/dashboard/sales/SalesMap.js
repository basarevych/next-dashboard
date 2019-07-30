import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { AutoSizer } from "react-virtualized";
import StaticMap, { NavigationControl } from "react-map-gl";
import { PhongMaterial } from "@luma.gl/core";
import DeckGL, {
  AmbientLight,
  PointLight,
  LightingEffect,
  LinearInterpolator,
  HexagonLayer,
  GeoJsonLayer
} from "deck.gl";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import states from "../../../data/gz_2010_us_040_00_500k.json";

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

const lightingEffect = new LightingEffect({
  ambientLight,
  pointLight1,
  pointLight2
});

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
  [30, 136, 229],
  [33, 150, 243],
  [66, 165, 245],
  [100, 181, 246],
  [144, 202, 249],
  [187, 222, 251]
];

const elevationScale = { min: 1, max: 50 };

const bearingInterpolator = new LinearInterpolator(["bearing"]);

export const styles = theme => ({
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
});

class SalesMap extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    theme: PropTypes.string.isRequired,
    mapboxToken: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      viewState: {
        latitude: 39.8097343,
        longitude: -98.5556199,
        zoom: 3,
        bearing: 0,
        pitch: 65
      },
      tooltip: null,
      elevationScale: elevationScale.min,
      data: null
    };

    this.isHovered = false;
    this.isDestroyed = false;
    this.intervalTimer = null;

    this.animateHeight = this.animateHeight.bind(this);
    this.cancelHeightAnimation = this.cancelHeightAnimation.bind(this);

    this.rotateCamera = this.rotateCamera.bind(this);
    this.cancelCameraRotation = this.cancelCameraRotation.bind(this);

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleHeightTick = this.handleHeightTick.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateViewState = this.updateViewState.bind(this);
    this.updateViewportNoPitch = this.updateViewportNoPitch.bind(this);
  }

  componentDidMount() {
    const data = _.reduce(
      this.props.data,
      (acc, cur) => {
        let population = Math.floor(cur.population / 1000);
        let point = { lat: cur.lat, lng: cur.lng };
        for (let i = 0; i < population; i++) acc.push(point);
        return acc;
      },
      []
    );

    this.setState({ data }, () => {
      setTimeout(() => {
        this.animateHeight();
        this.rotateCamera();
      }, 1500);
    });
  }

  componentWillUnmount() {
    this.isDestroyed = true;

    this.cancelHeightAnimation();
    this.cancelCameraRotation();
  }

  handleMouseOver() {
    this.isHovered = true;
    this.cancelCameraRotation();
  }

  handleMouseOut() {
    this.isHovered = false;
    this.rotateCamera();
  }

  handleHover({ object, x, y }) {
    const tooltip = object ? { text: object.properties.NAME, x, y } : null;
    this.setState({ tooltip });
  }

  handleClick({ object }) {
    const state = object && object.properties.NAME;
    if (state) this.props.onSelect(state);
  }

  animateHeight() {
    this.cancelHeightAnimation();
    this.intervalTimer = setInterval(this.handleHeightTick, 20);
  }

  cancelHeightAnimation() {
    if (this.intervalTimer) {
      clearInterval(this.intervalTimer);
      this.intervalTimer = null;
    }
  }

  handleHeightTick() {
    if (this.isDestroyed) return;
    if (this.state.elevationScale < elevationScale.max) {
      this.setState({ elevationScale: this.state.elevationScale + 2 });
    } else {
      this.setState({ elevationScale: elevationScale.max });
      this.cancelHeightAnimation();
    }
  }

  rotateCamera() {
    if (this.isDestroyed || this.isHovered) return;
    const bearing = this.state.viewState.bearing - 120;
    if (isFinite(bearing)) {
      this.updateViewState({
        viewState: {
          bearing,
          transitionDuration: 30000,
          bearingInterpolator,
          onTransitionEnd: this.rotateCamera
        }
      });
    } else {
      this.updateViewState(
        {
          viewState: {
            bearing: 0
          }
        },
        this.rotateCamera
      );
    }
  }

  cancelCameraRotation() {
    if (this.isDestroyed || !this.isHovered) return;
    const bearing = this.state.viewState.bearing - 0.1;
    this.updateViewState({
      viewState: {
        bearing
      }
    });
  }

  updateViewState({ viewState }, cb) {
    const { latitude, longitude, zoom, bearing, pitch } = this.state.viewState;
    this.setState({
      viewState: {
        latitude,
        longitude,
        zoom,
        bearing,
        pitch,
        ...viewState
      },
      cb
    });
  }

  // "Look North" button also tries to reset the pitch, so we prevent this here
  updateViewportNoPitch(viewport) {
    viewport.pitch = this.state.viewState.pitch;
    this.updateViewState({ viewState: viewport });
  }

  renderTitle() {
    return (
      <div className={this.props.classes.title}>
        <Typography variant="h4" color="inherit">
          <FormattedMessage id="DASHBOARD_US_SALES_LABEL" />
        </Typography>
      </div>
    );
  }

  renderTooltip() {
    let tooltip = this.state.tooltip;
    if (!tooltip) return null;
    return (
      <div
        className={this.props.classes.tooltip}
        style={{ left: tooltip.x + 10, top: tooltip.y + 10 }}
      >
        <div className={this.props.classes.tooltipText}>{tooltip.text}</div>
      </div>
    );
  }

  renderLayers() {
    return [
      new HexagonLayer({
        id: "heatmap-layer",
        data: this.state.data,
        pickable: false,
        extruded: true,
        opacity: 1,
        coverage: 0.75,
        radius: 30000,
        colorRange:
          this.props.theme === "dark" ? colorRangeDark : colorRangeLight,
        elevationRange: [0, 20000],
        material,
        elevationScale: this.state.elevationScale,
        getPosition: d => [d.lng, d.lat]
      }),
      new GeoJsonLayer({
        id: "geojson-layer",
        data: states,
        pickable: true,
        stroked: true,
        filled: true,
        extruded: false,
        lineWidthMinPixels: 1,
        lineWidthMaxPixels: 1,
        autoHighlight: true,
        highlightColor:
          this.props.theme === "dark"
            ? [160, 160, 180, 100]
            : [64, 64, 64, 100],
        getFillColor:
          this.props.theme === "dark" ? [160, 160, 180, 25] : [0, 0, 0, 25],
        getLineColor:
          this.props.theme === "dark" ? [255, 255, 255, 100] : [121, 85, 72],
        onHover: this.handleHover,
        onClick: this.handleClick
      })
    ];
  }

  renderMap(width, height) {
    if (!this.state.data) return <div style={{ width, height }} />;

    const { mapboxToken, theme } = this.props;
    const mapStyle = `mapbox://styles/mapbox/${theme}-v9`;

    return (
      <div style={{ width, height }}>
        <DeckGL
          controller
          width="100%"
          height="100%"
          viewState={this.state.viewState}
          layers={this.renderLayers()}
          effects={[lightingEffect]}
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
            </div>
          </StaticMap>
        </DeckGL>
      </div>
    );
  }

  render() {
    return (
      <div
        className={this.props.classes.root}
        onMouseOverCapture={this.handleMouseOver}
        onMouseOutCapture={this.handleMouseOut}
      >
        <Paper>
          {this.renderTitle()}
          <div>
            <AutoSizer disableHeight>
              {({ width }) => !!width && this.renderMap(width, 0.7 * width)}
            </AutoSizer>
          </div>
        </Paper>
        <div className={this.props.classes.links}>
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
        {this.renderTooltip()}
      </div>
    );
  }
}

export default SalesMap;
