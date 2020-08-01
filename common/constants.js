"use strict";

const roles = {
  AUTHENTICATED: "AUTHENTICATED", // every one logged in has this
  ADMIN: "ADMIN"
};

module.exports = {
  apiBase: "/v1",
  socketsBase: "/ws",
  graphqlBase: "/graphql",

  roles,

  oauthProviders: {
    GOOGLE: "GOOGLE",
    TWITTER: "TWITTER",
    LINKEDIN: "LINKEDIN"
  },

  depts: {
    PRODUCTION: "PRODUCTION",
    RD: "RD",
    PURCHASING: "PURCHASING",
    MARKETING: "MARKETING",
    HR: "HR",
    ACCOUNTING: "ACCOUNTING"
  },

  /**
   * Page definition:
   *
   * "express-route": {
   *    page: "page filename in /pages",
   *    icon: "icon name in Layout component", // optional
   *    menu: "I18N key for the sidebar menu entry", // optional
   *    title: "I18N key for the page title", // optional
   *    isAllowed: user => Boolean, // optional, defaults to allow
   *    exportPathMap: () => Promise, // optional, defines all the paths for the
   *                                  // static export, see "/charts/:chart" example below
   * }
   */
  pages: {
    "/": {
      page: "/dashboard",
      icon: "dashboard",
      menu: "MENU_DASHBOARD",
      title: "TITLE_DASHBOARD"
    },
    "/forms": {
      page: "/forms",
      icon: "forms",
      menu: "MENU_FORMS",
      title: "TITLE_FORMS"
    },
    "/charts/:chart": {
      page: "/charts/[chart]",
      title: "TITLE_CHARTS",
      exportPathMap: async () => ({
        "/charts/1": {
          page: "/charts/[chart]",
          query: { chart: 1 }
        },
        "/charts/2": {
          page: "/charts/[chart]",
          query: { chart: 2 }
        },
        "/charts/3": {
          page: "/charts/[chart]",
          query: { chart: 3 }
        },
        "/charts/4": {
          page: "/charts/[chart]",
          query: { chart: 4 }
        },
        "/charts/5": {
          page: "/charts/[chart]",
          query: { chart: 5 }
        },
        "/charts/6": {
          page: "/charts/[chart]",
          query: { chart: 6 }
        }
      })
    },
    "/charts": {
      page: "/charts",
      icon: "charts",
      menu: "MENU_CHARTS",
      title: "TITLE_CHARTS"
    },
    "/tables": {
      page: "/tables",
      icon: "tables",
      menu: "MENU_TABLES",
      title: "TITLE_TABLES"
    },
    "/maps": {
      page: "/maps",
      icon: "maps",
      menu: "MENU_MAPS",
      title: "TITLE_MAPS"
    },
    "/notifications": {
      page: "/notifications",
      icon: "notifications",
      menu: "MENU_NOTIFICATIONS",
      title: "TITLE_NOTIFICATIONS"
    },
    "/typography": {
      page: "/typography",
      icon: "typography",
      menu: "MENU_TYPOGRAPHY",
      title: "TITLE_TYPOGRAPHY"
    },
    "/icons": {
      page: "/icons",
      icon: "icons",
      menu: "MENU_ICONS",
      title: "TITLE_ICONS"
    },
    "/auth/profile": {
      page: "/auth/profile",
      title: "TITLE_PROFILE",
      isAllowed: user => user.isAuthenticated
    },
    "/auth/verify": {
      page: "/auth/verify",
      title: "TITLE_VERIFY"
    },
    "/auth/return": {
      page: "/auth/return"
    },
    "/auth/error": {
      page: "/auth/error",
      title: "TITLE_OAUTH_ERROR"
    },
    "/users": {
      page: "/users",
      icon: "users",
      menu: "MENU_USERS",
      title: "TITLE_USERS",
      isAllowed: user => (user.roles || []).includes(roles.ADMIN)
    },
    "/pwa": {
      page: "/pwa",
      title: "TITLE_DASHBOARD"
    }
  },

  // WebSocket messages
  messages: {
    // sent by server on connection, client must reply with AUTH
    HELLO: "HELLO",

    // then the server replies with his AUTH on client's AUTH
    AUTH: "AUTH",

    // request for client to display a popup
    TOAST: "TOAST"
  },

  // client-side custom window events
  events: {
    // user identity might have changed,
    IDENTITY_CHANGED: "IDENTITY_CHANGED",

    // service worker wants to update
    UPDATE_READY: "UPDATE_READY",

    // notification popup
    TOAST: "TOAST"
  }
};
