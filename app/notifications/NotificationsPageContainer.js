import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import NotificationsPageComponent, { styles } from "./NotificationsPage";
import { appOperations } from "../app/state";

const mapDispatchToProps = dispatch => {
  return {
    sendToast: (position, title, content) =>
      dispatch(appOperations.sendToast({ position, title, content }))
  };
};

const NotificationsPage = withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(NotificationsPageComponent)
);
NotificationsPage.getInitialProps = NotificationsPageComponent.getInitialProps;

export default NotificationsPage;
