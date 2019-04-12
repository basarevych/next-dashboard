import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import createDecorator from "final-form-calculate";
import { Form, Field } from "../app/forms";
import fields from "../../common/forms/shipping";
import {
  allCountries,
  iso2Lookup,
  countryOptions
} from "../../common/countries";

class ShippingForm extends React.PureComponent {
  static propTypes = {
    onSetStatus: PropTypes.func.isRequired
  };

  static formName = "shippingForm";

  constructor(props) {
    super(props);

    this.countryOptions = countryOptions;

    this.phonesDecorator = createDecorator({
      field: "country", // when country changes...
      updates: {
        // ...update the phone if it's empty
        phone: (country, allValues) => {
          if (country) {
            let info = allCountries[iso2Lookup[country]];
            if (info) return "+" + info.dialCode;
          }
          return allValues.phone;
        }
      }
    });
  }

  componentWillUnmount() {
    this.props.onSetStatus(this.constructor.formName, null, {}, {});
  }

  renderAddressBlock(isDisabled = false) {
    return (
      <React.Fragment>
        <Grid container spacing={16} item xs={12}>
          <Grid item xs={12} md={4}>
            <Field
              name="firstName"
              type="text"
              disabled={isDisabled}
              validate={(value, values, errors) =>
                values.isSameAddress ? undefined : errors
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Field
              name="middleName"
              type="text"
              disabled={isDisabled}
              validate={(value, values, errors) =>
                values.isSameAddress ? undefined : errors
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Field
              name="lastName"
              type="text"
              disabled={isDisabled}
              validate={(value, values, errors) =>
                values.isSameAddress ? undefined : errors
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={16} item xs={12}>
          <Grid item xs={12} md={7}>
            <Field
              name="address"
              type="textarea"
              rows={2}
              disabled={isDisabled}
              validate={(value, values, errors) =>
                values.isSameAddress ? undefined : errors
              }
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Field
              name="state"
              type="textarea"
              rows={2}
              disabled={isDisabled}
              validate={(value, values, errors) =>
                values.isSameAddress ? undefined : errors
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={16} item xs={12}>
          <Grid item xs={12} md={4}>
            <Field
              name="city"
              type="text"
              disabled={isDisabled}
              validate={(value, values, errors) =>
                values.isSameAddress ? undefined : errors
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Field
              name="code"
              type="text"
              disabled={isDisabled}
              validate={(value, values, errors) =>
                values.isSameAddress ? undefined : errors
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Field
              name="country"
              type="select"
              disabled={isDisabled}
              native
              options={this.countryOptions}
              validate={(value, values, errors) =>
                values.isSameAddress ? undefined : errors
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={16} item xs={12}>
          <Grid item xs={12} md={5}>
            <Field
              name="phone"
              type="text"
              disabled={isDisabled}
              validate={(value, values, errors) =>
                values.isSameAddress ? undefined : errors
              }
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Field
              name="email"
              type="text"
              disabled={isDisabled}
              validate={(value, values, errors) =>
                values.isSameAddress ? undefined : errors
              }
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Form
        fields={fields}
        decorators={[this.phonesDecorator]}
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
              {this.renderAddressBlock()}
            </Grid>
          );
        }}
      />
    );
  }
}

export default ShippingForm;
