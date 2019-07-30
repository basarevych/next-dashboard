import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import HeaderComponent, { styles } from "./Header";
import { appSelectors } from "../state";

const mapStateToProps = state => {
  const user = appSelectors.getUserJS(state);
  return {
    isAuthenticated: user ? user.isAuthenticated : false
  };
};

const Header = connect(mapStateToProps)(withStyles(styles)(HeaderComponent));
export default Header;
