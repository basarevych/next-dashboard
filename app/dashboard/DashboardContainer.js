import { withStyles } from "@material-ui/core/styles";
import DashboardComponent, { defaultCountry, styles } from "./Dashboard";

const Dashboard = withStyles(styles, { withTheme: true })(DashboardComponent);

export { defaultCountry };
export default Dashboard;
