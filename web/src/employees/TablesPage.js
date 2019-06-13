import React from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import Employees, { pageSize, sortBy, sortDir } from "./EmployeesContainer";
import Layout from "../app/layout/LayoutContainer";
import Spinner from "../app/layout/SpinnerContainer";

const defaultVariables = { first: pageSize, sortBy, sortDir };

export const query = graphql`
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
  static async getInitialProps({ fetchQuery }) {
    await fetchQuery(query, defaultVariables);
  }

  render() {
    return (
      <QueryRenderer
        query={query}
        variables={defaultVariables}
        render={({ error, props }) => (
          <Layout
            page="/tables"
            viewer={props ? props.viewer : null}
            error={error}
          >
            {!error && !props && <Spinner />}
            {!error && props && <Employees viewer={props.viewer} />}
          </Layout>
        )}
      />
    );
  }
}

export default TablesPage;
