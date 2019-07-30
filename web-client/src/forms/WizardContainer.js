import { withStyles, withTheme } from "@material-ui/styles";
import WizardComponent, { styles } from "./Wizard";

const Wizard = withStyles(styles)(withTheme(WizardComponent));
export default Wizard;
