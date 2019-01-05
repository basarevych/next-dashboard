import React from "react";
import PropTypes from "prop-types";
import { List } from "immutable";
import { allCountries, iso2Lookup } from "country-telephone-data";
import Grid from "@material-ui/core/Grid";
import Form from "../Forms/Form";
import Field from "../Forms/Field";
import fields from "../../../common/forms/shipping";

class ShippingForm extends Form {
  static propTypes = {
    ...Form.propTypes,
    countries: PropTypes.instanceOf(List).isRequired,
    onReady: PropTypes.func.isRequired
  };

  static formName = "shippingForm";

  static addressFields = fields;

  static fields = {
    ...ShippingForm.addressFields
  };

  static onChange(values, dispatch, props, prevValues) {
    super.onChange(values, dispatch, props, prevValues);

    // when changing the country, update the phone if it's empty
    if (values.get("country") !== prevValues.get("country")) {
      let hint;
      if (prevValues.get("country")) {
        let oldCountry = allCountries[iso2Lookup[prevValues.get("country")]];
        if (oldCountry) hint = "+" + oldCountry.dialCode;
      }

      let newCountry = allCountries[iso2Lookup[values.get("country")]];
      if (newCountry) {
        if (!values.get("phone") || values.get("phone") === hint)
          dispatch(props.change("phone", "+" + newCountry.dialCode));
      }
    }
  }

  componentDidMount() {
    this.props.onReady({
      formName: this.constructor.formName,
      validate: this.validate.bind(this),
      refresh: null
    });
  }

  renderAddressBlock(isDisabled = false) {
    return (
      <React.Fragment>
        <Grid container spacing={16} item xs={12}>
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
        <Grid container spacing={16} item xs={12}>
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
        <Grid container spacing={16} item xs={12}>
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
              options={this.props.countries}
            />
          </Grid>
        </Grid>
        <Grid container spacing={16} item xs={12}>
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
      <Grid
        container
        spacing={16}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={this.submit}
      >
        {this.renderAddressBlock()}
      </Grid>
    );
  }
}

export default ShippingForm;
