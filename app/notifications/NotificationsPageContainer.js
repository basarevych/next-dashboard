import { withStyles } from "@material-ui/core/styles";
import NotificationsPageComponent, { styles } from "./NotificationsPage";

const NotificationsPage = withStyles(styles)(NotificationsPageComponent);
NotificationsPage.getInitialProps = NotificationsPageComponent.getInitialProps;

export default NotificationsPage;
