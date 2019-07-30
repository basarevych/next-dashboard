import { injectIntl } from "react-intl";
import { withStyles, withTheme } from "@material-ui/styles";
import StatComponent, { styles } from "./Stat";

const Stat = withStyles(styles)(withTheme(injectIntl(StatComponent)));

export default Stat;
