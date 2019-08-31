module.exports = {
  isNewUser: {
    label: "APP_AUTH_NEW_USER_LABEL"
  },
  email: {
    label: "APP_AUTH_EMAIL_LABEL",
    normalize: "remove:spaces",
    transform: "trim",
    validate: "required|email"
  },
  password: {
    label: "APP_AUTH_PASSWORD_LABEL",
    validate: "required|password"
  }
};
