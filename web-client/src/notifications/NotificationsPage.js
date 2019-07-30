import React from "react";
import { graphql } from "react-relay";
import { QueryRenderer } from "../app/providers/Relay";
import Layout from "../app/layout/LayoutContainer";
import NotificationsDemo from "./NotificationsDemoContainer";

const defaultVariables = {};

const query = graphql`
  query NotificationsPageQuery {
    viewer {
      ...LayoutContainer_viewer
    }
  }
`;

class NotificationsPage extends React.Component {
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
            page="/notifications"
            error={error}
            viewer={props && props.viewer}
            render={() => <NotificationsDemo viewer={props && props.viewer} />}
          />
        )}
      />
    );
  }
}

export default NotificationsPage;
