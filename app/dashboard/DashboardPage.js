import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-relay";
import { NextQueryRenderer } from "../app/providers/Relay";
import Dashboard, { defaultCountry } from "./DashboardContainer";

const defaultVariables = { country: defaultCountry };

export const query = graphql`
  query DashboardPageQuery($country: ID) {
    viewer {
      profitValues {
        ...ProfitStatContainer_data
      }
      salesValues {
        ...SalesStatContainer_data
      }
      clientsValues {
        ...ClientsStatContainer_data
      }
      avgTimeValues {
        ...AvgTimeStatContainer_data
      }
      ...MarketShareContainer_viewer @arguments(country: $country)
    }
  }
`;

class DashboardPage extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };

  static async getInitialProps({ statusCode, fetchQuery }) {
    if (statusCode !== 200) return;
    await fetchQuery(query, defaultVariables);
  }

  render() {
    if (!this.props.isAuthenticated) return null;

    return (
      <NextQueryRenderer
        query={query}
        variables={defaultVariables}
        render={({ error, props }) => {
          if (error || !props) return null;
          return <Dashboard viewer={props.viewer} />;
        }}
      />
    );
  }
}

export default DashboardPage;
