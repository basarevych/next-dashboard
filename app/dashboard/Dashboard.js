import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import ProfitStat from "./Stat/ProfitStatContainer";
import SalesStat from "./Stat/SalesStatContainer";
import ClientsStat from "./Stat/ClientsStatContainer";
import AvgTimeStat from "./Stat/AvgTimeStatContainer";
import WorldMap from "./WorldMarket/WorldMapContainer";
import MarketShare from "./WorldMarket/MarketShareContainer";

export const defaultCountry = "WORLD";

export const styles = theme => ({
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.main.spacing
  }
});

class Dashboard extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    viewer: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      countryId: defaultCountry,
      isLoaded: false
    };

    this.isTransitioning = false;
    this.isDestroyed = false;

    this.handleCountrySelected = this.handleCountrySelected.bind(this);
    this.handleLoaded = this.handleLoaded.bind(this);
  }

  componentWillUnmount() {
    this.isDestroyed = true;
  }

  handleCountrySelected(id) {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.setState({ isLoaded: false }, () => {
      setTimeout(() => {
        this.isTransitioning = false;
        if (this.isDestroyed) return;
        this.setState({ countryId: id });
      }, this.props.theme.transitions.duration.leavingScreen);
    });
  }

  handleLoaded() {
    if (this.isDestroyed) return;
    this.setState({ isLoaded: true });
  }

  render() {
    return (
      <div className={this.props.classes.layout}>
        <Grid
          container
          spacing={this.props.theme.main.spacing}
          alignItems="center"
        >
          <Grid item xs={12} md={3}>
            <ProfitStat
              label="DASHBOARD_PROFIT_LABEL"
              data={this.props.viewer.profitValues}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <SalesStat
              label="DASHBOARD_SALES_LABEL"
              data={this.props.viewer.salesValues}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <ClientsStat
              label="DASHBOARD_CLIENTS_LABEL"
              data={this.props.viewer.clientsValues}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <AvgTimeStat
              label="DASHBOARD_AVG_TIME_LABEL"
              precision={2}
              data={this.props.viewer.avgTimeValues}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <WorldMap
              selected={this.state.countryId}
              onSelect={this.handleCountrySelected}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Slide direction="left" in={this.state.isLoaded}>
              <MarketShare
                selected={this.state.countryId}
                viewer={this.props.viewer}
                onLoaded={this.handleLoaded}
              />
            </Slide>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
