import { getFormValues } from "redux-form/immutable";
import connectForm from "../app/forms/connectForm";
import ShippingFormComponent from "./ShippingForm";
import BillingFormComponent from "./BillingForm";

const mapStateToProps = state => {
  return {
    getShippingValue: field => {
      const values = getFormValues(ShippingFormComponent.formName)(state);
      return field ? values && values.get(field) : values;
    }
  };
};

const BillingForm = connectForm(BillingFormComponent, mapStateToProps);

export default BillingForm;
