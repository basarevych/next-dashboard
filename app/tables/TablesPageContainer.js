import { withStyles } from "@material-ui/core/styles";
import TablesPageComponent, { styles } from "./TablesPage";

const TablesPage = withStyles(styles, { withTheme: true })(TablesPageComponent);

export default TablesPage;
