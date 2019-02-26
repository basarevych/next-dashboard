import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import WorldMapComponent, { styles } from "./WorldMap";

const WorldMap = withStyles(styles, { withTheme: true })(
  injectIntl(WorldMapComponent)
);

export default WorldMap;
