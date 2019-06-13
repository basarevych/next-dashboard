import React from "react";
import PropTypes from "prop-types";
import Cards from "react-credit-cards";
import Grid from "@material-ui/core/Grid";
import ShippingForm from "./ShippingForm";
import { Form, Field } from "../app/forms";
import shippingFields from "../../common/forms/shipping";
import billingFields from "../../common/forms/billing";

export const styles = theme => ({
  cardContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("md")]: {
      marginTop: "2rem"
    }
  }
});

class BillingForm extends ShippingForm {
  static propTypes = {
    ...ShippingForm.propTypes,
    classes: PropTypes.object.isRequired,
    shippingValues: PropTypes.object.isRequired
  };

  static formName = "billingForm";

  render() {
    return (
      <Form
        fields={_.assign({}, billingFields, shippingFields)}
        initialValues={{ isSameAddress: true }}
        validate={(errors, values) => {
          if (values.isSameAddress)
            for (let field of _.keys(shippingFields)) delete errors[field];

          let report = {}; // collect completed fields
          for (let field of _.keys(_.assign({}, billingFields, shippingFields)))
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
        render={({ handleSubmit, values, active }) => {
          this.props.onSetSubmitter(this.constructor.formName, handleSubmit);

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
              ? this.props.shippingValues.firstName
              : values.firstName) || "") +
              " " +
              ((values.isSameAddress
                ? this.props.shippingValues.lastName
                : values.lastName) || "")
          );

          return (
            <Grid container spacing={2}>
              <Grid container spacing={1} item xs={12} md={6}>
                <Grid item xs={12}>
                  <Field name="cardNumber" type="text" />
                </Grid>
                <Grid item xs={6}>
                  <Field name="cardDate" type="text" />
                </Grid>
                <Grid item xs={6}>
                  <Field name="cardSecret" type="password" />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="isSameAddress"
                    type="checkbox"
                    onChange={(evt, formik) => {
                      const values = _.assign({}, formik.values);
                      const errors = _.assign({}, formik.errors);
                      const touched = _.assign({}, formik.touched);
                      for (let field of _.keys(shippingFields)) {
                        values[field] = "";
                        errors[field] = undefined;
                        if (evt.target.value) touched[field] = false;
                      }
                      formik.setValues(values);
                      formik.setErrors(errors);
                      formik.setTouched(touched);
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} item xs={12} md={6}>
                <div className={this.props.classes.cardContainer}>
                  <Cards
                    number={values.cardNumber || ""}
                    name={name}
                    expiry={_.replace(values.cardDate || "", /[^0-9]+/, "")}
                    cvc={_.replace(values.cardSecret || "", /[^0-9]+/, "")}
                    focused={focused}
                  />
                </div>
              </Grid>
              {this.renderAddressBlock(!!values.isSameAddress)}
            </Grid>
          );
        }}
      />
    );
  }
}

export default BillingForm;
