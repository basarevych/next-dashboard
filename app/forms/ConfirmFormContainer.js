import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { getFormValues, getFormAsyncErrors } from "redux-form/immutable";
import ShippingFormComponent from "./ShippingForm";
import BillingFormComponent from "./BillingForm";
import ConfirmFormComponent, { styles } from "./ConfirmForm";

const mapStateToProps = state => {
  return {
    getShippingValue: field => {
      const values = getFormValues(ShippingFormComponent.formName)(state);
      return field ? values && values.get(field) : values;
    },
    getShippingError: field => {
      const errors = getFormAsyncErrors(ShippingFormComponent.formName)(state);
      return field ? errors && errors.get(field) : errors;
    },
    getBillingValue: field => {
      const values = getFormValues(BillingFormComponent.formName)(state);
      return field ? values && values.get(field) : values;
    },
    getBillingError: field => {
      const errors = getFormAsyncErrors(BillingFormComponent.formName)(state);
      return field ? errors && errors.get(field) : errors;
    }
  };
};

const ConfirmForm = withStyles(styles)(
  connect(mapStateToProps)(ConfirmFormComponent)
);

export default ConfirmForm;
