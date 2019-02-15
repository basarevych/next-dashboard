import React from "react";
import PropTypes from "prop-types";
import getCountryISO2 from "country-iso-3-to-2";
import { FormattedMessage } from "react-intl";
import { AutoSizer } from "react-virtualized";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import amber from "@material-ui/core/colors/amber";

export const styles = theme => ({
  root: {
    padding: "1rem",
    background: theme.main.paper
  }
});

class WorldMap extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    selected: PropTypes.string,
    onSelect: PropTypes.func.isRequired
  };

  renderMap(width, height) {
    return (
      <React.Fragment>
        <svg width={0} height={0}>
          <defs>
            <filter
              id="worldMapShadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feComponentTransfer in="SourceAlpha">
                <feFuncA type="table" tableValues="1 0" />
              </feComponentTransfer>
              <feGaussianBlur stdDeviation="3" />
              <feOffset dx="5" dy="5" result="offsetblur" />
              <feFlood floodColor="rgba(0, 0, 0, 0.5)" result="color" />
              <feComposite in2="offsetblur" operator="in" />
              <feComposite in2="SourceAlpha" operator="in" />
              <feMerge>
                <feMergeNode in="SourceGraphic" />
                <feMergeNode />
              </feMerge>
            </filter>
          </defs>
        </svg>
        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11, 0, 0]
          }}
          width={width}
          height={height}
        >
          <ZoomableGroup center={[0, 20]} disablePanning>
            <Geographies geography="/static/map/world-50m.json">
              {(geographies, projection) =>
                _.map(
                  geographies,
                  (geography, i) =>
                    geography.id !== "ATA" && (
                      <Geography
                        key={i}
                        onClick={() =>
                          this.props.onSelect(getCountryISO2(geography.id))
                        }
                        geography={geography}
                        projection={projection}
                        style={{
                          default: {
                            fill: "#363940",
                            stroke: lighten("#363940", 0.85),
                            strokeWidth: 0.75,
                            outline: "none",
                            filter: "url(#worldMapShadow)"
                          },
                          hover: {
                            fill: amber[500],
                            stroke: lighten(amber[500], 0.3),
                            strokeWidth: 0.75,
                            outline: "none"
                          },
                          pressed: {
                            fill: amber[200],
                            stroke: lighten(amber[200], 0.3),
                            strokeWidth: 0.75,
                            outline: "none"
                          }
                        }}
                      />
                    )
                )
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Paper className={this.props.classes.root} elevation={4}>
        <AutoSizer disableHeight>
          {({ width }) => !!width && this.renderMap(width, 0.6 * width)}
        </AutoSizer>
        <Typography variant="body2">
          <FormattedMessage id="DASHBOARD_CLICK_MAP_LABEL" />
        </Typography>
      </Paper>
    );
  }
}

export default WorldMap;
