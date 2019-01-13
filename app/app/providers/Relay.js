import React from "react";
import PropTypes from "prop-types";
import { fetchQuery as doFetch } from "relay-runtime";
import QueryLookupRenderer from "relay-query-lookup-renderer";

export const RelayContext = React.createContext({});

export class RelayProvider extends React.Component {
  static propTypes = {
    environment: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
  };

  render() {
    return (
      <RelayContext.Provider value={this.props.environment}>
        {this.props.children}
      </RelayContext.Provider>
    );
  }
}

export class NextQueryRenderer extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ])
  };

  render() {
    const { children, ...props } = this.props;

    return (
      <RelayContext.Consumer>
        {environment => (
          <QueryLookupRenderer lookup environment={environment} {...props}>
            {children}
          </QueryLookupRenderer>
        )}
      </RelayContext.Consumer>
    );
  }
}

export const fetchQuery = environment => (query, variables) =>
  doFetch(environment, query, variables);
