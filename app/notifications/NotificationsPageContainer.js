import { withStyles } from "@material-ui/core/styles";
import NotificationsPageComponent, { styles } from "./NotificationsPage";

const NotificationsPage = withStyles(styles, { withTheme: true })(
  NotificationsPageComponent
);

export default NotificationsPage;
