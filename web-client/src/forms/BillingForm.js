import React, { forwardRef, useCallback } from "react";
import PropTypes from "prop-types";
import Cards from "react-credit-cards";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import ShippingForm, { renderAddressBlock } from "./ShippingForm";
import { Form, Field } from "../app/forms";
import shippingSchema from "../../common/forms/shipping";
import billingSchema from "../../common/forms/billing";

const shippingFields = _.keys(shippingSchema.fields);

const initialValues = { isSameAddress: true };

function handleSameAddressChange(evt, formik) {
  for (let field of shippingFields) {
    formik.setFieldValue(field, "");
    formik.setFieldError(field, false);
    formik.setFieldTouched(field, false);
  }
}

function doSubmit(values, { setSubmitting }) {
  setSubmitting(false);
}

const useStyles = makeStyles(theme => ({
  cardContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("md")]: {
      marginTop: "2rem"
    }
  }
}));

function BillingForm(props) {
  const classes = useStyles(props);

  const render = useCallback(
    ({ values, active }) => {
      let focused;
      switch (active) {
        case "cardNumber":
          focused = "number";
          break;
        case "firstName":
        case "lastName":
          focused = "name";
          break;
        case "cardDate":
          focused = "expiry";
          break;
        case "cardSecret":
          focused = "cvc";
          break;
      }

      let name = _.trim(
        ((values.isSameAddress
          ? props.shippingValues.firstName
          : values.firstName) || "") +
          " " +
          ((values.isSameAddress
            ? props.shippingValues.lastName
            : values.lastName) || "")
      );

      return (
        <Grid container spacing={2}>
          <Grid container spacing={1} item xs={12} md={6}>
            <Grid item xs={12}>
              <Field
                name="cardNumber"
                type="text"
                format="#### #### #### ####"
                mask="_"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                name="cardDate"
                type="text"
                format="## / ##"
                placeholder="MM / YY"
                mask={["M", "M", "Y", "Y"]}
              />
            </Grid>
            <Grid item xs={6}>
              <Field name="cardSecret" type="password" />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="isSameAddress"
                type="checkbox"
                onChange={handleSameAddressChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} item xs={12} md={6}>
            <div className={classes.cardContainer}>
              <Cards
                number={values.cardNumber || ""}
                name={name}
                expiry={_.replace(values.cardDate || "", /[^0-9]+/, "")}
                cvc={_.replace(values.cardSecret || "", /[^0-9]+/, "")}
                focused={focused}
              />
            </div>
          </Grid>
          {renderAddressBlock(values, !!values.isSameAddress)}
        </Grid>
      );
    },
    [props.shippingValues.firstName, props.shippingValues.lastName]
  );

  return (
    <Form
      ref={props.forwardedRef}
      schema={billingSchema}
      initialValues={initialValues}
      onSubmit={doSubmit}
      render={render}
    />
  );
}

BillingForm.propTypes = {
  ...ShippingForm.propTypes,
  shippingValues: PropTypes.object.isRequired
};
BillingForm.formName = "billingForm";

const MyBillingForm = forwardRef((props, ref) => {
  return <BillingForm {...props} forwardedRef={ref} />;
});
MyBillingForm.displayName = "MyBillingForm";

export default MyBillingForm;
