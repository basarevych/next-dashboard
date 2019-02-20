import { withStyles } from "@material-ui/core/styles";
import DashboardComponent, {
  defaultCountry,
  defaultDept,
  pageSize,
  sortBy,
  sortDir,
  styles
} from "./Dashboard";

const Dashboard = withStyles(styles, { withTheme: true })(DashboardComponent);

export { defaultCountry, defaultDept, pageSize, sortBy, sortDir };
export default Dashboard;
