import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/styles";
import { appOperations } from "../../state";
import ThemesComponent, { styles } from "./Themes";

const mapDispatchToProps = dispatch => {
  return {
    onSetCookie: (name, value, days) =>
      dispatch(appOperations.setCookie({ name, value, days })),
    onSetTheme: theme => dispatch(appOperations.setTheme({ theme }))
  };
};

const Themes = withStyles(styles)(
  injectIntl(
    connect(
      null,
      mapDispatchToProps
    )(ThemesComponent)
  )
);

export default Themes;
