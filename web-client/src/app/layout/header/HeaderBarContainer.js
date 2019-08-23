import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withStyles, withTheme } from "@material-ui/styles";
import HeaderBarComponent, { styles } from "./HeaderBar";
import { appSelectors, appOperations } from "../../state";

const mapStateToProps = state => {
  return {
    locale: appSelectors.getLocale(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignOut: () => dispatch(appOperations.signOut())
  };
};

const HeaderBar = withStyles(styles)(
  withTheme(
    injectIntl(
      connect(
        mapStateToProps,
        mapDispatchToProps
      )(HeaderBarComponent)
    )
  )
);

export default HeaderBar;
