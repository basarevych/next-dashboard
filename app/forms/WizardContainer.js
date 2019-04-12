import { withStyles } from "@material-ui/core/styles";
import WizardComponent, { styles } from "./Wizard";

const Wizard = withStyles(styles, { withTheme: true })(WizardComponent);
export default Wizard;
