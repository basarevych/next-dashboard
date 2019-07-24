import React from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import Layout from "../app/layout/LayoutContainer";
import ChartsDemo from "./ChartsDemoContainer";

const defaultVariables = {};

const query = graphql`
  query ChartsPageQuery {
    viewer {
      ...LayoutContainer_viewer
    }
  }
`;

class ChartsPage extends React.Component {
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
            page="/charts"
            error={error}
            viewer={props && props.viewer}
            render={() => <ChartsDemo viewer={props && props.viewer} />}
          />
        )}
      />
    );
  }
}

export default ChartsPage;
