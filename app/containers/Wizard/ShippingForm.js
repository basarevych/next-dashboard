import connectForm from "../../lib/connectForm";
import ShippingFormComponent from "../../components/Wizard/ShippingForm";
import { dashboardSelectors } from "../../state/dashboard";

const mapStateToProps = state => {
  return {
    countries: dashboardSelectors.getCountryOptions(state)
  };
};

const ShippingForm = connectForm(ShippingFormComponent, mapStateToProps);
export default ShippingForm;
