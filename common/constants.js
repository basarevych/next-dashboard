"use strict";

const roles = {
  ANONYMOUS: "ANONYMOUS", // only the anonymous has this
  AUTHENTICATED: "AUTHENTICATED", // every one including anonymous has this
  ADMIN: "ADMIN"
};

module.exports = {
  apiBase: "/api",
  graphqlBase: "/graphql",
  socketsBase: "/ws",
  roles,
  oauthProviders: {
    FACEBOOK: "FACEBOOK",
    TWITTER: "TWITTER",
    GOOGLE: "GOOGLE"
  },
  pages: {
    "/": {
      page: "/"
    },
    "/dashboard": {
      page: "/dashboard",
      icon: "dashboard",
      menu: "MENU_DASHBOARD",
      title: "TITLE_DASHBOARD",
      isAllowed: roles => _.includes(roles, roles.AUTHENTICATED)
    },
    "/forms": {
      page: "/forms",
      icon: "forms",
      menu: "MENU_FORMS",
      title: "TITLE_FORMS",
      isAllowed: roles => _.includes(roles, roles.AUTHENTICATED)
    },
    "/charts": {
      page: "/charts",
      icon: "charts",
      menu: "MENU_CHARTS",
      title: "TITLE_CHARTS",
      isAllowed: roles => _.includes(roles, roles.AUTHENTICATED)
    },
    "/tables": {
      page: "/tables",
      icon: "tables",
      menu: "MENU_TABLES",
      title: "TITLE_TABLES",
      isAllowed: roles => _.includes(roles, roles.AUTHENTICATED)
    },
    "/maps": {
      page: "/maps",
      icon: "maps",
      menu: "MENU_MAPS",
      title: "TITLE_MAPS",
      isAllowed: roles => _.includes(roles, roles.AUTHENTICATED)
    },
    "/notifications": {
      page: "/notifications",
      icon: "notifications",
      menu: "MENU_NOTIFICATIONS",
      title: "TITLE_NOTIFICATIONS",
      isAllowed: roles => _.includes(roles, roles.AUTHENTICATED)
    },
    "/typography": {
      page: "/typography",
      icon: "typography",
      menu: "MENU_TYPOGRAPHY",
      title: "TITLE_TYPOGRAPHY",
      isAllowed: roles => _.includes(roles, roles.AUTHENTICATED)
    },
    "/icons": {
      page: "/icons",
      icon: "icons",
      menu: "MENU_ICONS",
      title: "TITLE_ICONS",
      isAllowed: roles => _.includes(roles, roles.AUTHENTICATED)
    },
    "/auth/profile": {
      page: "/auth/profile",
      title: "TITLE_PROFILE",
      isAllowed: roles =>
        _.includes(roles, roles.AUTHENTICATED) &&
        !_.includes(roles, roles.ANONYMOUS)
    },
    "/auth/verify": {
      page: "/auth/verify",
      title: "TITLE_VERIFY"
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
      isAllowed: roles => _.includes(roles, roles.ADMIN)
    }
  },
  depts: {
    PRODUCTION: "PRODUCTION",
    RD: "RD",
    PURCHASING: "PURCHASING",
    MARKETING: "MARKETING",
    HR: "HR",
    ACCOUNTING: "ACCOUNTING"
  },
  tableUrl: "https://jsonplaceholder.typicode.com/photos",
  messages: {
    HELLO: "HELLO",
    SET_STATUS: "SET_STATUS",
    TOAST: "TOAST"
  },
  events: {
    FONTS_LOADED: "FONTS_LOADED",
    TOAST: "TOAST"
  }
};
