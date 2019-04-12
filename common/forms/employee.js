module.exports = {
  uid: {
    normalize: "integer",
    validate: "required",
    label: "EDIT_EMPLOYEE_UID_LABEL"
  },
  checked: {
    label: "EDIT_EMPLOYEE_CHECKED_LABEL"
  },
  name: {
    normalize: "rows:1|compact:spaces",
    transform: "trim",
    validate: "required",
    label: "EDIT_EMPLOYEE_NAME_LABEL"
  },
  dept: {
    validate: "required",
    label: "EDIT_EMPLOYEE_DEPT_LABEL"
  },
  title: {
    normalize: "rows:1|compact:spaces",
    transform: "trim",
    validate: "required",
    label: "EDIT_EMPLOYEE_TITLE_LABEL"
  },
  country: {
    validate: "required",
    label: "EDIT_EMPLOYEE_COUNTRY_LABEL"
  },
  salary: {
    normalize: "integer",
    validate: "required",
    label: "EDIT_EMPLOYEE_SALARY_LABEL"
  }
};
