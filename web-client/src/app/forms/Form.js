import React, {
  createContext,
  forwardRef,
  useMemo,
  useImperativeHandle
} from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";

export const FormContext = createContext({});

function FormComponent(props) {
  const { forwardedRef, schema, component, render, ...formikProps } = props;
  const Component = component;

  const context = useMemo(() => ({ schema }), [schema]);

  useImperativeHandle(forwardedRef, () => formikProps);

  if (!Component && !render)
    throw new Error("Use either component prop or children for the Form");

  return (
    <FormContext.Provider value={context}>
      <form
        noValidate
        autoComplete="off"
        onSubmit={props.handleSubmit}
        onReset={props.handleReset}
      >
        {Component ? <Component {...formikProps} /> : render(formikProps)}
      </form>
    </FormContext.Provider>
  );
}

FormComponent.propTypes = {
  forwardedRef: PropTypes.object,
  schema: PropTypes.object.isRequired,
  component: PropTypes.object,
  render: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleReset: PropTypes.func
};

const withFormData = ({
  forwardedRef,
  schema,
  component,
  render
}) => WrappedComponent =>
  function WrappedForm(props) {
    return (
      <WrappedComponent
        {...props}
        forwardedRef={forwardedRef}
        schema={schema}
        component={component}
        render={render}
      />
    );
  };

function FormContainer(props) {
  const {
    forwardedRef,
    schema,
    initialValues,
    component,
    children,
    ...formProps
  } = props;

  const initial = useMemo(() => {
    if (initialValues) return initialValues;
    return schema.cast();
  }, [initialValues]);

  return (
    <Formik
      validateOnBlur={true}
      validateOnChange={false}
      {...formProps}
      validationSchema={schema}
      initialValues={initial}
      component={withFormData({
        forwardedRef,
        schema,
        component,
        render: children
      })(FormComponent)}
    />
  );
}

FormContainer.propTypes = {
  forwardedRef: PropTypes.object,
  schema: PropTypes.object.isRequired,
  initialValues: PropTypes.object,
  component: PropTypes.object,
  children: PropTypes.func
};

const Form = forwardRef((props, ref) => (
  <FormContainer {...props} forwardedRef={ref} />
));
Form.displayName = "Form";

export default Form;
