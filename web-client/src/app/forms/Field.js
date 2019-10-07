import React, { forwardRef, useContext, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { reach } from "yup";
import { Field, connect } from "formik";
import { useIntl } from "react-intl";
import { FormContext } from "./Form";
import TextField from "./fields/Text";
import SelectField from "./fields/Select";
import CheckboxField from "./fields/Checkbox";
import RadioField from "./fields/Radio";
import ErrorField from "./fields/Error";

function FormField(props) {
  const intl = useIntl();

  const { schema } = useContext(FormContext);

  const handleChange = useCallback(
    evt => {
      if (props.onChange) props.onChange(evt, props.formik);
      props.formik.setFieldError(props.name, undefined);
    },
    [props.name, props.onChange, props.formik]
  );

  const handleFocus = useCallback(
    evt => {
      if (props.onFocus) props.onFocus(evt, props.formik);
    },
    [props.onFocus, props.formik]
  );

  const handleBlur = useCallback(
    evt => {
      if (props.onBlur) props.onBlur(evt, props.formik);
    },
    [props.onBlur, props.formik]
  );

  let { name, type, label, formik, forwardedRef, ...fieldProps } = props;

  if (!label) {
    const fieldSchema = reach(schema, name);
    if (fieldSchema) {
      const descr = fieldSchema.describe();
      if (descr) {
        const key = descr.meta.label;
        if (key) label = intl.formatMessage({ id: key });
      }
    }
  }

  const Component = useMemo(() => {
    switch (type) {
      case "text":
      case "password":
      case "textarea":
        return TextField;
      case "select":
        return SelectField;
      case "checkbox":
        return CheckboxField;
      case "radio":
        return RadioField;
      case "error":
        return ErrorField;
      default:
        throw new Error(`Unknown field type: ${type}`);
    }
  }, [type]);

  const render = useCallback(
    renderProps => (
      <Component
        {...fieldProps}
        {...renderProps}
        forwardedRef={forwardedRef}
        formik={formik}
        name={name}
        type={type}
        label={label}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        handleSubmit={formik.handleSubmit}
      />
    ),
    [
      Component,
      name,
      type,
      label,
      formik,
      forwardedRef,
      fieldProps,
      handleChange,
      handleBlur
    ]
  );

  return <Field name={name} render={render} />;
}

FormField.propTypes = {
  forwardedRef: PropTypes.object,
  formik: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

const FieldComponent = connect(FormField);

const MyField = forwardRef((props, ref) => {
  return <FieldComponent {...props} forwardedRef={ref} />;
});
MyField.displayName = "MyField";
export default MyField;
