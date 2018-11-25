import React from "react";
import PropTypes from "prop-types";
import { propTypes } from "redux-form/immutable";
import normalize from "../../../common/normalize";
import validate from "../../../common/validate";

class FormComponent extends React.Component {
  static propTypes = {
    ...propTypes,
    fieldValues: PropTypes.object.isRequired,
    fieldErrors: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    updateValidation: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func
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

  static getValue(props, name) {
    return props.fieldValues[this.formName].get(name);
  }

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
    if (!this.cachedErrors[props.form]) return;

    // remove error status of the field changed
    for (let field of values.keys()) {
      if (
        this.cachedErrors[props.form][field] &&
        values.get(field) !== prevValues.get(field)
      ) {
        delete this.cachedErrors[props.form][field];
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
            props,
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
        if (errors.length) {
          if (!this.cachedErrors[props.form])
            this.cachedErrors[props.form] = {};
          this.cachedErrors[props.form][field] = errors;
        } else {
          if (this.cachedErrors[props.form])
            delete this.cachedErrors[props.form][field];
        }
      }
    } catch (error) {
      console.error(error);
    }

    if (
      this.cachedErrors[props.form] &&
      _.keys(this.cachedErrors[props.form]).length
    )
      throw _.cloneDeep(this.cachedErrors[props.form]);
  }

  static async onValidate(...args) {
    setTimeout(async () => {
      try {
        await this.doValidate(...args);
      } catch (_error) {
        // do nothing
      }
    });
  }

  constructor(props) {
    super(props);

    this.normalizers = {};
    for (let field of _.keys(this.constructor.fields)) {
      let options = this.constructor.fields[field].normalize;
      if (options)
        this.normalizers[field] = (...args) =>
          normalize(this.props, options, ...args);
    }
  }

  async validate() {
    let errors;
    try {
      // validate the form without tranforming values
      await this.constructor.doValidate(
        this.props.fieldValues[this.props.form],
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
