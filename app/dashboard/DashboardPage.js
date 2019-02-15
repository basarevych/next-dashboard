import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-relay";
import { NextQueryRenderer } from "../app/providers/Relay";
import Dashboard from "./DashboardContainer";

const defaultVariables = {};

export const query = graphql`
  query DashboardPageQuery {
    viewer {
      profitValues {
        edges {
          node {
            date
            profit
          }
        }
      }
      salesValues {
        edges {
          node {
            date
            sales
          }
        }
      }
      clientsValues {
        edges {
          node {
            date
            clients
          }
        }
      }
      avgTimeValues {
        edges {
          node {
            date
            avgTime
          }
        }
      }
      marketShares {
        edges {
          node {
            id
            country
            shares {
              vendor
              value
            }
          }
        }
      }
    }
  }
`;

class DashboardPage extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };

  static async getInitialProps({ statusCode, fetchQuery }) {
    if (statusCode !== 200) return;
    await fetchQuery(query, defaultVariables);
  }

  render() {
    if (!this.props.isAuthenticated) return null;

    return (
      <NextQueryRenderer
        query={query}
        variables={defaultVariables}
        render={({ error, props }) => {
          if (error || !props) return null;
          return <Dashboard viewer={props.viewer} />;
        }}
      />
    );
  }
}

export default DashboardPage;
