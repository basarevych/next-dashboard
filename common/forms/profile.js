module.exports = {
  name: {
    normalize: "rows:1|compact:spaces",
    label: "PROFILE_NAME_LABEL",
    transform: "trim"
  },
  email: {
    normalize: "rows:1|remove:spaces",
    transform: "trim",
    validate: "required|email",
    label: "PROFILE_EMAIL_LABEL"
  },
  password1: {
    label: "PROFILE_PASSWORD1_LABEL",
    validate: "password"
  },
  password2: {
    label: "PROFILE_PASSWORD2_LABEL",
    validate: "password|required:password1|match:password1"
  }
};
