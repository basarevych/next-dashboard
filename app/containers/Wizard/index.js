import { connect } from "react-redux";
import { isInvalid } from "redux-form/immutable";
import ShippingFormComponent from "../../components/Wizard/ShippingForm";
import BillingFormComponent from "../../components/Wizard/BillingForm";
import WizardComponent from "../../components/Wizard";

const mapStateToProps = state => {
  return {
    hasErrors: {
      [ShippingFormComponent.formName]: isInvalid(
        ShippingFormComponent.formName
      )(state),
      [BillingFormComponent.formName]: isInvalid(BillingFormComponent.formName)(
        state
      )
    }
  };
};

const Wizard = connect(mapStateToProps)(WizardComponent);
export default Wizard;
