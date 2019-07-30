import React from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import Layout from "../app/layout/LayoutContainer";
import MapsDemo from "./MapsDemoContainer";

const defaultVariables = {};

const query = graphql`
  query MapsPageQuery {
    viewer {
      ...LayoutContainer_viewer
    }
  }
`;

class MapsPage extends React.Component {
  static async getInitialProps({ isSSR, isExported, fetchQuery }) {
    if (isSSR && !isExported) await fetchQuery(query, defaultVariables);
  }

  render() {
    return (
      <QueryRenderer
        query={query}
        variables={defaultVariables}
        render={({ error, props }) => (
          <Layout
            page="/maps"
            error={error}
            viewer={props && props.viewer}
            render={() => <MapsDemo viewer={props && props.viewer} />}
          />
        )}
      />
    );
  }
}

export default MapsPage;
