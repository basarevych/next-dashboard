import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/RelayProvider";
import ErrorMessage from "../app/errors/ErrorMessage";
import Dashboard from "./Dashboard";
import { dashboardSelectors, defaultState } from "./state";

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

function DashboardPage(props) {
  const render = useCallback(({ error, props: renderProps }) => {
    if (error) return <ErrorMessage error={error} />;

    if (renderProps && renderProps.viewer)
      return <Dashboard viewer={renderProps.viewer} />;

    return null;
  }, []);

  return (
    <QueryRenderer query={query} variables={props.params} render={render} />
  );
}

DashboardPage.propTypes = {
  params: PropTypes.object.isRequired
};

DashboardPage.getInitialProps = async ({
  isSsr,
  isExported,
  store,
  fetchQuery
}) => {
  const tableParams = dashboardSelectors.getTableParams(store.getState());
  const params = { ...tableParams, stateName: defaultState };
  if (isSsr && !isExported) await fetchQuery(query, params);
  return { params };
};

export default DashboardPage;
