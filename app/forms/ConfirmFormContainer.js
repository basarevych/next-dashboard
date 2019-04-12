import { withStyles } from "@material-ui/core/styles";
import ConfirmFormComponent, { styles } from "./ConfirmForm";

const ConfirmForm = withStyles(styles)(ConfirmFormComponent);
ConfirmForm.formName = ConfirmFormComponent.formName;

export default ConfirmForm;
