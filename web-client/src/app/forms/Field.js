import React from "react";
import PropTypes from "prop-types";
import { intlShape } from "react-intl";
import { Field } from "formik";
import FormContext from "./context";
import normalize from "../../../common/src/normalize";
import TextField from "./fields/TextContainer";
import SelectField from "./fields/SelectContainer";
import CheckboxField from "./fields/CheckboxContainer";
import RadioField from "./fields/RadioContainer";
import ErrorField from "./fields/ErrorContainer";

class FormField extends React.PureComponent {
  static propTypes = {
    intl: intlShape.isRequired,
    formik: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    messages: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.array,
    autoFocus: PropTypes.bool,
    className: PropTypes.string,
    variant: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
  };

  static contextType = FormContext;

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(evt) {
    let { fields } = this.context;
    if (fields[this.props.name]) {
      let normalizeOptions = fields[this.props.name].normalize;
      if (normalizeOptions) {
        evt.target.value = normalize(
          normalizeOptions,
          evt.target.value,
          this.props.formik.values
        );
      }
    }
    if (this.props.onChange) this.props.onChange(evt, this.props.formik);
    this.props.formik.setFieldError(this.props.name, undefined);
  }

  handleBlur(evt) {
    let { fields } = this.context;
    let initialValue = evt.target.value;
    if (fields[this.props.name]) {
      let transformOptions = fields[this.props.name].transform;
      if (transformOptions) {
        evt.target.value = normalize(
          transformOptions,
          evt.target.value,
          this.props.formik.values
        );
      }
    }
    if (this.props.onBlur) this.props.onBlur(evt, this.props.formik);
    if (evt.target.value !== initialValue)
      this.props.formik.setFieldValue(this.props.name, evt.target.value);
  }

  render() {
    let { name, type, label, ...fieldProps } = this.props;
    let { fields } = this.context;

    if (!label && fields[name] && fields[name].label)
      label = this.props.intl.formatMessage({ id: fields[name].label });

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
      <Field
        name={name}
        render={props => {
          const handleSubmit = () => {
            setTimeout(() => {
              let touched = _.assign({}, props.form.touched);
              for (let field of _.keys(fields)) touched[field] = true;
              props.form.setTouched(touched);
            });
            return props.form.handleSubmit();
          };
          return (
            <Component
              {...fieldProps}
              {...props}
              name={name}
              type={type}
              label={label}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              handleSubmit={handleSubmit}
            />
          );
        }}
      />
    );
  }
}

export default FormField;
