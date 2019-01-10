import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { appSelectors } from "../state/app";

const envFactory = (reduxStore, initialState) => {
  const fetcher = appSelectors.getService(reduxStore.getState(), {
    service: "fetcher"
  });
  const network = Network.create(fetcher.query.bind(fetcher));
  const store = new Store(
    new RecordSource(initialState ? initialState.records : undefined)
  );
  const env = new Environment({ network, store });
  const di = appSelectors.getService(reduxStore.getState(), {
    service: "di"
  });
  di.registerInstance(env, "env");
  return env;
};

const __NEXT_RELAY_ENVIRONMENT__ = "__NEXT_RELAY_ENVIRONMENT__";

export default function getRelayEnviroment(reduxStore, initialState) {
  let relayEnvironment;
  if (!process.browser || process.env.NODE_ENV === "test") {
    // Always make a new environment if server,
    // otherwise it is is shared between requests
    relayEnvironment = envFactory(reduxStore, initialState);
  } else {
    if (window[__NEXT_RELAY_ENVIRONMENT__]) {
      relayEnvironment = window[__NEXT_RELAY_ENVIRONMENT__];
    } else {
      relayEnvironment = window[__NEXT_RELAY_ENVIRONMENT__] = envFactory(
        reduxStore,
        initialState
      );
    }
  }

  return relayEnvironment;
}
