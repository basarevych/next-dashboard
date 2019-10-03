import React, { createContext, forwardRef, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";

export const FormContext = createContext({});

function FormComponent(props) {
  const { forwardedRef, schema, render, initialValues, ...formProps } = props;

  const context = useMemo(() => ({ schema }), [schema]);

  const initial = useMemo(() => {
    if (initialValues) return initialValues;
    return schema.cast();
  }, [initialValues]);

  const formikRender = useCallback(
    renderProps => (
      <FormContext.Provider value={context}>
        <form
          noValidate
          autoComplete="off"
          onSubmit={renderProps.handleSubmit}
          onReset={renderProps.handleReset}
        >
          {render({ ...renderProps })}
        </form>
      </FormContext.Provider>
    ),
    [context, render]
  );

  return (
    <Formik
      ref={forwardedRef}
      validateOnBlur={true}
      validateOnChange={false}
      {...formProps}
      validationSchema={schema}
      initialValues={initial}
      render={formikRender}
    />
  );
}

FormComponent.propTypes = {
  forwardedRef: PropTypes.object,
  schema: PropTypes.object.isRequired,
  initialValues: PropTypes.object,
  render: PropTypes.func.isRequired
};

const MyForm = forwardRef((props, ref) => {
  return <FormComponent {...props} forwardedRef={ref} />;
});
MyForm.displayName = "MyForm";
export default MyForm;
