import React from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../providers/Relay";
import Layout from "../layout/LayoutContainer";
import { appOperations, appSelectors } from "../state";

const defaultVariables = {};

const query = graphql`
  query ErrorPageQuery {
    viewer {
      ...LayoutContainer_viewer
    }
  }
`;

class ErrorPage extends React.Component {
  static async getInitialProps({ isSSR, isExported, store, fetchQuery }) {
    if (isSSR && !isExported) await fetchQuery(query, defaultVariables);
    if (appSelectors.getStatusCode(store.getState()) === 200)
      await store.dispatch(appOperations.setStatusCode({ code: 500 }));
  }

  render() {
    return (
      <QueryRenderer
        query={query}
        variables={defaultVariables}
        render={({ error, props }) => (
          <Layout page="/_error" error={error} viewer={props && props.viewer} />
        )}
      />
    );
  }
}

export default ErrorPage;
