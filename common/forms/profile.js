module.exports = {
  name: {
    label: "PROFILE_NAME_LABEL",
    normalize: "compact:spaces",
    transform: "trim"
  },
  email: {
    label: "PROFILE_EMAIL_LABEL",
    normalize: "remove:spaces",
    transform: "trim",
    validate: "required|email"
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
