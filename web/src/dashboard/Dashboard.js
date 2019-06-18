import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ProfitStat from "./stat/ProfitStatContainer";
import SalesStat from "./stat/SalesStatContainer";
import ClientsStat from "./stat/ClientsStatContainer";
import AvgTimeStat from "./stat/AvgTimeStatContainer";
import SalesMap from "./sales/SalesMapContainer";
import StateSales from "./sales/StateSalesContainer";
import Spinner from "./sales/SpinnerContainer";
import DeptEmployees, {
  defaultDept,
  pageSize,
  sortBy,
  sortDir
} from "./employees/DeptEmployeesContainer";

export const defaultState = "New York";
export { defaultDept, pageSize, sortBy, sortDir };

export const styles = theme => ({
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.spacing(2)
  }
});

class Dashboard extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    viewer: PropTypes.object.isRequired,
    fetchCities: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      usCities: null,
      stateName: defaultState,
      isStateLoaded: false
    };

    this.isTransitioning = false;
    this.isDestroyed = false;

    this.handleStateSelected = this.handleStateSelected.bind(this);
    this.handleStateLoaded = this.handleStateLoaded.bind(this);
  }

  async componentDidMount() {
    const response = await this.props.fetchCities();
    if (response.status === 200) {
      const usCities = await response.json();
      if (!this.isDestroyed) this.setState({ usCities });
    }
  }

  componentWillUnmount() {
    this.isDestroyed = true;
  }

  handleStateSelected(stateName) {
    if (
      this.isTransitioning ||
      !this.state.isStateLoaded ||
      this.state.stateName === stateName
    ) {
      return;
    }

    this.isTransitioning = true;
    this.setState({ isStateLoaded: false }, () => {
      setTimeout(() => {
        this.isTransitioning = false;
        if (this.isDestroyed) return;
        this.setState({ stateName });
      }, this.props.theme.transitions.duration.leavingScreen);
    });
  }

  handleStateLoaded() {
    if (this.isDestroyed || this.state.isStateLoaded) return;
    this.setState({ isStateLoaded: true });
  }

  render() {
    return (
      <div className={this.props.classes.layout}>
        <Grid container spacing={2} justify="center">
          <Grid
            container
            spacing={2}
            item
            alignContent="flex-start"
            xs={12}
            sm={12}
            md={3}
          >
            <Grid item xs={12} sm={6} md={12}>
              <ProfitStat
                label="DASHBOARD_PROFIT_LABEL"
                data={this.props.viewer.profitValues}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <SalesStat
                label="DASHBOARD_SALES_LABEL"
                data={this.props.viewer.salesValues}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <ClientsStat
                label="DASHBOARD_CLIENTS_LABEL"
                data={this.props.viewer.clientsValues}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <AvgTimeStat
                label="DASHBOARD_AVG_TIME_LABEL"
                precision={2}
                data={this.props.viewer.avgTimeValues}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            alignItems="stretch"
            item
            xs={12}
            sm={12}
            md
          >
            <Grid item xs={12} md={8}>
              {!this.state.usCities && <Spinner />}
              {!!this.state.usCities && (
                <SalesMap
                  data={this.state.usCities}
                  onSelect={this.handleStateSelected}
                />
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              {!this.state.usCities && <Spinner />}
              {!!this.state.usCities && (
                <StateSales
                  viewer={this.props.viewer}
                  selected={this.state.stateName}
                  onLoaded={this.handleStateLoaded}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              <DeptEmployees viewer={this.props.viewer} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
