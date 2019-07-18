import { withStyles } from "@material-ui/styles";
import ToastProviderComponent, { styles } from "./Toast";

const ToastProvider = withStyles(styles)(ToastProviderComponent);

export default ToastProvider;
