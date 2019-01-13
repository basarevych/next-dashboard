import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import ErrorMessageComponent, { styles } from "./ErrorMessage";

const ErrorMessage = withStyles(styles)(injectIntl(ErrorMessageComponent));

export default ErrorMessage;
