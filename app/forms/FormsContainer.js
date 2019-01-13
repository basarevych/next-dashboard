import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { isInvalid } from "redux-form/immutable";
import ShippingFormComponent from "./ShippingForm";
import BillingFormComponent from "./BillingForm";
import FormsComponent, { styles } from "./Forms";

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

const Forms = withStyles(styles, { withTheme: true })(
  connect(mapStateToProps)(FormsComponent)
);

export default Forms;
