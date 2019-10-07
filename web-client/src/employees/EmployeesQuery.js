import React from "react";
import { useSelector } from "react-redux";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/RelayProvider";
import ErrorMessage from "../app/errors/ErrorMessage";
import Employees from "./EmployeesContainer";
import { employeesSelectors } from "./state";

export const query = graphql`
  query EmployeesQueryQuery(
    $sortBy: EmployeeSortBy
    $sortDir: EmployeeSortDir
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    viewer {
      ...EmployeesContainer_viewer
        @arguments(
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

function EmployeesQuery() {
  const params = useSelector(state => employeesSelectors.getTableParams(state));

  return (
    <QueryRenderer
      query={query}
      variables={params}
      render={({ error, props: renderProps, retry }) => {
        if (error) return <ErrorMessage error={error} />;

        return (
          <Employees viewer={renderProps && renderProps.viewer} retry={retry} />
        );
      }}
    />
  );
}

export default EmployeesQuery;
