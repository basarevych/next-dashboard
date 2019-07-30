import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withStyles, withTheme } from "@material-ui/styles";
import HeaderBarComponent, { styles } from "./HeaderBar";
import { appSelectors, appOperations } from "../../state";

const mapStateToProps = state => {
  return {
    locale: appSelectors.getLocale(state),
    apiServer: appSelectors.getApiServer(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignOut: () => dispatch(appOperations.signOut())
  };
};

const HeaderBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withTheme(injectIntl(HeaderBarComponent))));

export default HeaderBar;
