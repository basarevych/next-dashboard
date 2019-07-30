import { withStyles, withTheme } from "@material-ui/styles";
import ChartsDemoComponent, { styles } from "./ChartsDemo";

const ChartsDemo = withStyles(styles)(withTheme(ChartsDemoComponent));
export default ChartsDemo;
