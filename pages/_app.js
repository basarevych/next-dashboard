import React from "react";
import App, { Container, createUrl } from "next/app";
import Router from "next/router";
import { Provider } from "react-redux";
import { MuiThemeProvider, jssPreset } from "@material-ui/core/styles";
import { create as createJss } from "jss";
import CssBaseline from "@material-ui/core/CssBaseline";
import jssExtend from "jss-extend";
import JssProvider from "react-jss/lib/JssProvider";
import getPageContext from "../app/lib/pageContext";
import serialize from "../common/serialize";
import deserialize from "../common/deserialize";
import getStore from "../app/state/store";
import { appOperations, appSelectors } from "../app/state/app";
import { authSelectors } from "../app/state/auth";
import constants from "../common/constants";
import isRouteAllowed from "../common/isRouteAllowed";
import IntlProvider from "../app/containers/Providers/IntlProvider";
import DateProvider from "../app/containers/Providers/DateProvider";
import Layout from "../app/containers/Layout";

// Configure JSS
const jss = createJss({ plugins: [...jssPreset().plugins, jssExtend()] });

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let { isCreated, store } = getStore();

    ctx.store = store;
    const { req, res, err, query } = ctx;

    if (isCreated) {
      await store.dispatch(
        appOperations.create({
          status: req && req.getAuthStatus && (await req.getAuthStatus()),
          googleMapsKey: req && req.googleMapsKey
        })
      );
    }

    let statusCode = res ? res.statusCode : err ? err.statusCode : null;
    if (!_.isFinite(statusCode) || statusCode < 200) statusCode = 200;
    if (appSelectors.getStatusCode(store.getState()) !== statusCode)
      await store.dispatch(appOperations.setStatusCode({ code: statusCode }));

    let pageProps = {};
    if (Component.getInitialProps)
      pageProps = await Component.getInitialProps(ctx);

    return {
      pageProps,
      locale: query.locale,
      theme: query.theme,
      state: serialize(store.getState())
    };
  }

  constructor(props) {
    super(props);

    let { store } = getStore(deserialize(props.state));
    this.store = store;

    store.dispatch(appOperations.init());

    let locale = props.locale;
    if (!locale) locale = appSelectors.getLocale(store.getState());
    store.dispatch(appOperations.setLocale({ locale: locale }));

    this.pageContext = getPageContext(props.theme);
  }

  componentDidMount() {
    if (process.browser) {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles && jssStyles.parentNode)
        jssStyles.parentNode.removeChild(jssStyles);

      Router.onRouteChangeStart = url => {
        if (window.location.href === "/") return;
        if (!isRouteAllowed(url, authSelectors.getRoles(this.store.getState())))
          window.location.href = "/";
      };

      setTimeout(() =>
        this.store
          .dispatch(appOperations.start())
          .catch(error => console.error(error))
      );
    }
  }

  render() {
    const { router, Component, pageProps } = this.props;
    const url = createUrl(router);
    const path = router.pathname;
    const title = constants.pages[path] && constants.pages[path].title;

    if (process.browser) global.__NEXT_PAGE_INIT = Component.getInitialProps;

    return (
      <Container>
        <Provider store={this.store}>
          <IntlProvider>
            <DateProvider>
              <JssProvider
                jss={jss}
                registry={this.pageContext.sheetsRegistry}
                generateClassName={this.pageContext.generateClassName}
              >
                <MuiThemeProvider
                  theme={this.pageContext.theme}
                  sheetsManager={this.pageContext.sheetsManager}
                >
                  <CssBaseline />
                  <Layout title={title}>
                    <Component
                      {...pageProps}
                      url={url}
                      store={this.store}
                      pageContext={this.pageContext}
                    />
                  </Layout>
                </MuiThemeProvider>
              </JssProvider>
            </DateProvider>
          </IntlProvider>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
