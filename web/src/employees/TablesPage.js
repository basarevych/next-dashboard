import React from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import Layout from "../app/layout/LayoutContainer";
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
      ...LayoutContainer_viewer
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
            page="/tables"
            error={error}
            viewer={props && props.viewer}
            render={() => <Employees viewer={props && props.viewer} />}
          />
        )}
      />
    );
  }
}

export default TablesPage;
