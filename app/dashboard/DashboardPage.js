import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-relay";
import { NextQueryRenderer } from "../app/providers/Relay";
import Dashboard, {
  defaultCountry,
  defaultDept,
  pageSize,
  sortBy,
  sortDir
} from "./DashboardContainer";

const defaultVariables = {
  country: defaultCountry,
  dept: defaultDept,
  first: pageSize,
  sortBy,
  sortDir
};

export const query = graphql`
  query DashboardPageQuery(
    $country: ID
    $dept: EmployeeDept
    $sortBy: EmployeeSortBy
    $sortDir: EmployeeSortDir
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
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
      ...DemoListContainer_viewer
        @arguments(
          dept: $dept
          sortBy: $sortBy
          sortDir: $sortDir
          first: $first
          after: $after
          last: $last
          before: $before
        )
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
