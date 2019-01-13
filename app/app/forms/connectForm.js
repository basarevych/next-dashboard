import React from "react";
import { Map } from "immutable";
import { connect } from "react-redux";
import {
  reduxForm,
  getFormValues,
  getFormAsyncErrors
} from "redux-form/immutable";
import { startAsyncValidation, stopAsyncValidation } from "redux-form";
import { FormNameContext, FormFieldsContext } from "./context";

export const getFormErrors = (data, defaultMessage = "OPERATION_FAILED") => {
  let result = {};
  let errors = _.get(data, "errors", []);
  for (let error of errors) {
    if (error && error.code === "E_VALIDATION") _.merge(result, error.details);
    else result._error = (result._error || []).concat([error.message]);
  }
  if (!_.keys(result).length) result = { _error: defaultMessage };
  return result;
};

export default (
  FormComponent,
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  options = {}
) => {
  const withContext = WrappedComponent =>
    function WithFormContext(props) {
      return (
        <FormNameContext.Provider value={FormComponent.formName}>
          <FormFieldsContext.Provider value={FormComponent.fields}>
            <WrappedComponent {...props} />
          </FormFieldsContext.Provider>
        </FormNameContext.Provider>
      );
    };

  const { destroyOnUnmount, ...reduxOptions } = options;
  const Form = connect(
    (state, props) =>
      _.assign(mapStateToProps ? mapStateToProps(state, props) : {}, {
        getValue: field => {
          const values = getFormValues(FormComponent.formName)(state);
          return field ? values && values.get(field) : values || Map();
        },
        getError: field => {
          const errors = getFormAsyncErrors(FormComponent.formName)(state);
          return field ? errors && errors.get(field) : errors || Map();
        }
      }),
    (dispatch, props) =>
      _.assign(mapDispatchToProps ? mapDispatchToProps(dispatch, props) : {}, {
        dispatch,
        updateValidation: async errors => {
          await dispatch(startAsyncValidation(FormComponent.formName));
          await dispatch(stopAsyncValidation(FormComponent.formName, errors));
        }
      }),
    mergeProps,
    _.keys(reduxOptions).length ? reduxOptions : undefined
  )(
    withContext(
      reduxForm({
        form: FormComponent.formName,
        destroyOnUnmount: destroyOnUnmount || true,
        pure: false,
        shouldAsyncValidate: ({ trigger }) =>
          _.includes(["blur", "submit"], trigger),
        onSubmit: FormComponent.onSubmit.bind(FormComponent),
        onSubmitFail: FormComponent.onSubmitFail.bind(FormComponent),
        onSubmitSuccess: FormComponent.onSubmitSuccess.bind(FormComponent),
        onChange: FormComponent.onChange.bind(FormComponent),
        asyncValidate: FormComponent.onValidate.bind(FormComponent)
      })(FormComponent)
    )
  );
  Form.formName = FormComponent.formName;
  return Form;
};
