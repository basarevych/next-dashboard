import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { getFormValues, getFormAsyncErrors } from "redux-form/immutable";
import ShippingFormComponent from "../../components/Wizard/ShippingForm";
import BillingFormComponent from "../../components/Wizard/BillingForm";
import ConfirmFormComponent from "../../components/Wizard/ConfirmForm";

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

const ConfirmForm = injectIntl(connect(mapStateToProps)(ConfirmFormComponent));
export default ConfirmForm;
