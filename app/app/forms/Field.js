import React from "react";
import PropTypes from "prop-types";
import { intlShape } from "react-intl";
import { Field } from "react-final-form";
import FormContext from "./context";
import normalize from "../../../common/normalize";
import validator from "../../../common/validate";
import TextField from "./fields/TextContainer";
import SelectField from "./fields/SelectContainer";
import CheckboxField from "./fields/CheckboxContainer";
import RadioField from "./fields/RadioContainer";
import ErrorField from "./fields/ErrorContainer";

class FormField extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.array,
    label: PropTypes.string,
    validate: PropTypes.func,
    parse: PropTypes.func,
    format: PropTypes.func,
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    variant: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool
  };

  render() {
    const {
      name,
      type,
      label,
      validate,
      parse,
      format,
      ...fieldProps
    } = this.props; // eslint-disable-line

    let Component;
    switch (type) {
      case "text":
      case "password":
      case "textarea":
        Component = TextField;
        break;
      case "select":
        Component = SelectField;
        break;
      case "checkbox":
        Component = CheckboxField;
        break;
      case "radio":
        Component = RadioField;
        break;
      case "error":
        Component = ErrorField;
        break;
    }

    return (
      <FormContext.Consumer>
        {({ fields, values, form, handleSubmit }) => {
          return (
            <Field
              validateFields={[]}
              {...fieldProps}
              form={form}
              component={Component}
              name={name}
              type={type}
              label={
                label ||
                (fields[name] &&
                  this.props.intl.formatMessage({ id: fields[name].label }))
              }
              onSubmit={handleSubmit}
              validate={(value, values) => {
                let errors = [];
                if (fields[name]) {
                  let options = fields[name].validate;
                  if (options) errors = validator(options, value, values);
                }
                if (!errors.length) errors = undefined;
                if (validate) return validate(value, values, errors);
                return errors;
              }}
              parse={(value, name) => {
                if (fields[name]) {
                  let options = fields[name].normalize;
                  if (options) value = normalize(options, value, values);
                }
                if (parse) return parse(value, name);
                return value;
              }}
              format={(value, name) => {
                if (fields[name]) {
                  let options = fields[name].transform;
                  if (options) value = normalize(options, value, values);
                }
                if (format) return format(value, name);
                return value;
              }}
              formatOnBlur
            />
          );
        }}
      </FormContext.Consumer>
    );
  }
}

export default FormField;
