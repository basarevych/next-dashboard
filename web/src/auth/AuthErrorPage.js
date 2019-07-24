import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import Layout from "../app/layout/LayoutContainer";
import AuthError from "./AuthErrorContainer";

const defaultVariables = {};

const query = graphql`
  query AuthErrorPageQuery {
    viewer {
      ...LayoutContainer_viewer
    }
  }
`;

class AuthErrorPage extends React.Component {
  static propTypes = {
    action: PropTypes.string,
    type: PropTypes.string,
    service: PropTypes.string
  };

  static async getInitialProps({
    isSSR,
    isExported,
    query: requestQuery,
    fetchQuery
  }) {
    if (isSSR && !isExported) await fetchQuery(query, defaultVariables);
    return {
      type: requestQuery.type
    };
  }

  render() {
    const { type } = this.props;

    return (
      <QueryRenderer
        query={query}
        variables={defaultVariables}
        render={({ error, props }) => (
          <Layout
            page="/auth/error"
            error={error}
            viewer={props && props.viewer}
            render={() => (
              <AuthError viewer={props && props.viewer} type={type} />
            )}
          />
        )}
      />
    );
  }
}

export default AuthErrorPage;
