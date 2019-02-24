import { withStyles } from "@material-ui/core/styles";
import TypographyPageComponent, { styles } from "./TypographyPage";

const TypographyPage = withStyles(styles)(TypographyPageComponent);
TypographyPage.getInitialProps = TypographyPageComponent.getInitialProps;

export default TypographyPage;
