module.exports = {
  name: {
    label: "EDIT_USER_NAME_LABEL"
  },
  email: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required|email",
    label: "EDIT_USER_EMAIL_LABEL"
  },
  password: {
    label: "EDIT_USER_PASSWORD_LABEL",
    validate: "password"
  },
  isAdmin: {
    label: "EDIT_USER_ADMIN_LABEL"
  }
};
