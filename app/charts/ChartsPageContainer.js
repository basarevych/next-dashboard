import { withStyles } from "@material-ui/core/styles";
import ChartsPageComponent, { styles } from "./ChartsPage";

const ChartsPage = withStyles(styles, { withTheme: true })(ChartsPageComponent);

export default ChartsPage;
