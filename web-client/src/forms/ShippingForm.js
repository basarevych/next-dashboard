import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Form, Field } from "../app/forms";
import fields from "../../common/forms/shipping";
import {
  allCountries,
  iso2Lookup,
  countryOptions
} from "../../common/src/countries";

class ShippingForm extends React.PureComponent {
  static propTypes = {
    onSetSubmitter: PropTypes.func.isRequired,
    onSetState: PropTypes.func.isRequired
  };

  static formName = "shippingForm";

  constructor(props) {
    super(props);

    this.countryOptions = countryOptions;
  }

  componentWillUnmount() {
    this.props.onSetSubmitter(this.constructor.formName, null);
  }

  renderAddressBlock(isDisabled = false) {
    return (
      <React.Fragment>
        <Grid container spacing={1} item xs={12}>
          <Grid item xs={12} md={4}>
            <Field name="firstName" type="text" disabled={isDisabled} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Field name="middleName" type="text" disabled={isDisabled} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Field name="lastName" type="text" disabled={isDisabled} />
          </Grid>
        </Grid>
        <Grid container spacing={1} item xs={12}>
          <Grid item xs={12} md={7}>
            <Field
              name="address"
              type="textarea"
              rows={2}
              disabled={isDisabled}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Field
              name="state"
              type="textarea"
              rows={2}
              disabled={isDisabled}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} item xs={12}>
          <Grid item xs={12} md={4}>
            <Field name="city" type="text" disabled={isDisabled} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Field name="code" type="text" disabled={isDisabled} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Field
              name="country"
              type="select"
              disabled={isDisabled}
              native
              options={this.countryOptions}
              onChange={(evt, formik) => {
                let value = evt.target.value;
                if (value) {
                  let info = allCountries[iso2Lookup[value]];
                  let prefix = "+" + info.dialCode;
                  if (info && !_.startsWith(formik.values.phone, prefix))
                    formik.setFieldValue("phone", prefix);
                }
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} item xs={12}>
          <Grid item xs={12} md={5}>
            <Field name="phone" type="text" disabled={isDisabled} />
          </Grid>
          <Grid item xs={12} md={7}>
            <Field name="email" type="text" disabled={isDisabled} />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Form
        fields={fields}
        validate={(errors, values) => {
          let report = {}; // collect completed fields
          for (let field of _.keys(fields))
            if (!errors[field]) report[field] = values[field];
          this.props.onSetState(
            this.constructor.formName,
            report,
            !_.keys(errors).length
          );
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
        render={({ handleSubmit }) => {
          this.props.onSetSubmitter(this.constructor.formName, handleSubmit);
          return (
            <Grid container spacing={2}>
              {this.renderAddressBlock()}
            </Grid>
          );
        }}
      />
    );
  }
}

export default ShippingForm;
