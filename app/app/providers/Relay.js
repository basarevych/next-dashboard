import React from "react";
import PropTypes from "prop-types";
import Relay from "react-relay";
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

export function subscribe({
  environment,
  subscription,
  variables,
  getToken,
  minInterval,
  callback
}) {
  let request = null;
  let isDestroyed = false;
  let callbackTime = 0;
  let callbackTimer = null;

  if (_.isUndefined(variables)) variables = {};
  if (_.isUndefined(minInterval)) minInterval = 1000;

  const doSubscribe = async () => {
    if (getToken) variables.token = await getToken();
    if (isDestroyed) return;
    request = Relay.requestSubscription(environment, {
      subscription,
      variables,
      onCompleted: () => {
        request = null;
        setTimeout(() => doSubscribe().catch(console.error), 1000);
      },
      onError: error => {
        console.error(error);
        request = null;
        setTimeout(() => doSubscribe().catch(console.error), 1000);
      },
      onNext: (...args) => {
        if (isDestroyed || callbackTimer) return;
        const delta = Date.now() - callbackTime;
        callbackTimer = setTimeout(
          () => {
            callbackTime = Date.now();
            callbackTimer = null;
            if (!isDestroyed) callback(...args);
          },
          delta < minInterval ? delta : 0
        );
      }
    });
  };

  doSubscribe().catch(console.error);

  return () => {
    isDestroyed = true;
    if (callbackTimer) {
      clearTimeout(callbackTimer);
      callbackTimer = null;
    }
    if (request) {
      request.dispose();
      request = null;
    }
  };
}
