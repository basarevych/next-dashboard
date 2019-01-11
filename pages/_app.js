import React from "react";
import App, { Container } from "next/app";
import Router from "next/router";
import { Provider as ReduxProvider } from "react-redux";
import { MuiThemeProvider, jssPreset } from "@material-ui/core/styles";
import { create as createJss } from "jss";
import CssBaseline from "@material-ui/core/CssBaseline";
import jssExtend from "jss-extend";
import JssProvider from "react-jss/lib/JssProvider";
import serialize from "../common/serialize";
import deserialize from "../common/deserialize";
import getDiContainer from "../app/lib/getDiContainer";
import getReduxStore from "../app/lib/getReduxStore";
import getRelayEnvironment from "../app/lib/getRelayEnvironment";
import getMaterialContext from "../app/lib/getMaterialContext";
import { appOperations } from "../app/state/app";
import { authSelectors } from "../app/state/auth";
import constants from "../common/constants";
import isRouteAllowed from "../common/isRouteAllowed";
import { fetchQuery, RelayProvider } from "../app/components/Providers/Relay";
import IntlProvider from "../app/containers/Providers/Intl";
import DateProvider from "../app/containers/Providers/Date";
import Layout from "../app/containers/Layout";

// Configure JSS
const jss = createJss({ plugins: [...jssPreset().plugins, jssExtend()] });

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { req, res, err, query } = ctx;

    const di = getDiContainer();
    const store = getReduxStore(di);
    const environment = getRelayEnvironment(di);

    // when doing SSR we will be making own API requests on behalf of current user
    const cookie = req && req.cookieHeader;
    if (!process.browser && cookie) di.get("fetcher").setCookie(cookie);

    // init the store
    const statusCode =
      (res && res.statusCode) || (err && (err.statusCode || 500)) || 200;
    const csrf = req && req.csrfHeader;
    const status = req && req.getAuthStatus && (await req.getAuthStatus());
    const googleMapsKey = query && query.googleMapsKey;
    await store.dispatch(
      appOperations.create({
        statusCode,
        csrf,
        status,
        googleMapsKey
      })
    );

    ctx.statusCode = statusCode;
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

      Router.onRouteChangeStart = url => {
        if (window.location.href === "/") return;
        if (
          !isRouteAllowed(
            url,
            authSelectors.getRoles(this.reduxStore.getState())
          )
        ) {
          window.location.href = "/";
        }
      };

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

    if (process.browser) global.__NEXT_PAGE_INIT = Component.getInitialProps;

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
