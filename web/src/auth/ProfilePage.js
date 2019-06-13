import React from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import Profile from "./ProfileContainer";
import Layout from "../app/layout/LayoutContainer";
import Spinner from "../app/layout/SpinnerContainer";

const defaultVariables = {};

export const query = graphql`
  query ProfilePageQuery {
    viewer {
      ...LayoutContainer_viewer
      ...ProfileContainer_viewer
    }
  }
`;

class ProfilePage extends React.Component {
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
            page="/auth/profile"
            viewer={props ? props.viewer : null}
            error={error}
          >
            {!error && !props && <Spinner />}
            {!error && props && <Profile viewer={props.viewer} />}
          </Layout>
        )}
      />
    );
  }
}

export default ProfilePage;
