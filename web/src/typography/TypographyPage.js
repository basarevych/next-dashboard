import React from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import Layout from "../app/layout/LayoutContainer";
import TypographyDemo from "./TypographyDemoContainer";

const defaultVariables = {};

const query = graphql`
  query TypographyPageQuery {
    viewer {
      ...LayoutContainer_viewer
    }
  }
`;

class TypographyPage extends React.Component {
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
            page="/typography"
            error={error}
            viewer={props && props.viewer}
            render={() => <TypographyDemo viewer={props && props.viewer} />}
          />
        )}
      />
    );
  }
}

export default TypographyPage;
