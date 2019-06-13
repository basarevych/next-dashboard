import React from "react";
import PropTypes from "prop-types";
import Relay from "react-relay";
import { fetchQuery as doFetch } from "relay-runtime";
import QueryLookupRenderer from "relay-query-lookup-renderer";

export const RelayContext = React.createContext({});

export const fetchQuery = environment => (query, variables) =>
  doFetch(environment, query, variables);

export class RelayProvider extends React.Component {
  static propTypes = {
    environment: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
  };

  render() {
    const { environment, children } = this.props;
    return (
      <RelayContext.Provider value={environment}>
        {children}
      </RelayContext.Provider>
    );
  }
}

export class QueryRenderer extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ])
  };

  static contextType = RelayContext;

  render() {
    const { children, ...props } = this.props;

    return (
      <QueryLookupRenderer lookup environment={this.context} {...props}>
        {children}
      </QueryLookupRenderer>
    );
  }
}

export class Subscription extends React.Component {
  static propTypes = {
    subscription: PropTypes.func.isRequired,
    variables: PropTypes.object,
    onCompleted: PropTypes.func,
    onError: PropTypes.func,
    onNext: PropTypes.func.isRequired,
    updater: PropTypes.func,
    configs: PropTypes.array
  };

  static defaultProps = {
    variables: {}
  };

  static contextType = RelayContext;

  componentDidMount() {
    this.request = Relay.requestSubscription(this.context, this.props);
  }

  componentWillUnmount() {
    if (this.request) {
      this.request.dispose();
      this.request = null;
    }
  }

  render() {
    return <React.Fragment />;
  }
}
