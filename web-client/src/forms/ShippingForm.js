import React, { forwardRef, useCallback } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Form, Field } from "../app/forms";
import shippingSchema from "../../common/forms/shipping";
import {
  allCountries,
  iso2Lookup,
  countryOptions
} from "../../common/src/countries";

function handleCountryChange(evt, formik) {
  let value = evt.target.value;
  if (value) {
    let info = allCountries[iso2Lookup[value]];
    let prefix = "+" + info.dialCode;
    if (info && !_.startsWith(formik.values.phone, prefix))
      formik.setFieldValue("phone", prefix);
  }
}

function doSubmit(values, { setSubmitting }) {
  setSubmitting(false);
}

export function renderAddressBlock(values, isDisabled = false) {
  const info = allCountries[iso2Lookup[values.country]];
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
          <Field name="state" type="textarea" rows={2} disabled={isDisabled} />
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
            options={countryOptions}
            onChange={handleCountryChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} item xs={12}>
        <Grid item xs={12} md={5}>
          <Field
            name="phone"
            type="text"
            format={info ? _.replace(info.format, /\./g, "#") : undefined}
            mask="_"
            disabled={isDisabled}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Field name="email" type="text" disabled={isDisabled} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

function ShippingForm(props) {
  const render = useCallback(({ values }) => {
    return (
      <Grid container spacing={2}>
        {renderAddressBlock(values)}
      </Grid>
    );
  });

  return (
    <Form
      ref={props.forwardedRef}
      schema={shippingSchema}
      onSubmit={doSubmit}
      render={render}
    />
  );
}

ShippingForm.propTypes = {
  forwardedRef: PropTypes.object.isRequired
};
ShippingForm.formName = "shippingForm";

const MyShippingForm = forwardRef((props, ref) => {
  return <ShippingForm {...props} forwardedRef={ref} />;
});
MyShippingForm.displayName = "MyShippingForm";

export default MyShippingForm;
