import React from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import TypographyDemo from "./TypographyDemoContainer";
import Layout from "../app/layout/LayoutContainer";
import Spinner from "../app/layout/SpinnerContainer";

const defaultVariables = {};

export const query = graphql`
  query TypographyPageQuery {
    viewer {
      ...LayoutContainer_viewer
    }
  }
`;

class TypographyPage extends React.Component {
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
            page="/typography"
            viewer={props ? props.viewer : null}
            error={error}
          >
            {!error && !props && <Spinner />}
            {!error && props && <TypographyDemo viewer={props.viewer} />}
          </Layout>
        )}
      />
    );
  }
}

export default TypographyPage;
