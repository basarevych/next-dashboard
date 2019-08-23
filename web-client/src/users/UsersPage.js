import React from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import ErrorMessage from "../app/error/ErrorMessageContainer";
import Users, { pageSize, sortBy, sortDir } from "./UsersContainer";

const defaultVariables = { first: pageSize, sortBy, sortDir };

const query = graphql`
  query UsersPageQuery(
    $sortBy: UserSortBy
    $sortDir: UserSortDir
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    viewer {
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

          return <Users viewer={viewer} />;
        }}
      />
    );
  }
}

export default UsersPage;
