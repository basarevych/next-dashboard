import { connect } from "react-redux";
import HeaderComponent from "../../components/Layout/Header";
import { appSelectors, appOperations } from "../../state/app";
import { authOperations } from "../../state/auth";

const mapStateToProps = state => {
  return {
    cookie: appSelectors.getService(state, { service: "cookie" }),
    locale: appSelectors.getLocale(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetLocale: locale => dispatch(appOperations.setLocale({ locale })),
    onSignOut: () => dispatch(authOperations.signOut())
  };
};

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);

export default Header;
