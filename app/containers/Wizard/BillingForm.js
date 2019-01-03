import { getFormValues } from "redux-form/immutable";
import connectForm from "../../lib/connectForm";
import ShippingFormComponent from "../../components/Wizard/ShippingForm";
import BillingFormComponent from "../../components/Wizard/BillingForm";
import { dashboardSelectors } from "../../state/dashboard";

const mapStateToProps = state => {
  return {
    countries: dashboardSelectors.getCountryOptions(state),
    getShippingValue: field => {
      const values = getFormValues(ShippingFormComponent.formName)(state);
      return field ? values && values.get(field) : values;
    }
  };
};

const BillingForm = connectForm(BillingFormComponent, mapStateToProps);
export default BillingForm;
