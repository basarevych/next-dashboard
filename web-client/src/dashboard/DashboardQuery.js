import React from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/RelayProvider";
import ErrorMessage from "../app/errors/ErrorMessage";
import Dashboard from "./Dashboard";

export const query = graphql`
  query DashboardQuery {
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
    }
  }
`;

function DashboardQuery() {
  return (
    <QueryRenderer
      query={query}
      render={({ error, props: renderProps, retry }) => {
        if (error) return <ErrorMessage error={error} />;

        return (
          <Dashboard viewer={renderProps && renderProps.viewer} retry={retry} />
        );
      }}
    />
  );
}

export default DashboardQuery;
