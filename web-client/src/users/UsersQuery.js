import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/RelayProvider";
import ErrorMessage from "../app/errors/ErrorMessage";
import Users from "./UsersContainer";
import { usersSelectors } from "./state";

export const query = graphql`
  query UsersQueryQuery(
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

let retryCallback;
function doRetry() {
  if (retryCallback) retryCallback();
}

function UsersQuery() {
  const params = useSelector(state => usersSelectors.getTableParams(state));

  const renderQuery = useCallback(({ error, props: renderProps, retry }) => {
    if (error) return <ErrorMessage error={error} />;

    retryCallback = retry;

    return <Users viewer={renderProps && renderProps.viewer} retry={doRetry} />;
  }, []);

  return (
    <QueryRenderer query={query} variables={params} render={renderQuery} />
  );
}

export default UsersQuery;
