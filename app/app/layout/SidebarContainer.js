import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { withRouter } from "next/router";
import { withStyles } from "@material-ui/core/styles";
import SidebarComponent, { styles } from "./Sidebar";
import { authSelectors } from "../../auth/state";

const mapStateToProps = state => {
  return {
    roles: authSelectors.getRoles(state),
    name: authSelectors.getName(state) || authSelectors.getEmail(state) || ""
  };
};

const Sidebar = withRouter(
  withStyles(styles)(injectIntl(connect(mapStateToProps)(SidebarComponent)))
);

export default Sidebar;
