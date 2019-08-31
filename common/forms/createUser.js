module.exports = {
  name: {
    label: "EDIT_USER_NAME_LABEL"
  },
  email: {
    label: "EDIT_USER_EMAIL_LABEL",
    normalize: "remove:spaces",
    transform: "trim",
    validate: "required|email"
  },
  password: {
    label: "EDIT_USER_PASSWORD_LABEL",
    validate: "required|password"
  },
  isAdmin: {
    label: "EDIT_USER_ADMIN_LABEL"
  }
};
