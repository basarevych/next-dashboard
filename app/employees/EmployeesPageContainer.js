import { connect } from "react-redux";
import { authSelectors } from "../auth/state";
import EmployeesPageComponent from "./EmployeesPage";

const mapStateToProps = state => {
  return {
    userRoles: authSelectors.getRoles(state)
  };
};

const EmployeesPage = connect(mapStateToProps)(EmployeesPageComponent);
EmployeesPage.getInitialProps = EmployeesPageComponent.getInitialProps;

export default EmployeesPage;
