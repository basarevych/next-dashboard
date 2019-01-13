import { withStyles } from "@material-ui/core/styles";
import IconsPageComponent, { styles } from "./IconsPage";

const IconsPage = withStyles(styles, { withTheme: true })(IconsPageComponent);

export default IconsPage;
