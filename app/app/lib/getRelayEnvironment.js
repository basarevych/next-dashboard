import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { appSelectors } from "../state";
import constants from "../../../common/constants";

const envFactory = (di, initialState) => {
  const setupSubscription = (config, variables, cacheConfig, observer) => {
    const query = config.text;
    const subscriptionClient = new SubscriptionClient(
      appSelectors.getSubscriptionsServer(di.get("getState")()) +
        constants.graphqlBase,
      { reconnect: true }
    );
    subscriptionClient.maxConnectTimeGenerator.duration = () =>
      subscriptionClient.maxConnectTimeGenerator.max;
    const client = subscriptionClient.request({ query, variables }).subscribe({
      next: result => {
        observer.onNext({ data: result.data });
      },
      complete: () => {
        observer.onCompleted();
      },
      error: error => {
        observer.onError(error);
      }
    });
    return {
      dispose: client.unsubscribe
    };
  };

  const fetcher = di.get("fetcher");
  const network = Network.create(
    fetcher.query.bind(fetcher),
    setupSubscription
  );
  const store = new Store(new RecordSource(initialState || undefined));
  const env = new Environment({ network, store });
  di.registerInstance(env, "env");
  return env;
};

const __NEXT_RELAY_ENVIRONMENT__ = "__NEXT_RELAY_ENVIRONMENT__";

export default function getRelayEnviroment(di, initialState) {
  let relayEnvironment;
  if (!process.browser || process.env.NODE_ENV === "test") {
    // Always make a new environment if server,
    // otherwise it is is shared between requests
    relayEnvironment = envFactory(di, initialState);
  } else {
    if (window[__NEXT_RELAY_ENVIRONMENT__]) {
      relayEnvironment = window[__NEXT_RELAY_ENVIRONMENT__];
    } else {
      relayEnvironment = window[__NEXT_RELAY_ENVIRONMENT__] = envFactory(
        di,
        initialState
      );
    }
  }

  return relayEnvironment;
}
