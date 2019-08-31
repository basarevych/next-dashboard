module.exports = {
  uid: {
    label: "EDIT_EMPLOYEE_UID_LABEL",
    normalize: "integer",
    validate: "required"
  },
  checked: {
    label: "EDIT_EMPLOYEE_CHECKED_LABEL"
  },
  name: {
    label: "EDIT_EMPLOYEE_NAME_LABEL",
    normalize: "compact:spaces",
    transform: "trim",
    validate: "required"
  },
  dept: {
    label: "EDIT_EMPLOYEE_DEPT_LABEL",
    validate: "required"
  },
  title: {
    label: "EDIT_EMPLOYEE_TITLE_LABEL",
    normalize: "compact:spaces",
    transform: "trim",
    validate: "required"
  },
  country: {
    label: "EDIT_EMPLOYEE_COUNTRY_LABEL",
    validate: "required"
  },
  salary: {
    label: "EDIT_EMPLOYEE_SALARY_LABEL",
    normalize: "integer",
    validate: "required"
  }
};
