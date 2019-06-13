import { injectIntl } from "react-intl";
import { withStyles, withTheme } from "@material-ui/styles";
import WorldMapComponent, { styles } from "./WorldMap";

const WorldMap = withStyles(styles)(withTheme(injectIntl(WorldMapComponent)));

export default WorldMap;
