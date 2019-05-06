module.exports = {
  isNewUser: {
    label: "APP_AUTH_NEW_USER_LABEL"
  },
  email: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required|email",
    label: "APP_AUTH_EMAIL_LABEL"
  },
  password: {
    validate: "required",
    label: "APP_AUTH_PASSWORD_LABEL"
  }
};
