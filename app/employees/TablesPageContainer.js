import { connect } from "react-redux";
import { authSelectors } from "../auth/state";
import TablesPageComponent from "./TablesPage";

const mapStateToProps = state => {
  return {
    userRoles: authSelectors.getRoles(state)
  };
};

const TablesPage = connect(mapStateToProps)(TablesPageComponent);
TablesPage.getInitialProps = TablesPageComponent.getInitialProps;

export default TablesPage;
