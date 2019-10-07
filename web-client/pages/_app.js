import "../src/app/lib/init";

import React from "react";
import App from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import serialize from "../common/src/serialize";
import deserialize from "../common/src/deserialize";
import getDiContainer from "../src/app/lib/getDiContainer";
import getReduxStore from "../src/app/lib/getReduxStore";
import getRelayEnvironment from "../src/app/lib/getRelayEnvironment";
import { appOperations, appSelectors } from "../src/app/state";
import RelayProvider, { fetchQuery } from "../src/app/providers/RelayProvider";
import StylesProvider from "../src/app/providers/StylesProvider";
import IntlProvider from "../src/app/providers/IntlProvider";
import DateProvider from "../src/app/providers/DateProvider";
import ToastProvider from "../src/app/providers/ToastProvider";
import UserProvider, {
  query as userProviderQuery
} from "../src/app/providers/UserProvider";
import Layout from "../src/app/layout/Layout";
import startServiceWorker from "../src/app/lib/startServiceWorker";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { req, res, err, query } = ctx;

    // Initial status code
    let statusCode = (err && err.statusCode) || (res && res.statusCode) || 200;
    if (statusCode === 200 && err) statusCode = 500;

    // Detect SSR phase
    const isSsr = !!req && !!res;

    // Detect exporting as static site
    const isExported = !!process.env.STATIC_SITE;

    // Dependency Injection Container
    // Available in Thunk as the third argument, i.e.:
    // (dispatch, getState, di) => Promise
    const di = getDiContainer();

    // Redux Store
    const store = getReduxStore(di);
    if (!appSelectors.getCreated(store.getState())) {
      await store.dispatch(
        appOperations.create({
          statusCode,
          locale: query && query.locale,
          theme: query && query.theme,
          appServer: query && query.appServer,
          apiServer: query && query.apiServer,
          ssrApiServer: query && query.ssrApiServer,
          wsServer: query && query.wsServer,
          mapboxToken: query && query.mapboxToken
        })
      );
    } else {
      await store.dispatch(appOperations.setStatusCode({ code: statusCode }));
    }

    // Relay Environment
    const environment = getRelayEnvironment(di);

    /* eslint-disable require-atomic-updates */
    ctx.di = di;
    ctx.store = store;
    ctx.fetchQuery = fetchQuery(environment);
    ctx.isSsr = isSsr;
    ctx.isExported = isExported;
    /* eslint-enable require-atomic-updates */

    if (isSsr && !isExported) {
      // Let Fetcher know we are doing SSR right now
      di.get("fetcher").setSsrMode(req, res);

      // Prepopulate user info context
      await ctx.fetchQuery(userProviderQuery);
    }

    let pageProps = {};
    if (Component.getInitialProps) {
      // Run .getInitialProps() of the page
      try {
        pageProps = (await Component.getInitialProps(ctx)) || {};
      } catch (error) {
        console.error(error);
        if (statusCode === 200)
          await store.dispatch(appOperations.setStatusCode({ code: 500 }));
      }
    }

    // Check the resulting status code
    statusCode = appSelectors.getStatusCode(store.getState());
    if (isSsr && !isExported && res.statusCode !== statusCode) {
      // Make Express respond with the correct code
      res.status(statusCode);
    }

    return {
      pageProps,
      reduxState: serialize(store.getState(), "redux"),
      relayState: serialize(environment.getStore().getSource(), "relay")
    };
  }

  constructor(props) {
    super(props);

    this.di = getDiContainer();
    this.reduxStore = getReduxStore(
      this.di,
      deserialize(props.reduxState, "redux")
    );
    this.relayEnvironment = getRelayEnvironment(
      this.di,
      deserialize(props.relayState, "relay")
    );

    if (process.browser) {
      // Start the app
      this.reduxStore.dispatch(appOperations.start()).catch(console.error);
    }
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    // Wait a bit and install the service worker
    this.iddle = requestIdleCallback(() => {
      this.iddle = null;
      startServiceWorker();
    });
  }

  componentWillUnmount() {
    if (this.iddle) {
      cancelIdleCallback(this.iddle);
      this.iddle = null;
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    if (process.browser) pageProps.key = this.props.router.route;

    return (
      <ReduxProvider store={this.reduxStore}>
        <RelayProvider environment={this.relayEnvironment}>
          <StylesProvider>
            <IntlProvider>
              <DateProvider>
                <ToastProvider>
                  <UserProvider>
                    {this.props.router.route === "/pwa" && (
                      <Component {...pageProps} />
                    )}
                    {this.props.router.route !== "/pwa" && (
                      <Layout>
                        <Component {...pageProps} />
                      </Layout>
                    )}
                  </UserProvider>
                </ToastProvider>
              </DateProvider>
            </IntlProvider>
          </StylesProvider>
        </RelayProvider>
      </ReduxProvider>
    );
  }
}

export default MyApp;
