import { connect } from "react-redux";
import { withStyles, withTheme } from "@material-ui/styles";
import { appOperations } from "../app/state";
import DashboardComponent, {
  defaultState,
  defaultDept,
  pageSize,
  sortBy,
  sortDir,
  styles
} from "./Dashboard";

const mapDispatchToProps = dispatch => {
  return {
    fetchCities: () => dispatch(appOperations.fetchCities())
  };
};

const Dashboard = connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(withTheme(DashboardComponent)));

export { defaultState, defaultDept, pageSize, sortBy, sortDir };
export default Dashboard;
