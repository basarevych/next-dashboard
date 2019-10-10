"use strict";

const path = require("path");
const ContextReplacementPlugin = require("webpack").ContextReplacementPlugin;
const EnvironmentPlugin = require("webpack").EnvironmentPlugin;
const pwaManifest = require("@pwa/manifest");
const { GenerateSW } = require("workbox-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const RelayCompilerWebpackPlugin = require("relay-compiler-webpack-plugin");
const withCSS = require("@zeit/next-css");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withPlugins = require("next-compose-plugins");
const constants = require("./common/constants");
const l10n = require("./common/locales");
const theme = require("./styles/themes/dark");
const pkg = require("./package.json");

const manifest = {
  short_name: "dashboard",
  name: "Next™ React™ Dashboard",
  description: "A complete React/Redux/Relay/Next.js dashboard template",
  dir: "ltr",
  lang: "en",
  icons: [
    /*
      https://realfavicongenerator.net
      Extract the favicon package to /public/
      Copy "icons" key content here from "site.manifest" file
    */
    {
      src: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png"
    }
  ],
  start_url: "/pwa",
  display: "standalone",
  theme_color: theme.palette.primary.main,
  background_color: theme.palette.background.default
};

const plugins = [
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

module.exports = withPlugins(plugins, {
  webpack(config, { dev, isServer }) {
    config.output.publicPath = "/_next/";
    if (!dev) config.devtool = false; // disable soucemaps

    config.node = {
      path: "empty",
      fs: "empty"
    };

    if (config.optimization.minimizer && config.optimization.minimizer.length) {
      const options = config.optimization.minimizer[0].options;
      options.terserOptions.ecma = 5;
      config.optimization.minimizer[0] = new TerserPlugin(options);
    }

    // Inline SVG
    config.module.rules.push({
      test: /\.svg$/,
      loader: "svg-inline-loader"
    });

    config.plugins.push(
      new EnvironmentPlugin({
        // pass NODE_ENV var to the code
        NODE_ENV: "production",
        // define this var when exporting to static site
        STATIC_SITE: false
      })
    );

    // make sure there is only one instance of lodash
    config.resolve.alias["lodash"] = path.resolve(
      __dirname,
      "node_modules",
      "lodash"
    );

    // make sure there is only one instance of moment
    config.resolve.alias["moment"] = path.resolve(
      __dirname,
      "node_modules",
      "moment"
    );

    // make sure there is only one instance of graphql
    config.resolve.alias["graphql"] = path.resolve(
      __dirname,
      "node_modules",
      "graphql"
    );

    // bundle only the locales we actually use
    let locales = new RegExp(
      "^\\.[/\\\\](" + l10n.locales.join("|") + ")\\.js$"
    );
    config.plugins.push(
      new ContextReplacementPlugin(/moment[/\\]locale$/, locales),
      new ContextReplacementPlugin(/intl[/\\]locale-data[/\\]jsonp$/, locales),
      new ContextReplacementPlugin(
        /@formatjs[/\\]intl-relativetimeformat[/\\]dist[/\\]locale-data$/,
        locales
      )
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
        // Service Worker
        new GenerateSW({
          cacheId: pkg.name,
          clientsClaim: true,
          skipWaiting: true,
          cleanupOutdatedCaches: true,
          swDest: "sw.js",
          importWorkboxFrom: "local",
          exclude: [/\.next\//],
          runtimeCaching: [
            {
              urlPattern: /^https?:\/\/.*$/,
              handler: "NetworkFirst"
            }
          ]
        })
      );

      // Manifest
      pwaManifest.writeSync(
        path.resolve(__dirname, "public"),
        pwaManifest.sync(manifest)
      );
    }

    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (entries["main.js"]) {
        // inject polyfills before the app
        entries["main.js"].unshift(
          path.resolve(__dirname, "src", "app", "lib", "polyfills.js")
        );
      }

      return entries;
    };

    return config;
  },

  useFileSystemPublicRoutes: false,
  exportPathMap: async () => {
    const App = require("./ssr-server/App");
    const app = new App();
    return Object.keys(constants.pages).reduce(
      (acc, cur) =>
        acc.then(async map => {
          map[cur] = await app.analyzeRequest({ path: cur });
          return map;
        }),
      Promise.resolve({})
    );
  }
});
