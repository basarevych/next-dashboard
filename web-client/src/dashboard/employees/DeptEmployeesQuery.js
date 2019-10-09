import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { graphql } from "react-relay";
import { QueryRenderer } from "../../app/providers/RelayProvider";
import ErrorMessage from "../../app/errors/ErrorMessage";
import DeptEmployees from "./DeptEmployeesContainer";
import { dashboardSelectors } from "../state";

export const query = graphql`
  query DeptEmployeesQueryQuery(
    $dept: EmployeeDept
    $sortBy: EmployeeSortBy
    $sortDir: EmployeeSortDir
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    viewer {
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

let retryCallback;
function doRetry() {
  if (retryCallback) retryCallback();
}

function DeptEmployeesQuery() {
  const params = useSelector(dashboardSelectors.getTableParams);

  const renderQuery = useCallback(({ error, props: renderProps, retry }) => {
    if (error) return <ErrorMessage error={error} />;

    retryCallback = retry;

    return (
      <DeptEmployees
        viewer={renderProps && renderProps.viewer}
        retry={doRetry}
      />
    );
  }, []);

  return (
    <QueryRenderer query={query} variables={params} render={renderQuery} />
  );
}

export default DeptEmployeesQuery;
