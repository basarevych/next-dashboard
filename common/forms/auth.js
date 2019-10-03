const yup = require("yup");
const transformString = require("./lib/transformString");

module.exports = yup.object().shape({
  isNewUser: yup.boolean().meta({
    label: "APP_AUTH_NEW_USER_LABEL"
  }),

  email: yup
    .string()
    .meta({ label: "APP_AUTH_EMAIL_LABEL" })
    .transform(transformString)
    .required("ERROR_FIELD_REQUIRED")
    .email("ERROR_INVALID_EMAIL"),

  password: yup
    .string()
    .meta({ label: "APP_AUTH_PASSWORD_LABEL" })
    .transform(transformString)
    .required("ERROR_FIELD_REQUIRED")
    .min(6, "ERROR_INVALID_PASSWORD")
});
