import { injectIntl } from "react-intl";
import { withStyles, withTheme } from "@material-ui/styles";
import IconsDemoComponent, { styles } from "./IconsDemo";

const IconsDemo = withStyles(styles)(withTheme(injectIntl(IconsDemoComponent)));

export default IconsDemo;
