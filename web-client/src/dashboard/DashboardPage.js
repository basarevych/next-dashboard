import React from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import Layout from "../app/layout/LayoutContainer";
import Dashboard, {
  defaultState,
  defaultDept,
  pageSize,
  sortBy,
  sortDir
} from "./DashboardContainer";

const defaultVariables = {
  stateName: defaultState,
  dept: defaultDept,
  first: pageSize,
  sortBy,
  sortDir
};

const query = graphql`
  query DashboardPageQuery(
    $stateName: String
    $dept: EmployeeDept
    $sortBy: EmployeeSortBy
    $sortDir: EmployeeSortDir
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    viewer {
      ...LayoutContainer_viewer
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
      ...StateSalesContainer_viewer @arguments(stateName: $stateName)
      ...DeptEmployeesContainer_viewer
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
  static async getInitialProps({ isSSR, isExported, fetchQuery }) {
    if (isSSR && !isExported) await fetchQuery(query, defaultVariables);
  }

  render() {
    return (
      <QueryRenderer
        query={query}
        variables={defaultVariables}
        render={({ error, props }) => (
          <Layout
            page="/"
            error={error}
            viewer={props && props.viewer}
            render={() => <Dashboard viewer={props && props.viewer} />}
          />
        )}
      />
    );
  }
}

export default DashboardPage;
