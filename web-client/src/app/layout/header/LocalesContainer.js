import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/styles";
import { appSelectors, appOperations } from "../../state";
import LocalesComponent, { styles } from "./Locales";

const mapStateToProps = state => {
  return {
    apiServer: appSelectors.getApiServer(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetCookie: (name, value, days) =>
      dispatch(appOperations.setCookie({ name, value, days })),
    onSetLocale: locale => dispatch(appOperations.setLocale({ locale }))
  };
};

const Locales = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(injectIntl(LocalesComponent)));

export default Locales;
