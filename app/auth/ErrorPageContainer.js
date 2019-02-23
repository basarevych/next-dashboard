import { withStyles } from "@material-ui/core/styles";
import ErrorPageComponent, { styles } from "./ErrorPage";

const ErrorPage = withStyles(styles)(ErrorPageComponent);
ErrorPage.getInitialProps = ErrorPageComponent.getInitialProps;

export default ErrorPage;
