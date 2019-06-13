import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/styles";
import FieldMessagesComponent, { styles } from "./FieldMessages";

const FieldMessages = withStyles(styles)(injectIntl(FieldMessagesComponent));

export default FieldMessages;
