import { withStyles } from "@material-ui/styles";
import BillingFormComponent, { styles } from "./BillingForm";

const BillingForm = withStyles(styles)(BillingFormComponent);
BillingForm.formName = BillingFormComponent.formName;

export default BillingForm;
