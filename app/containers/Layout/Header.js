import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import HeaderComponent from "../../components/Layout/Header";
import { appSelectors, appOperations } from "../../state/app";
import { authOperations } from "../../state/auth";

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

const Header = injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeaderComponent)
);

export default Header;
