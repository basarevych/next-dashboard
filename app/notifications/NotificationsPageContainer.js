import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { authSelectors } from "../auth/state";
import NotificationsPageComponent, { styles } from "./NotificationsPage";

const NotificationstateToProps = state => {
  return {
    userRoles: authSelectors.getRoles(state)
  };
};

const NotificationsPage = connect(NotificationstateToProps)(
  withStyles(styles)(NotificationsPageComponent)
);
NotificationsPage.getInitialProps = NotificationsPageComponent.getInitialProps;

export default NotificationsPage;
