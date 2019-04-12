import { withStyles } from "@material-ui/core/styles";
import BillingFormComponent, { styles } from "./BillingForm";

const BillingForm = withStyles(styles)(BillingFormComponent);
BillingForm.formName = BillingFormComponent.formName;

export default BillingForm;
