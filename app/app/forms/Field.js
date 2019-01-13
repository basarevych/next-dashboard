import React from "react";
import PropTypes from "prop-types";
import { intlShape } from "react-intl";
import { Field } from "redux-form/immutable";
import { FormNameContext, FormFieldsContext } from "./context";
import normalize from "../../../common/normalize";
import TextField from "./fields/TextContainer";
import SelectField from "./fields/SelectContainer";
import CheckboxField from "./fields/CheckboxContainer";

class FormField extends React.PureComponent {
  static propTypes = {
    intl: intlShape.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

  render() {
    const { name, type, ...fieldProps } = this.props; // eslint-disable-line

    let Component;
    switch (this.props.type) {
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
    }

    return (
      <FormNameContext.Consumer>
        {formName => (
          <FormFieldsContext.Consumer>
            {fields => (
              <Field
                component={Component}
                fieldId={`input-${formName}-${name}`}
                name={name}
                type={type}
                label={
                  fields[name] &&
                  this.props.intl.formatMessage({ id: fields[name].label })
                }
                normalize={(value, ...args) => {
                  if (!fields[this.props.name]) return value;

                  let options = fields[this.props.name].normalize;
                  if (!options) return value;

                  return normalize(options, value, ...args);
                }}
                {...fieldProps}
              />
            )}
          </FormFieldsContext.Consumer>
        )}
      </FormNameContext.Consumer>
    );
  }
}

export default FormField;
