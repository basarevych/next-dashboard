import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-relay";
import { NextQueryRenderer } from "../Providers/Relay";
import Grid from "@material-ui/core/Grid";
import Users from "../../containers/Users";
import ErrorMessage from "../ErrorMessage";

export const styles = theme => ({
  layout: {
    width: "100%",
    flex: 1,
    padding: theme.main.spacing
  }
});

export const query = graphql`
  query UsersPageQuery {
    viewer {
      ...Users_users
    }
  }
`;

class UsersPage extends React.Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  };

  static async getInitialProps({ statusCode, fetchQuery }) {
    if (statusCode !== 200) return;
    await fetchQuery(query, {});
  }

  render() {
    if (!this.props.isAuthenticated) return null;

    return (
      <NextQueryRenderer
        query={query}
        variables={{}}
        render={({ error, props }) => {
          if (error) return <ErrorMessage error={error} />;
          if (!props) return null;
          return (
            <div className={this.props.classes.layout}>
              <Grid container spacing={this.props.theme.main.spacing}>
                <Grid item xs={12}>
                  <Users viewer={props.viewer} />
                </Grid>
              </Grid>
            </div>
          );
        }}
      />
    );
  }
}

export default UsersPage;
