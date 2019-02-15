import { withStyles } from "@material-ui/core/styles";
import MarketShareComponent, { styles } from "./MarketShare";

const MarketShare = withStyles(styles, { withTheme: true })(
  MarketShareComponent
);

export default MarketShare;
