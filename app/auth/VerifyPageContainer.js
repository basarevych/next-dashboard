import { withStyles } from "@material-ui/core/styles";
import VerifyPageComponent, { styles } from "./VerifyPage";

const VerifyPage = withStyles(styles, { withTheme: true })(VerifyPageComponent);

export default VerifyPage;
