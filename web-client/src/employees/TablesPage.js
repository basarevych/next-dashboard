import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/RelayProvider";
import ErrorMessage from "../app/errors/ErrorMessage";
import Employees from "./EmployeesContainer";
import { employeesSelectors } from "./state";

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

function TablesPage(props) {
  return (
    <QueryRenderer
      query={query}
      variables={props.params}
      render={({ error, props: renderProps }) => {
        if (error) return <ErrorMessage error={error} />;

        if (renderProps && renderProps.viewer)
          return <Employees viewer={renderProps.viewer} />;

        return null;
      }}
    />
  );
}

TablesPage.propTypes = {
  params: PropTypes.object.isRequired
};

TablesPage.getInitialProps = async ({
  isSsr,
  isExported,
  store,
  fetchQuery
}) => {
  const params = employeesSelectors.getTableParams(store.getState());
  if (isSsr && !isExported) await fetchQuery(query, params);
  return { params };
};

export default TablesPage;
