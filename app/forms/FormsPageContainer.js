import { withStyles } from "@material-ui/core/styles";
import FormsPageComponent, { styles } from "./FormsPage";

const FormsPage = withStyles(styles, { withTheme: true })(FormsPageComponent);
FormsPage.getInitialProps = FormsPageComponent.getInitialProps;

export default FormsPage;
