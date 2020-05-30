import React, { useCallback } from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/RelayProvider";
import ErrorMessage from "../app/errors/ErrorMessage";
import Dashboard from "./Dashboard";

export const query = graphql`
  query DashboardQuery {
    viewer {
      visitorsValues {
        ...VisitorsStatContainer_data
      }
      loadValues {
        ...LoadStatContainer_data
      }
      memoryValues {
        ...MemoryStatContainer_data
      }
      operationsValues {
        ...OperationsStatContainer_data
      }
      avgTimeValues {
        ...AvgTimeStatContainer_data
      }
    }
  }
`;

function DashboardQuery() {
  const renderQuery = useCallback(({ error, props: renderProps, retry }) => {
    if (error) return <ErrorMessage error={error} />;
    return (
      <Dashboard
        viewer={(renderProps && renderProps.viewer) || null}
        retry={retry}
      />
    );
  }, []);

  return <QueryRenderer query={query} render={renderQuery} />;
}

export default DashboardQuery;
