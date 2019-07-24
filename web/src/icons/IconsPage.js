import React from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import Layout from "../app/layout/LayoutContainer";
import IconsDemo from "./IconsDemoContainer";

const defaultVariables = {};

const query = graphql`
  query IconsPageQuery {
    viewer {
      ...LayoutContainer_viewer
    }
  }
`;

class IconsPage extends React.Component {
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
            page="/icons"
            error={error}
            viewer={props && props.viewer}
            render={() => <IconsDemo viewer={props && props.viewer} />}
          />
        )}
      />
    );
  }
}

export default IconsPage;
