import { Environment, Network, RecordSource, Store } from "relay-runtime";

const envFactory = (initialState, fetcher) => {
  const network = Network.create(fetcher);
  const store = new Store(
    new RecordSource(initialState && initialState.records)
  );
  return new Environment({ network, store });
};

const __NEXT_RELAY_ENVIRONMENT__ = "__NEXT_RELAY_ENVIRONMENT__";

export default function getRelayEnviroment(initialState, fetcher) {
  let relayEnvironment;

  if (!process.browser || process.env.NODE_ENV === "test") {
    // Always make a new environment if server,
    // otherwise it is is shared between requests
    relayEnvironment = envFactory(initialState, fetcher);
  } else {
    if (window[__NEXT_RELAY_ENVIRONMENT__]) {
      relayEnvironment = window[__NEXT_RELAY_ENVIRONMENT__];
    } else {
      relayEnvironment = window[__NEXT_RELAY_ENVIRONMENT__] = envFactory(
        initialState,
        fetcher
      );
    }
  }

  return relayEnvironment;
}
