export default function getFormErrors(
  data,
  defaultMessage = "OPERATION_FAILED"
) {
  let result = {};
  let errors = data.errors || [];
  for (let error of errors) {
    if (error && error.code === "E_VALIDATION")
      Object.assign(result, error.details);
    else result._status = (result._status || []).concat([error.message]);
  }
  if (!Object.keys(result).length) result = { _status: defaultMessage };
  return result;
}
