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
    FACEBOOK: "FACEBOOK",
    TWITTER: "TWITTER"
  },

  depts: {
    PRODUCTION: "PRODUCTION",
    RD: "RD",
    PURCHASING: "PURCHASING",
    MARKETING: "MARKETING",
    HR: "HR",
    ACCOUNTING: "ACCOUNTING"
  },

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
      isAllowed: user => _.includes(user.roles || [], roles.ADMIN)
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
    // web fonts loading complete
    FONTS_LOADED: "FONTS_LOADED",

    // user identity might have changed,
    // websockets should reconnect to the server
    // with new access tokens
    IDENTITY_CHANGED: "IDENTITY_CHANGED",

    // profile might have been changed,
    // user info should be refetched
    PROFILE_CHANGED: "PROFILE_CHANGED",

    // service worker wants to update
    UPDATE_READY: "UPDATE_READY",

    // notification popup
    TOAST: "TOAST"
  }
};
