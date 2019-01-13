import { withStyles } from "@material-ui/core/styles";
import ProfilePageComponent, { styles } from "./ProfilePage";

const ProfilePage = withStyles(styles, { withTheme: true })(
  ProfilePageComponent
);

export default ProfilePage;
