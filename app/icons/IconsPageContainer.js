import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import { authSelectors } from "../auth/state";
import IconsPageComponent, { styles } from "./IconsPage";

const NotificationstateToProps = state => {
  return {
    userRoles: authSelectors.getRoles(state)
  };
};

const IconsPage = connect(NotificationstateToProps)(
  withStyles(styles, { withTheme: true })(injectIntl(IconsPageComponent))
);
IconsPage.getInitialProps = IconsPageComponent.getInitialProps;

export default IconsPage;
