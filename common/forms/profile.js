const yup = require("yup");
const transformString = require("./lib/transformString");
const matchPassword = require("./lib/matchPassword");

module.exports = yup.object().shape({
  name: yup
    .string()
    .nullable()
    .meta({ label: "PROFILE_NAME_LABEL" })
    .transform(transformString),

  email: yup
    .string()
    .meta({ label: "PROFILE_NAME_LABEL" })
    .transform(transformString)
    .required("ERROR_FIELD_REQUIRED")
    .email("ERROR_INVALID_EMAIL"),

  password1: yup
    .string()
    .nullable()
    .meta({ label: "PROFILE_PASSWORD1_LABEL" })
    .transform(transformString)
    .min(6, "ERROR_INVALID_PASSWORD"),

  password2: yup
    .string()
    .nullable()
    .meta({ label: "PROFILE_PASSWORD2_LABEL" })
    .transform(transformString)
    .min(6, "ERROR_INVALID_PASSWORD")
    .when("password1", matchPassword)
});
