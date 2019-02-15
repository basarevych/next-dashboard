import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import DashboardComponent, { styles } from "./Dashboard";

const Dashboard = withStyles(styles, { withTheme: true })(
  injectIntl(DashboardComponent)
);

export default Dashboard;
