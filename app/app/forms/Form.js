import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-final-form";
import FormContext from "./context";

class FormComponent extends React.Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    render: PropTypes.func.isRequired
  };

  render() {
    const { fields, render, ...formProps } = this.props;

    return (
      <Form
        {...formProps}
        render={props => (
          <FormContext.Provider value={{ fields, ...props }}>
            <form noValidate autoComplete="off" onSubmit={props.handleSubmit}>
              {render(props)}
            </form>
          </FormContext.Provider>
        )}
      />
    );
  }
}

export default FormComponent;
