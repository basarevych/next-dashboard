import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import ProfitStat from "./Stat/ProfitStatContainer";
import SalesStat from "./Stat/SalesStatContainer";
import ClientsStat from "./Stat/ClientsStatContainer";
import AvgTimeStat from "./Stat/AvgTimeStatContainer";
import WorldMap from "./WorldMarket/WorldMapContainer";
import MarketShare from "./WorldMarket/MarketShareContainer";
import MarketSpinner from "./WorldMarket/MarketSpinnerContainer";
import DemoTable, {
  defaultDept,
  pageSize,
  sortBy,
  sortDir
} from "./DemoTable/DemoTableContainer";

export const defaultCountry = "WORLD";
export { defaultDept, pageSize, sortBy, sortDir };

export const styles = theme => ({
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.main.spacing
  },
  spinnerWrapper: {
    position: "relative"
  },
  spinner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate3d(-50%, -50%, 0)",
    color: theme.palette.primary.contrastText
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
      isLoaded: true
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
    if (this.state.countryId === id) return;
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
    if (this.isDestroyed || this.state.isLoaded) return;
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
          <Grid item xs={12} sm={6} md={3}>
            <ProfitStat
              label="DASHBOARD_PROFIT_LABEL"
              data={this.props.viewer.profitValues}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SalesStat
              label="DASHBOARD_SALES_LABEL"
              data={this.props.viewer.salesValues}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ClientsStat
              label="DASHBOARD_CLIENTS_LABEL"
              data={this.props.viewer.clientsValues}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
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
            <MarketSpinner isActive={!this.state.isLoaded} />
            <Grow in={this.state.isLoaded}>
              <MarketShare
                selected={this.state.countryId}
                viewer={this.props.viewer}
                onLoaded={this.handleLoaded}
                onSelect={this.handleCountrySelected}
              />
            </Grow>
          </Grid>
          <Grid item xs={12}>
            <DemoTable viewer={this.props.viewer} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
