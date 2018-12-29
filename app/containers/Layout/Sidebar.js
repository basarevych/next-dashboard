import { connect } from "react-redux";
import { withRouter } from "next/router";
import { injectIntl } from "react-intl";
import SidebarComponent from "../../components/Layout/Sidebar";
import { authSelectors } from "../../state/auth";

const mapStateToProps = state => {
  return {
    roles: authSelectors.getRoles(state),
    name:
      authSelectors.getName(state) ||
      authSelectors.getEmail(state) ||
      "anonymous"
  };
};

const Sidebar = withRouter(
  injectIntl(connect(mapStateToProps)(SidebarComponent))
);

export default Sidebar;
