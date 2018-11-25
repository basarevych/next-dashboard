"use strict";

const App = require("./api/app");
const path = require("path");
const fs = require("fs-extra");
const DefinePlugin = require("webpack").DefinePlugin;
const ProvidePlugin = require("webpack").ProvidePlugin;
const ContextReplacementPlugin = require("webpack").ContextReplacementPlugin;
const ServiceWorkerPlugin = require("serviceworker-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const withCSS = require("@zeit/next-css");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const withProgressBar = require("next-progressbar");
const constants = require("./common/constants");
const l10n = require("./common/locales");

let app = new App();

const browsers = fs.readFileSync(
  path.join(__dirname, ".browserslistrc"),
  "utf8"
);

const plugins = [
  withProgressBar,
  [
    withBundleAnalyzer,
    {
      analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: "static",
          reportFilename: "../server-analyze.html"
        },
        browser: {
          analyzerMode: "static",
          reportFilename: "browser-analyze.html"
        }
      }
    }
  ],
  [withCSS, { cssModules: false }]
];

module.exports = withPlugins([...plugins], {
  webpack(config, { dev, isServer, defaultLoaders }) {
    config.output.publicPath = "/_next/";
    if (!dev) config.devtool = false; // disable soucemaps

    config.node = {
      path: "empty",
      fs: "empty"
    };

    // IE can't handle ES6 including in node_modules
    if (!isServer) {
      config.module.rules.push({
        test: /\.js$/,
        include: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
        options: {
          configFile: path.resolve(__dirname, "babel.config.js"),
          babelrc: false,
          compact: false
        }
      });
    }

    // Inline SVG
    config.module.rules.push({
      test: /\.svg$/,
      loader: "svg-inline-loader"
    });

    /*
    // WebAssemmbly
    config.module.rules.push({
      test: /\.wasm$/,
      type: "javascript/auto",
      loader: "file-loader",
      options: {
        outputPath: `static/`,
        publicPath: `${app.config.appStatic}${config.output.publicPath}/static/`
      }
    });
    */

    config.plugins.push(
      new DefinePlugin({
        "process.env.APP_STATIC": JSON.stringify(app.config.appStatic)
      })
    );

    config.plugins.push(
      new ProvidePlugin({
        _: "lodash" // lodash is defined as global variable
      })
    );

    config.resolve.alias["lodash"] = path.resolve(
      __dirname,
      "node_modules",
      "lodash"
    );

    let locales = new RegExp(
      "^\\.[/\\\\](" + l10n.locales.join("|") + ")\\.js$"
    );
    config.plugins.push(
      // bundle only locales we are actually using
      new ContextReplacementPlugin(/moment[/\\]locale$/, locales),
      new ContextReplacementPlugin(/intl[/\\]locale-data[/\\]jsonp$/, locales),
      new ContextReplacementPlugin(/react-intl[/\\]locale-data$/, locales)
    );

    if (!isServer) {
      config.plugins.push(
        new ServiceWorkerPlugin({
          entry: path.resolve(__dirname, "app", "lib", "serviceWorker.js"),
          excludes: ["**/.*", "**/*.map"],
          includes: ["**/*"],
          publicPath: "/"
        })
      );
    }

    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (entries["main.js"])
        entries["main.js"].unshift(
          path.resolve(__dirname, "app", "lib", "initApp.js")
        ); // polyfills and init

      return entries;
    };

    return config;
  },

  exportPathMap: async () => {
    const map = {};
    for (let path of _.keys(constants.pages)) {
      map[path] = await app.analyzeRequest({
        path,
        locale: l10n.defaultLocale
      });
      map[path].query.isExport = true; // appears when building with npm export
    }
    return map;
  },

  assetPrefix: app.config.appStatic || undefined
});
