import { withStyles } from "@material-ui/core/styles";
import ErrorPageComponent, { styles } from "./ErrorPage";

const ErrorPage = withStyles(styles, { withTheme: true })(ErrorPageComponent);

export default ErrorPage;
