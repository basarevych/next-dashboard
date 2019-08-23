import React from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import ErrorMessage from "../app/error/ErrorMessageContainer";
import Employees, { pageSize, sortBy, sortDir } from "./EmployeesContainer";

const defaultVariables = { first: pageSize, sortBy, sortDir };

const query = graphql`
  query TablesPageQuery(
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

class TablesPage extends React.Component {
  static async getInitialProps({ isSsr, isExported, fetchQuery }) {
    if (isSsr && !isExported) await fetchQuery(query, defaultVariables);
  }

  render() {
    return (
      <QueryRenderer
        query={query}
        variables={defaultVariables}
        render={({ error, props }) => {
          if (error) return <ErrorMessage error={error} />;

          const viewer = props && props.viewer;
          if (!viewer) return null;

          return <Employees viewer={viewer} />;
        }}
      />
    );
  }
}

export default TablesPage;
