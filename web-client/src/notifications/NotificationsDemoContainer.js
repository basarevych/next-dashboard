import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import NotificationsDemoComponent, { styles } from "./NotificationsDemo";
import { appOperations } from "../app/state";

const mapDispatchToProps = dispatch => {
  return {
    sendToast: (position, title, content) =>
      dispatch(appOperations.sendToast({ position, title, content }))
  };
};

const NotificationsDemo = withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(NotificationsDemoComponent)
);

export default NotificationsDemo;
