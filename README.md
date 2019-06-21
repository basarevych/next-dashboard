# Next™ React™ Dashboard

A complete React/Redux/Relay/Next.js dashboard template with perfect benchmarks using Material UI and friends.

https://dashboard.daemon-notes.com

![Dark Theme](docs/dark.png "Dark Theme")

![Light Theme](docs/light.png "Light Theme")

## Highlights

- React/Redux with Immutable, Thunk, Reselect, etc.

- GraphQL with subscriptions using React Relay Modern (not Apollo)

- Next.js with Webpack and Babel doing cached Server Side Rendering (SSR) on an Express.js backend with Redis and MongoDB via Mongoose

- Material UI with custom dark and light themes

- Formik, Mapbox GL, Victory Chart, React Intl, React Virtualized, etc.

- Email/password or Twitter/Google/Facebook authorization using Passport.js

- Caching service worker from Google Workbox

- Modular "ducks" project structure with Dependency Injection Container

## Architecture

This project is comprised of 4 servers:

- **MongoDB** for the data

- **Redis** for the cache and PubSub

- One or more API Servers: **[api/](api)**

  These are serving API requests from the browser and the Front Server. Access to MongoDB and to Redis is required.

- Optionally, one or more Front Servers: **[web/](web)**

  These are doing (cached) SSR for the user. Public domain name of the site is pointing to this server.

  Only access to Redis is required.

  If you don't need SSR you could also switch to static site mode, in which case you don't need Front Servers at all (any http server, like nginx, could serve the static files)

**NOTE** Please make sure both Mongo and Redis is password protected or not accessible from the public network
