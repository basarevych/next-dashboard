const yup = require("yup");
const transformString = require("./lib/transformString");

module.exports = yup.object().shape({
  name: yup
    .string()
    .nullable()
    .meta({ label: "EDIT_USER_NAME_LABEL" })
    .transform(transformString),

  email: yup
    .string()
    .meta({ label: "EDIT_USER_EMAIL_LABEL" })
    .transform(transformString)
    .required("ERROR_FIELD_REQUIRED")
    .email("ERROR_INVALID_EMAIL"),

  password: yup
    .string()
    .meta({ label: "EDIT_USER_PASSWORD_LABEL" })
    .transform(transformString)
    .min(6, "ERROR_INVALID_PASSWORD"),

  isAdmin: yup.boolean().meta({
    label: "EDIT_USER_ADMIN_LABEL"
  })
});
