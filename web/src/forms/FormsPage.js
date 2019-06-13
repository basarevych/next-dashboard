import React from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import Wizard from "./WizardContainer";
import Layout from "../app/layout/LayoutContainer";
import Spinner from "../app/layout/SpinnerContainer";

const defaultVariables = {};

export const query = graphql`
  query FormsPageQuery {
    viewer {
      ...LayoutContainer_viewer
    }
  }
`;

class FormsPage extends React.Component {
  static async getInitialProps({ fetchQuery }) {
    await fetchQuery(query, defaultVariables);
  }

  render() {
    return (
      <QueryRenderer
        query={query}
        variables={defaultVariables}
        render={({ error, props }) => (
          <Layout
            page="/forms"
            viewer={props ? props.viewer : null}
            error={error}
          >
            {!error && !props && <Spinner />}
            {!error && props && <Wizard viewer={props.viewer} />}
          </Layout>
        )}
      />
    );
  }
}

export default FormsPage;
