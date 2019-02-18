import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import StatComponent, { styles } from "./Stat";

const Stat = withStyles(styles, { withTheme: true })(injectIntl(StatComponent));

export default Stat;
