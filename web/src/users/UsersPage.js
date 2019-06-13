import React from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import Users, { pageSize, sortBy, sortDir } from "./UsersContainer";
import Layout from "../app/layout/LayoutContainer";
import Spinner from "../app/layout/SpinnerContainer";

const defaultVariables = { first: pageSize, sortBy, sortDir };

export const query = graphql`
  query UsersPageQuery(
    $sortBy: UserSortBy
    $sortDir: UserSortDir
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    viewer {
      ...LayoutContainer_viewer
      ...UsersContainer_viewer
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

class UsersPage extends React.Component {
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
            page="/users"
            viewer={props ? props.viewer : null}
            error={error}
          >
            {!error && !props && <Spinner />}
            {!error && props && <Users viewer={props.viewer} />}
          </Layout>
        )}
      />
    );
  }
}

export default UsersPage;
