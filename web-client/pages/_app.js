import "../src/app/lib/init";

import React from "react";
import App from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import constants from "../common/constants";
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
import Layout from "../src/app/layout/Layout";
import startServiceWorker from "../src/app/lib/startServiceWorker";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
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
    // (dispatch, getState, di) => Promise(action)
    const di = getDiContainer();

    // Redux Store
    const store = getReduxStore(di);

    // Relay Environment
    const environment = getRelayEnvironment(di);

    // Let Fetcher know we are doing SSR right now
    if (isSsr && !isExported) di.get("fetcher").setSsrMode(req, res);

    // Initialize the store
    if (!appSelectors.getCreated(store.getState())) {
      await store.dispatch(
        appOperations.create({
          server:
            isSsr && !isExported
              ? process.env.SSR_API_SERVER
              : process.env.API_SERVER,
          statusCode,
          locale: query && query.locale,
          theme: query && query.theme,
          user: ((req || {}).session || {}).user || null
        })
      );
    } else {
      await store.dispatch(appOperations.setStatusCode({ code: statusCode }));
    }

    // Is current user allowed here?
    if (appSelectors.getStatusCode(store.getState()) === 200) {
      const page = Object.values(constants.pages).find(
        item => item.page === router.route
      );
      if (page && typeof page.isAllowed === "function") {
        const user = appSelectors.getUser(store.getState());
        const isAllowed = page.isAllowed(user);
        if (!isAllowed) {
          await store.dispatch(
            appOperations.setStatusCode({
              code: user.isAuthenticated ? 403 : 401
            })
          );
        }
      }
    }

    /* eslint-disable require-atomic-updates */
    ctx.router = router;
    ctx.di = di;
    ctx.store = store;
    ctx.environment = environment;
    ctx.fetchQuery = fetchQuery(environment);
    ctx.statusCode = appSelectors.getStatusCode(store.getState());
    ctx.isSsr = isSsr;
    ctx.isExported = isExported;
    /* eslint-enable require-atomic-updates */

    // Run .getInitialProps() of the page
    let pageProps = {};
    if (Component.getInitialProps) {
      try {
        pageProps = (await Component.getInitialProps(ctx)) || {};
      } catch (error) {
        console.error(error);
        if (appSelectors.getStatusCode(store.getState()) === 200)
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

    // Start the app
    this.reduxStore.dispatch(appOperations.start()).catch(console.error);
  }

  componentWillUnmount() {
    if (this.iddle) {
      cancelIdleCallback(this.iddle);
      this.iddle = null;
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ReduxProvider store={this.reduxStore}>
        <RelayProvider environment={this.relayEnvironment}>
          <StylesProvider>
            <IntlProvider>
              <DateProvider>
                <ToastProvider>
                  <Layout route={this.props.router.route}>
                    <Component key={this.props.router.route} {...pageProps} />
                  </Layout>
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
