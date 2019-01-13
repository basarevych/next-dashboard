import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import ErrorsComponent, { styles } from "./Errors";

const Errors = withStyles(styles)(injectIntl(ErrorsComponent));

export default Errors;
