import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/styles";
import { appSelectors, appOperations } from "../../state";
import ThemesComponent, { styles } from "./Themes";

const mapStateToProps = state => {
  return {
    apiServer: appSelectors.getApiServer(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetCookie: (name, value, days) =>
      dispatch(appOperations.setCookie({ name, value, days })),
    onSetTheme: theme => dispatch(appOperations.setTheme({ theme }))
  };
};

const Themes = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(injectIntl(ThemesComponent)));

export default Themes;
