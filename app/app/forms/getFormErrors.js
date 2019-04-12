import { FORM_ERROR } from "final-form";

export default function getFormErrors(
  data,
  defaultMessage = "OPERATION_FAILED"
) {
  let result = {};
  let errors = _.get(data, "errors") || [];
  for (let error of errors) {
    if (error && error.code === "E_VALIDATION") _.merge(result, error.details);
    else
      result[FORM_ERROR] = (result[FORM_ERROR] || []).concat([error.message]);
  }
  if (!_.keys(result).length) result = { [FORM_ERROR]: defaultMessage };
  return result;
}
