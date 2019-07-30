import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withRouter } from "next/router";
import { withStyles } from "@material-ui/styles";
import SidebarComponent, { styles } from "./Sidebar";
import { appSelectors, appOperations } from "../../app/state";

const mapStateToProps = state => {
  return {
    user: appSelectors.getUserJS(state),
    apiServer: appSelectors.getApiServer(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoginClick: () => dispatch(appOperations.showAuthModal())
  };
};

const Sidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(injectIntl(SidebarComponent))));

export default Sidebar;
