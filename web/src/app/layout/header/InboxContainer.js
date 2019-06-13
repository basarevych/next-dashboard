import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/styles";
import { appSelectors } from "../../state";
import InboxComponent, { styles } from "./Inbox";

const mapStateToProps = state => {
  return {
    apiServer: appSelectors.getApiServer(state)
  };
};

const Inbox = withStyles(styles)(
  injectIntl(connect(mapStateToProps)(InboxComponent))
);

export default Inbox;
