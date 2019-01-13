import { withStyles } from "@material-ui/core/styles";
import TypographyPageComponent, { styles } from "./TypographyPage";

const TypographyPage = withStyles(styles, { withTheme: true })(
  TypographyPageComponent
);

export default TypographyPage;
