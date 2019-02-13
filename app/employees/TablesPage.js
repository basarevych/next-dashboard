import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-relay";
import { NextQueryRenderer } from "../app/providers/Relay";
import EmployeeList, {
  pageSize,
  sortBy,
  sortDir
} from "./EmployeeListContainer";
import ErrorMessage from "../app/error/ErrorMessageContainer";
import isRouteAllowed from "../../common/isRouteAllowed";

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

class TablesPage extends React.Component {
  static propTypes = {
    userRoles: PropTypes.array.isRequired
  };

  static async getInitialProps({ statusCode, fetchQuery }) {
    if (statusCode !== 200) return;
    await fetchQuery(query, defaultVariables);
  }

  render() {
    if (!isRouteAllowed("/tables", this.props.userRoles)) return null;

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

export default TablesPage;
