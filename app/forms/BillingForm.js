import React from "react";
import PropTypes from "prop-types";
import createDecorator from "final-form-calculate";
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
    shippingValues: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
  };

  static formName = "billingForm";

  constructor(props) {
    super(props);

    this.sameAddressDecorator = createDecorator({
      field: "isSameAddress", // reset form when isSameAddress changes
      updates: _.reduce(
        _.keys(shippingFields),
        (acc, cur) => {
          acc[cur] = isSameAddress =>
            isSameAddress ? this.props.shippingValues[cur] : "";
          return acc;
        },
        {}
      )
    });
  }

  render() {
    return (
      <Form
        fields={_.assign({}, billingFields, shippingFields)}
        decorators={[this.phonesDecorator, this.sameAddressDecorator]}
        onSubmit={_.noop}
        render={({ handleSubmit, values, errors, active }) => {
          this.props.onSetStatus(
            this.constructor.formName,
            handleSubmit,
            values,
            errors
          );

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

          let name = "";
          if (values.isSameAddress) {
            name = _.trim(
              (this.props.shippingValues.firstName || "") +
                " " +
                (this.props.shippingValues.lastName || "")
            );
          } else {
            name = _.trim(
              (values.firstName || "") + " " + (values.lastName || "")
            );
          }

          return (
            <Grid container spacing={16}>
              <Grid container spacing={16} item xs={12} md={6}>
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
                    validateFields={_.keys(shippingFields)}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={16} item xs={12} md={6}>
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
