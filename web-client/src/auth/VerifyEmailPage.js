import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import Layout from "../app/layout/LayoutContainer";
import VerifyEmail from "./VerifyEmailContainer";

const defaultVariables = {};

const query = graphql`
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
    const { token } = this.props;

    return (
      <QueryRenderer
        query={query}
        variables={defaultVariables}
        render={({ error, props }) => (
          <Layout
            page="/auth/verify"
            error={error}
            viewer={props && props.viewer}
            render={() => (
              <VerifyEmail viewer={props && props.viewer} token={token} />
            )}
          />
        )}
      />
    );
  }
}

export default VerifyEmailPage;
