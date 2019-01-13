import { withStyles } from "@material-ui/core/styles";
import MapsPageComponent, { styles } from "./MapsPage";

const MapsPage = withStyles(styles, { withTheme: true })(MapsPageComponent);

export default MapsPage;
