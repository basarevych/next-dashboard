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

export const styles = () => ({
  root: {
    padding: "1rem"
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
                          fill: this.props.theme.chart.mapBackground,
                          stroke: this.props.theme.chart.mapColor,
                          strokeWidth: 1,
                          outline: "none"
                        },
                        hover: {
                          fill: this.props.theme.chart.mapHoverBackground,
                          stroke: this.props.theme.chart.mapColor,
                          strokeWidth: 1,
                          outline: "none"
                        },
                        pressed: {
                          fill: this.props.theme.chart.mapSelectedBackground,
                          stroke: this.props.theme.chart.mapColor,
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
      <Paper className={this.props.classes.root}>
        {this.renderMap()}
        <Typography variant="body2">
          <FormattedMessage id="DASHBOARD_CLICK_MAP_LABEL" />
        </Typography>
      </Paper>
    );
  }
}

export default WorldMap;
