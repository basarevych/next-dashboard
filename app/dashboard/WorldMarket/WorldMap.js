import React from "react";
import PropTypes from "prop-types";
import getCountryISO2 from "country-iso-3-to-2";
import { FormattedMessage } from "react-intl";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export const styles = theme => ({
  root: {
    padding: "1rem",
    background: theme.window.background
  }
});

class WorldMap extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    selected: PropTypes.string,
    onSelect: PropTypes.func.isRequired
  };

  renderMap() {
    return (
      <ComposableMap
        rojectionConfig={{
          scale: 200,
          rotation: [-10, 0, 0]
        }}
        style={{ width: "100%", height: "auto" }}
        defs={
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
              <feGaussianBlur stdDeviation="2" />
              <feOffset dx="4" dy="4" result="offsetblur" />
              <feFlood floodColor="rgba(0, 0, 0, 0.8)" result="color" />
              <feComposite in2="offsetblur" operator="in" />
              <feComposite in2="SourceAlpha" operator="in" />
              <feMerge>
                <feMergeNode in="SourceGraphic" />
                <feMergeNode />
              </feMerge>
            </filter>
          </defs>
        }
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
                      onClick={() => {
                        this.props.onSelect(getCountryISO2(geography.id));
                      }}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: this.props.theme.window.mapBackground,
                          stroke: this.props.theme.palette.primary.contrastText,
                          strokeWidth: 1,
                          outline: "none",
                          filter: "url(#worldMapShadow)"
                        },
                        hover: {
                          fill: this.props.theme.window.mapHoverBackground,
                          stroke: this.props.theme.palette.primary.contrastText,
                          strokeWidth: 1,
                          outline: "none"
                        },
                        pressed: {
                          fill: this.props.theme.window.mapSelectedBackground,
                          stroke: this.props.theme.palette.primary.contrastText,
                          strokeWidth: 1,
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
    );
  }

  render() {
    return (
      <Paper className={this.props.classes.root} elevation={4}>
        {this.renderMap()}
        <Typography variant="body2">
          <FormattedMessage id="DASHBOARD_CLICK_MAP_LABEL" />
        </Typography>
      </Paper>
    );
  }
}

export default WorldMap;
