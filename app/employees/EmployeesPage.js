import React from "react";
import { graphql } from "react-relay";
import { NextQueryRenderer } from "../app/providers/Relay";
import EmployeeList, {
  pageSize,
  sortBy,
  sortDir
} from "./EmployeeListContainer";
import ErrorMessage from "../app/error/ErrorMessageContainer";

const defaultVariables = { first: pageSize, sortBy, sortDir };

export const query = graphql`
  query EmployeesPageQuery(
    $sortBy: EmployeeSortBy
    $sortDir: EmployeeSortDir
    $first: Int
    $after: String
    $last: Int
    $before: String
  ) {
    viewer {
      ...EmployeeListContainer_viewer
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

class EmployeesPage extends React.Component {
  static async getInitialProps({ statusCode, fetchQuery }) {
    if (statusCode === 200) await fetchQuery(query, defaultVariables);
  }

  render() {
    return (
      <NextQueryRenderer
        query={query}
        variables={defaultVariables}
        render={({ error, props }) => {
          if (error) return <ErrorMessage error={error} />;
          if (!props) return null;
          return <EmployeeList viewer={props.viewer} />;
        }}
      />
    );
  }
}

export default EmployeesPage;
