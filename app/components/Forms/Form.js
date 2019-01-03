import React from "react";
import PropTypes from "prop-types";
import { propTypes } from "redux-form/immutable";
import normalize from "../../../common/normalize";
import validate from "../../../common/validate";

class FormComponent extends React.Component {
  static propTypes = {
    ...propTypes,
    getValue: PropTypes.func.isRequired,
    getError: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    updateValidation: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  static formName = "baseForm";

  static fields = {
    /*
    fieldName: {
      normalize: 'rules', // happens on change
      transform: 'rules', // happens on blur
      validate: 'rules',  // happens on blur
      label: 'ID',        // translation ID
    },
     */
  };

  static cachedErrors = {};

  static onSubmit(/*values, dispatch, props*/) {}

  static onSubmitFail(error, dispatch, submitError /*, props */) {
    if (process.env.NODE_ENV === "development")
      console.log(`${this.formName} submit failure`, error, submitError);
  }

  static onSubmitSuccess(result /*, dispatch, props */) {
    if (process.env.NODE_ENV === "development")
      console.log(`${this.formName} submit success`, result);
  }

  static onChange(values, dispatch, props, prevValues) {
    // remove error status of the field changed
    for (let field of _.keys(this.cachedErrors[this.formName] || {})) {
      if (values.get(field) !== prevValues.get(field)) {
        delete this.cachedErrors[this.formName][field];
        dispatch(props.clearAsyncError(field));
      }
    }
  }

  static async doValidate(
    values,
    dispatch,
    props,
    blurredField,
    transform = true
  ) {
    try {
      // if blurred field is not set, validate all of them
      let fields = blurredField
        ? _.isArray(blurredField)
          ? blurredField
          : [blurredField]
        : _.keys(this.fields);

      for (let field of fields) {
        let value = values.get(field);

        // transform value first if requested
        if (transform && this.fields[field].transform) {
          let transformed = normalize(
            this.fields[field].transform,
            value,
            value,
            values,
            values
          );
          if (transformed !== value) {
            await dispatch(props.change(field, transformed));
            value = transformed;
          }
        }

        let errors = [];

        // validate
        if (this.fields[field].validate)
          errors = validate(props, this.fields[field].validate, value, values);

        // cache result
        if (!this.cachedErrors[this.formName])
          this.cachedErrors[this.formName] = {};
        if (errors.length) this.cachedErrors[this.formName][field] = errors;
        else delete this.cachedErrors[this.formName][field];
      }
    } catch (error) {
      console.error(error);
    }

    if (_.keys(this.cachedErrors[this.formName] || {}).length)
      throw _.cloneDeep(this.cachedErrors[this.formName]);
  }

  static async onValidate(...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(this.doValidate(...args));
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  async validate() {
    let errors;
    try {
      // validate the form without tranforming values
      await this.constructor.doValidate(
        this.props.getValue(),
        this.props.dispatch,
        this.props,
        undefined,
        false
      );
    } catch (error) {
      errors = error;
    }
    await this.props.updateValidation(errors);
    return errors ? errors : true;
  }

  async submit() {
    try {
      let valid = await this.validate();
      if (valid !== true) return valid;
      return await this.props.handleSubmit();
    } catch (error) {
      console.error(error);
    }
  }

  // eslint-disable-next-line
  render() {
    return null;
  }
}

export default FormComponent;
