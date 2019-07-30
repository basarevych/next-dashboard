import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import memoise from "memoize-one";
import validate from "../../../common/src/validate";
import FormContext from "./context";

const areEqualFields = memoise((a, b) => !!a && !!b && _.isEqual(a, b));

class FormComponent extends React.PureComponent {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    render: PropTypes.func.isRequired,
    validate: PropTypes.func,
    onSubmit: PropTypes.func.isRequired
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (areEqualFields(nextProps.fields, prevState.fields)) return null;
    return { fields: nextProps.fields };
  }

  constructor(props) {
    super(props);

    this.state = {};
    this.doValidate = this.doValidate.bind(this);
  }

  doValidate(values) {
    let errors = {};
    for (let key of _.keys(this.props.fields)) {
      const field = this.props.fields[key];
      if (field && field.validate) {
        let fieldError = validate(field.validate, values[key], values);
        if (fieldError && fieldError.length)
          _.assign(errors, { [key]: fieldError });
      }
    }
    if (this.props.validate) errors = this.props.validate(errors, values);
    return errors;
  }

  render() {
    const { fields, render, ...formProps } = this.props;
    return (
      <Formik
        validateOnBlur={true}
        validateOnChange={false}
        {...formProps}
        validate={this.doValidate}
        onSubmit={this.props.onSubmit}
        render={props => {
          const handleSubmit = () => {
            setTimeout(() => {
              let touched = _.assign({}, props.touched);
              for (let field of _.keys(fields)) touched[field] = true;
              props.setTouched(touched);
            });
            return props.handleSubmit();
          };
          return (
            <FormContext.Provider value={this.state}>
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                onReset={props.handleReset}
              >
                {render({ ...props, handleSubmit })}
              </form>
            </FormContext.Provider>
          );
        }}
      />
    );
  }
}

export default FormComponent;
