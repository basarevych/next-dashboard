import React from "react";
import App, { Container } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { MuiThemeProvider, jssPreset } from "@material-ui/core/styles";
import { create as createJss } from "jss";
import CssBaseline from "@material-ui/core/CssBaseline";
import jssExtend from "jss-extend";
import JssProvider from "react-jss/lib/JssProvider";
import serialize from "../common/serialize";
import deserialize from "../common/deserialize";
import getDiContainer from "../app/app/lib/getDiContainer";
import getReduxStore from "../app/app/lib/getReduxStore";
import getRelayEnvironment from "../app/app/lib/getRelayEnvironment";
import getMaterialContext from "../app/app/lib/getMaterialContext";
import { appOperations } from "../app/app/state";
import { authSelectors } from "../app/auth/state";
import constants from "../common/constants";
import isRouteAllowed from "../common/isRouteAllowed";
import { fetchQuery, RelayProvider } from "../app/app/providers/Relay";
import IntlProvider from "../app/app/providers/IntlContainer";
import DateProvider from "../app/app/providers/DateContainer";
import Layout from "../app/app/layout/LayoutContainer";

// Configure JSS
const jss = createJss({ plugins: [...jssPreset().plugins, jssExtend()] });

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { req, res, err, pathname, query } = ctx;

    let statusCode =
      (res && res.statusCode) || (err && (err.statusCode || 500)) || 200;

    // Dependency Injection Container
    const di = getDiContainer();

    // Redux Store
    const store = getReduxStore(di);
    await store.dispatch(
      appOperations.create({
        statusCode,
        csrf: req && req.csrfHeader,
        status: req && req.getAuthStatus && (await req.getAuthStatus()),
        subscriptionsServer: query && query.subscriptionsServer,
        googleMapsKey: query && query.googleMapsKey
      })
    );

    if (
      statusCode === 200 &&
      !isRouteAllowed(pathname, authSelectors.getRoles(store.getState()))
    ) {
      statusCode = 403;
      store.dispatch(appOperations.setStatusCode({ code: statusCode }));
    }

    // Relay Environment
    const environment = getRelayEnvironment(di);

    // when doing SSR we will be making own API requests on behalf of current user
    const cookie = req && req.cookieHeader;
    if (cookie) di.get("fetcher").setCookie(cookie);

    ctx.statusCode = statusCode;
    ctx.isAuthenticated = authSelectors.isAuthenticated(store.getState());
    ctx.store = store;
    ctx.fetchQuery = fetchQuery(environment);

    let pageProps = {};
    if (Component.getInitialProps)
      pageProps = await Component.getInitialProps(ctx);

    return {
      pageProps,
      theme: query.theme,
      reduxState: serialize(store.getState(), "redux"),
      relayState: serialize(environment.getStore().getSource(), "relay")
    };
  }

  constructor(props) {
    super(props);

    const di = getDiContainer();
    this.reduxStore = getReduxStore(di, deserialize(props.reduxState, "redux"));
    this.relayEnvironment = getRelayEnvironment(
      di,
      deserialize(props.relayState, "relay")
    );
    this.materialContext = getMaterialContext(props.theme);

    this.reduxStore.dispatch(appOperations.init());
  }

  componentDidMount() {
    if (process.browser) {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles && jssStyles.parentNode)
        jssStyles.parentNode.removeChild(jssStyles);

      setTimeout(() =>
        this.reduxStore
          .dispatch(appOperations.start())
          .catch(error => console.error(error))
      );
    }
  }

  render() {
    const { router, Component, pageProps } = this.props;
    const path = router.pathname;
    const title = constants.pages[path] && constants.pages[path].title;

    return (
      <Container>
        <ReduxProvider store={this.reduxStore}>
          <RelayProvider environment={this.relayEnvironment}>
            <IntlProvider>
              <DateProvider>
                <JssProvider
                  jss={jss}
                  registry={this.materialContext.sheetsRegistry}
                  generateClassName={this.materialContext.generateClassName}
                >
                  <MuiThemeProvider
                    theme={this.materialContext.theme}
                    sheetsManager={this.materialContext.sheetsManager}
                  >
                    <CssBaseline />
                    <Layout title={title}>
                      <Component
                        {...pageProps}
                        materialContext={this.materialContext}
                      />
                    </Layout>
                  </MuiThemeProvider>
                </JssProvider>
              </DateProvider>
            </IntlProvider>
          </RelayProvider>
        </ReduxProvider>
      </Container>
    );
  }
}

export default MyApp;
