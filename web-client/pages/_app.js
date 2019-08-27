import React from "react";
import App from "next/app";
import Router from "next/router";
import { Provider as ReduxProvider } from "react-redux";
import constants from "../common/constants";
import serialize from "../common/src/serialize";
import deserialize from "../common/src/deserialize";
import getDiContainer from "../src/app/lib/getDiContainer";
import getReduxStore from "../src/app/lib/getReduxStore";
import getRelayEnvironment from "../src/app/lib/getRelayEnvironment";
import { appOperations, appSelectors } from "../src/app/state";
import { fetchQuery, RelayProvider } from "../src/app/providers/Relay";
import StylesProvider from "../src/app/providers/StylesContainer";
import IntlProvider from "../src/app/providers/IntlContainer";
import DateProvider from "../src/app/providers/DateContainer";
import ToastProvider from "../src/app/providers/ToastContainer";
import PageLoader, {
  query as pageLoaderQuery
} from "../src/app/layout/PageLoaderContainer";

if (process.browser) {
  window.__notify = function(title, content, options = {}) {
    window.dispatchEvent(
      new CustomEvent(constants.events.TOAST, {
        detail: {
          title,
          content,
          ...options
        }
      })
    );
  };

  window.onerror = function(msg, url, line, col, error) {
    let extra = !col ? "" : "\ncolumn: " + col;
    extra += !error ? "" : "\nerror: " + error;
    console.error(
      "Error: " + msg + "\nurl: " + url + "\nline: " + line + extra
    );
    window.__notify("An Error Occurred", msg, { autoClose: false });
    return false;
  };

  window.onunhandledrejection = function(evt) {
    console.error(evt.reason);
    window.__notify("An Error Occurred", evt.reason.message, {
      autoClose: false
    });
    return false;
  };
}

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

    if (isSsr && !isExported) {
      // Let Fetcher know we are doing SSR right now
      di.get("fetcher").setSsrMode(req, res);
    }

    /* eslint-disable require-atomic-updates */
    ctx.di = di;
    ctx.store = store;
    ctx.fetchQuery = fetchQuery(environment);
    ctx.isSsr = isSsr;
    ctx.isExported = isExported;
    /* eslint-enable require-atomic-updates */

    let pageProps = {};
    if (Component.getInitialProps) {
      try {
        pageProps = (await Component.getInitialProps(ctx)) || {};
      } catch (error) {
        console.error(error);
        if (statusCode === 200)
          await store.dispatch(appOperations.setStatusCode({ code: 500 }));
      }
    }

    if (isSsr && !isExported) await ctx.fetchQuery(pageLoaderQuery);

    statusCode = appSelectors.getStatusCode(store.getState());
    if (
      isSsr &&
      !isExported &&
      statusCode !== 200 &&
      res.statusCode !== statusCode
    ) {
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

    // Start the app
    this.reduxStore.dispatch(appOperations.start()).catch(console.error);
  }

  render() {
    const { Component, pageProps } = this.props;
    if (process.browser) pageProps.key = Router.route;

    return (
      <ReduxProvider store={this.reduxStore}>
        <RelayProvider environment={this.relayEnvironment}>
          <StylesProvider>
            <IntlProvider>
              <DateProvider>
                <ToastProvider>
                  <PageLoader>
                    <Component {...pageProps} />
                  </PageLoader>
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
