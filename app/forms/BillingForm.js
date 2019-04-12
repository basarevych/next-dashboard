import React from "react";
import PropTypes from "prop-types";
import createDecorator from "final-form-calculate";
import Grid from "@material-ui/core/Grid";
import ShippingForm from "./ShippingForm";
import { Form, Field } from "../app/forms";
import shippingFields from "../../common/forms/shipping";
import billingFields from "../../common/forms/billing";

class BillingForm extends ShippingForm {
  static propTypes = {
    ...ShippingForm.propTypes,
    shippingValues: PropTypes.object.isRequired
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
        render={({ handleSubmit, values, errors }) => {
          this.props.onSetStatus(
            this.constructor.formName,
            handleSubmit,
            values,
            errors
          );
          return (
            <Grid container spacing={16}>
              <Grid container spacing={16} item xs={12}>
                <Grid item xs={12} md={6}>
                  <Field name="cardNumber" type="text" />
                </Grid>
                <Grid item xs={12} md={3}>
                  <Field name="cardDate" type="text" />
                </Grid>
                <Grid item xs={12} md={3}>
                  <Field name="cardSecret" type="password" />
                </Grid>
              </Grid>
              <Grid container spacing={16} item xs={12}>
                <Grid item xs={12} md={6}>
                  <Field
                    name="isSameAddress"
                    type="checkbox"
                    validateFields={_.keys(shippingFields)}
                  />
                </Grid>
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
