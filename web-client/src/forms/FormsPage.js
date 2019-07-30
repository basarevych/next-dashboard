import React from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import Layout from "../app/layout/LayoutContainer";
import Wizard from "./WizardContainer";

const defaultVariables = {};

const query = graphql`
  query FormsPageQuery {
    viewer {
      ...LayoutContainer_viewer
    }
  }
`;

class FormsPage extends React.Component {
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
            page="/forms"
            error={error}
            viewer={props && props.viewer}
            render={() => <Wizard viewer={props && props.viewer} />}
          />
        )}
      />
    );
  }
}

export default FormsPage;
