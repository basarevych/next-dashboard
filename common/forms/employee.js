const yup = require("yup");
const transformString = require("./lib/transformString");
const { allCountries } = require("../src/countries");
const constants = require("../constants");

const countries = allCountries.map(item => item.iso2);
const depts = Object.keys(constants.depts);

module.exports = yup.object().shape({
  uid: yup
    .number()
    .meta({ label: "EDIT_EMPLOYEE_UID_LABEL" })
    .typeError("ERROR_INVALID_NUMBER")
    .required("ERROR_FIELD_REQUIRED"),

  checked: yup.boolean().meta({
    label: "EDIT_EMPLOYEE_CHECKED_LABEL"
  }),

  name: yup
    .string()
    .meta({ label: "EDIT_EMPLOYEE_NAME_LABEL" })
    .transform(transformString)
    .required("ERROR_FIELD_REQUIRED"),

  dept: yup
    .string()
    .meta({ label: "EDIT_EMPLOYEE_DEPT_LABEL" })
    .transform(transformString)
    .required("ERROR_FIELD_REQUIRED")
    .oneOf(depts, "ERROR_INVALID_PATTERN"),

  title: yup
    .string()
    .meta({ label: "EDIT_EMPLOYEE_TITLE_LABEL" })
    .transform(transformString)
    .required("ERROR_FIELD_REQUIRED"),

  country: yup
    .string()
    .meta({ label: "EDIT_EMPLOYEE_COUNTRY_LABEL" })
    .required("ERROR_FIELD_REQUIRED")
    .oneOf(countries, "ERROR_INVALID_PATTERN"),

  salary: yup
    .number()
    .meta({ label: "EDIT_EMPLOYEE_SALARY_LABEL" })
    .typeError("ERROR_INVALID_NUMBER")
    .required("ERROR_FIELD_REQUIRED")
});
