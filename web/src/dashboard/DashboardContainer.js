import { withStyles, withTheme } from "@material-ui/styles";
import DashboardComponent, {
  defaultCountry,
  defaultDept,
  pageSize,
  sortBy,
  sortDir,
  styles
} from "./Dashboard";

const Dashboard = withStyles(styles)(withTheme(DashboardComponent));

export { defaultCountry, defaultDept, pageSize, sortBy, sortDir };
export default Dashboard;
