import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import HeaderComponent, { styles } from "./Header";
import { appSelectors, appOperations } from "../state";
import { authOperations } from "../../auth/state";

const mapStateToProps = state => {
  return {
    locale: appSelectors.getLocale(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetCookie: (name, value, days) =>
      dispatch(appOperations.setCookie({ name, value, days })),
    onSetLocale: locale => dispatch(appOperations.setLocale({ locale })),
    onSignOut: () => dispatch(authOperations.signOut())
  };
};

const Header = withStyles(styles, { withTheme: true })(
  injectIntl(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(HeaderComponent)
  )
);

export default Header;
