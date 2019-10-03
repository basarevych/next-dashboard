import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/RelayProvider";
import ErrorMessage from "../app/errors/ErrorMessage";
import Users from "./UsersContainer";
import { usersSelectors } from "./state";

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

function UsersPage(props) {
  return (
    <QueryRenderer
      query={query}
      variables={props.params}
      render={({ error, props: renderProps }) => {
        if (error) return <ErrorMessage error={error} />;

        if (renderProps && renderProps.viewer)
          return <Users viewer={renderProps.viewer} />;

        return null;
      }}
    />
  );
}

UsersPage.propTypes = {
  params: PropTypes.object.isRequired
};

UsersPage.getInitialProps = async ({
  isSsr,
  isExported,
  store,
  fetchQuery
}) => {
  const params = usersSelectors.getTableParams(store.getState());
  if (isSsr && !isExported) await fetchQuery(query, params);
  return { params };
};

export default UsersPage;
