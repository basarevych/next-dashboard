import React from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import Layout from "../app/layout/LayoutContainer";
import Profile from "./ProfileContainer";

const defaultVariables = {};

export const query = graphql`
  query ProfilePageQuery {
    viewer {
      ...LayoutContainer_viewer
    }
  }
`;

class ProfilePage extends React.Component {
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
            page="/auth/profile"
            error={error}
            viewer={props && props.viewer}
            render={() => <Profile viewer={props && props.viewer} />}
          />
        )}
      />
    );
  }
}

export default ProfilePage;
