import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { authSelectors } from "../auth/state";
import TypographyPageComponent, { styles } from "./TypographyPage";

const NotificationstateToProps = state => {
  return {
    userRoles: authSelectors.getRoles(state)
  };
};

const TypographyPage = connect(NotificationstateToProps)(
  withStyles(styles)(TypographyPageComponent)
);
TypographyPage.getInitialProps = TypographyPageComponent.getInitialProps;

export default TypographyPage;
