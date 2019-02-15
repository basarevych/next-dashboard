import React from "react";
import PropTypes from "prop-types";
import { intlShape, FormattedMessage } from "react-intl";
import { fromGlobalId } from "graphql-relay";
import Grid from "@material-ui/core/Grid";
import Stat from "./StatContainer";
import WorldMap from "./WorldMapContainer";
import MarketShare from "./MarketShareContainer";

export const styles = theme => ({
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.main.spacing
  }
});

class Dashboard extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    viewer: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      countryId: null,
      countryName: null,
      countryShares: null
    };

    this.handleCountrySelected = this.handleCountrySelected.bind(this);
  }

  componentDidMount() {
    this.handleCountrySelected();
  }

  getCountry(id) {
    return _.find(
      _.get(this.props.viewer, "marketShares.edges", []),
      edge =>
        _.toLower(fromGlobalId(_.get(edge, "node.id")).id) === _.toLower(id)
    );
  }

  handleCountrySelected(id) {
    let country, name, shares;
    if (id) country = this.getCountry(id);
    if (country) {
      name = _.get(country, "node.country");
      shares = _.get(country, "node.shares");
    } else {
      id = "WORLD";
      country = this.getCountry(id);
      name = this.props.intl.formatMessage({ id: "DASHBOARD_WORLD_LABEL" });
      shares = _.get(country, "node.shares");
    }

    this.setState({
      countryId: id,
      countryName: name,
      countryShares: shares
    });
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
            <Stat
              label="DASHBOARD_PROFIT_LABEL"
              data={_.map(
                _.get(this.props.viewer, "profitValues.edges", []),
                edge => ({
                  date: new Date(_.get(edge, "node.date")),
                  value: _.get(edge, "node.profit")
                })
              )}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Stat
              label="DASHBOARD_SALES_LABEL"
              data={_.map(
                _.get(this.props.viewer, "salesValues.edges", []),
                edge => ({
                  date: new Date(_.get(edge, "node.date")),
                  value: _.get(edge, "node.sales")
                })
              )}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Stat
              label="DASHBOARD_CLIENTS_LABEL"
              data={_.map(
                _.get(this.props.viewer, "clientsValues.edges", []),
                edge => ({
                  date: new Date(_.get(edge, "node.date")),
                  value: _.get(edge, "node.clients")
                })
              )}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Stat
              label="DASHBOARD_AVG_TIME_LABEL"
              precision={2}
              data={_.map(
                _.get(this.props.viewer, "avgTimeValues.edges", []),
                edge => ({
                  date: new Date(_.get(edge, "node.date")),
                  value: _.get(edge, "node.avgTime")
                })
              )}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <WorldMap
              selected={this.state.countryId}
              onSelect={this.handleCountrySelected}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <MarketShare
              title={this.state.countryName}
              data={this.state.countryShares}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
