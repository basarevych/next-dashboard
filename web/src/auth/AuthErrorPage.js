import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import AuthError from "./AuthErrorContainer";
import Layout from "../app/layout/LayoutContainer";
import Spinner from "../app/layout/SpinnerContainer";

const defaultVariables = {};

export const query = graphql`
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
    return (
      <QueryRenderer
        query={query}
        variables={defaultVariables}
        render={({ error, props }) => (
          <Layout
            page="/auth/error"
            viewer={props ? props.viewer : null}
            error={error}
          >
            {!error && !props && <Spinner />}
            {!error && props && (
              <AuthError viewer={props.viewer} type={this.props.type} />
            )}
          </Layout>
        )}
      />
    );
  }
}

export default AuthErrorPage;
