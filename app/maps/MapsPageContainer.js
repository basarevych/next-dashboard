import { withStyles } from "@material-ui/core/styles";
import MapsPageComponent, { styles } from "./MapsPage";

const MapsPage = withStyles(styles)(MapsPageComponent);
MapsPage.getInitialProps = MapsPageComponent.getInitialProps;

export default MapsPage;
