# Next™ React™ Dashboard

A complete React/Redux/Relay/Next.js dashboard template with perfect benchmarks using Material UI and friends.

https://dashboard.daemon-notes.com

![Dark Theme](docs/dark.png "Dark Theme")

![Light Theme](docs/light.png "Light Theme")

## Highlights

- React with Hooks, Redux, Immutable, Thunk, Reselect, etc.

- GraphQL with subscriptions using React Relay Modern (not Apollo)

- Next.js with Webpack and Babel doing cached Server-Side Rendering (SSR) on an Express.js backend with Redis and MongoDB via Mongoose

- Material UI with custom dark and light themes

- Formik for forms with Yup for validation, including the server-side validation: Yup is integrated into Mongoose Model validation and uses the same schema files just like the front-end.

- Internationalization using React Intl (Format.js) which supports [ICU message syntax](https://formatjs.io/guides/message-syntax/)

- Email/password or Twitter/Google/Facebook authorization using Passport.js

- Additionally: MapboxGL and DeckGL, D3 and Victory charts, React Virtualized, etc.

- Caching service worker from Google Workbox

- Modular "ducks" project structure with Dependency Injection Container

## Architecture

This project is comprised of 4 servers:

- **MongoDB** for the data

- **Redis** for the cache and PubSub

- One or more API Servers: **[api-server/](api-server)**

  These are serving API requests from the browser and the Front Server. Access to MongoDB and to Redis is required.

- Optionally, one or more Front Servers: **[web-client/ssr-server](web-client/ssr-server)**

  These are doing (cached) SSR for the user. The public domain name of the site is pointing to this server.

  Only access to Redis is required.

  If you don't need SSR you could also switch to static site mode, in which case you don't need Front Servers at all (any http server, like nginx, could serve the static files)

**NOTE** Please make sure both Mongo and Redis is password protected or not accessible from the public network
