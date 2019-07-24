"use strict";

if (!global._) global._ = require("lodash");
const path = require("path");
const ProvidePlugin = require("webpack").ProvidePlugin;
const ContextReplacementPlugin = require("webpack").ContextReplacementPlugin;
const { GenerateSW } = require("workbox-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const RelayCompilerWebpackPlugin = require("relay-compiler-webpack-plugin");
const withCSS = require("@zeit/next-css");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const { PHASE_EXPORT } = require("next-server/constants");
const constants = require("./common/constants");
const l10n = require("./common/locales");
const pkg = require("./package.json");

const plugins = [
  [
    withBundleAnalyzer,
    {
      analyzeServer: _.includes(["server", "both"], process.env.BUNDLE_ANALYZE),
      analyzeBrowser: _.includes(
        ["browser", "both"],
        process.env.BUNDLE_ANALYZE
      ),
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

module.exports = withPlugins(plugins, {
  webpack(config, { dev, isServer }) {
    config.output.publicPath = "/_next/";
    if (!dev) config.devtool = false; // disable soucemaps

    config.node = {
      path: "empty",
      fs: "empty"
    };

    if (config.optimization.minimizer && config.optimization.minimizer.length) {
      let options = config.optimization.minimizer[0].options;
      let terserOptions = options.terserOptions;
      terserOptions.ecma = 5;
      config.optimization.minimizer[0] = new TerserPlugin(options);
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
            publicPath: `${config.output.publicPath}/static/`
          }
        });
      */

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

    config.resolve.alias["graphql"] = path.resolve(
      __dirname,
      "node_modules",
      "graphql"
    );

    if (dev) {
      config.plugins.push(
        new RelayCompilerWebpackPlugin({
          schema: path.resolve(__dirname, "common", "schema.graphql"),
          src: path.resolve(__dirname, "src")
        })
      );
    }

    if (!isServer) {
      config.plugins.push(
        new GenerateSW({
          cacheId: pkg.name,
          clientsClaim: true,
          skipWaiting: true,
          swDest: "sw.js",
          importsDirectory: "static",
          importWorkboxFrom: "local",
          exclude: [/\.next\//],
          runtimeCaching: [
            {
              urlPattern: new RegExp(`^https?://[^/]+${constants.apiBase}.*`),
              handler: "NetworkOnly"
            },
            {
              urlPattern: new RegExp(
                `^https?://[^/]+${constants.socketsBase}.*`
              ),
              handler: "NetworkOnly"
            },
            {
              urlPattern: new RegExp(
                `^https?://[^/]+${constants.graphqlBase}.*`
              ),
              handler: "NetworkOnly"
            },
            {
              urlPattern: new RegExp("^https?://.*"),
              handler: "NetworkFirst"
            }
          ]
        })
      );
    }

    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (entries["main.js"])
        entries["main.js"].unshift(
          path.resolve(__dirname, "src", "app", "lib", "initApp.js")
        ); // polyfills and init

      return entries;
    };

    return config;
  },

  exportPathMap: async () => {
    const App = require("./ssr-server/App");
    const app = new App();
    const map = {};
    for (let path of _.keys(constants.pages))
      map[path] = await app.analyzeRequest({ path });
    return map;
  },

  useFileSystemPublicRoutes: false
});
