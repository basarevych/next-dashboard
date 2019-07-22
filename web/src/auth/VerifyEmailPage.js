import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import VerifyEmail from "./VerifyEmailContainer";
import Layout from "../app/layout/LayoutContainer";
import Spinner from "../app/layout/SpinnerContainer";

const defaultVariables = {};

export const query = graphql`
  query VerifyEmailPageQuery {
    viewer {
      ...LayoutContainer_viewer
    }
  }
`;

class VerifyEmailPage extends React.Component {
  static propTypes = {
    token: PropTypes.string
  };

  static async getInitialProps({
    isSSR,
    isExported,
    query: requestQuery,
    fetchQuery
  }) {
    if (isSSR && !isExported) await fetchQuery(query, defaultVariables);
    return {
      token: requestQuery.token
    };
  }

  render() {
    return (
      <QueryRenderer
        query={query}
        variables={defaultVariables}
        render={({ error, props }) => (
          <Layout
            page="/auth/verify"
            viewer={props ? props.viewer : null}
            error={error}
          >
            {!error && !props && <Spinner />}
            {!error && props && (
              <VerifyEmail viewer={props.viewer} token={this.props.token} />
            )}
          </Layout>
        )}
      />
    );
  }
}

export default VerifyEmailPage;
