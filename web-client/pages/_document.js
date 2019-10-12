import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
import themes from "../styles/themes";

class MyDocument extends Document {
  render() {
    const theme = ((this.props.__NEXT_DATA__ || {}).query || {}).theme;
    const primary = themes
      ? ((((themes.defs || {})[theme] || {}).palette || {}).primary || {}).main
      : "#ffffff";
    const secondary = themes
      ? ((((themes.defs || {})[theme] || {}).palette || {}).secondary || {})
          .main
      : "#ffffff";
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg"
            color={secondary}
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="msapplication-TileColor" content={secondary} />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="theme-color" content={primary} />
          <link rel="manifest" href="/manifest.json" />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:400,400i,700&display=swap&subset=cyrillic,latin-ext"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ]
  };
};

export default MyDocument;
