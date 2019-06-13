import { withStyles } from "@material-ui/styles";
import ErrorComponent, { styles } from "./Error";

const MyError = withStyles(styles)(ErrorComponent);

export default MyError;
