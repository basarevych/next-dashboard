const yup = require("yup");
const transformString = require("./lib/transformString");
const transformAddress = require("./lib/transformAddress");
const matchCountryPhone = require("./lib/matchCountryPhone");
const { allCountries } = require("../src/countries");

const countries = allCountries.map(item => item.iso2);

module.exports = yup.object().shape({
  firstName: yup
    .string()
    .meta({ label: "SHIPPING_FIRST_NAME_LABEL" })
    .transform(transformString)
    .required("ERROR_FIELD_REQUIRED"),

  middleName: yup
    .string()
    .meta({ label: "SHIPPING_MIDDLE_NAME_LABEL" })
    .transform(transformString),

  lastName: yup
    .string()
    .meta({ label: "SHIPPING_LAST_NAME_LABEL" })
    .transform(transformString)
    .required("ERROR_FIELD_REQUIRED"),

  address: yup
    .string()
    .meta({ label: "SHIPPING_ADDRESS_LABEL" })
    .transform(transformAddress)
    .required("ERROR_FIELD_REQUIRED"),

  city: yup
    .string()
    .meta({ label: "SHIPPING_CITY_LABEL" })
    .transform(transformString)
    .required("ERROR_FIELD_REQUIRED"),

  state: yup
    .string()
    .meta({ label: "SHIPPING_STATE_LABEL" })
    .transform(transformString),

  code: yup
    .string()
    .meta({ label: "SHIPPING_CODE_LABEL" })
    .transform(transformString)
    .required("ERROR_FIELD_REQUIRED"),

  country: yup
    .string()
    .meta({ label: "SHIPPING_COUNTRY_LABEL" })
    .required("ERROR_FIELD_REQUIRED")
    .oneOf(countries, "ERROR_INVALID_PATTERN"),

  phone: yup
    .string()
    .meta({ label: "SHIPPING_PHONE_LABEL" })
    .transform(transformString)
    .required("ERROR_FIELD_REQUIRED")
    .when("country", matchCountryPhone),

  email: yup
    .string()
    .meta({ label: "SHIPPING_EMAIL_LABEL" })
    .transform(transformString)
    .required("ERROR_FIELD_REQUIRED")
    .email("ERROR_INVALID_EMAIL")
});
