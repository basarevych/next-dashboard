import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { authSelectors } from "../auth/state";
import MapsPageComponent, { styles } from "./MapsPage";

const mapStateToProps = state => {
  return {
    userRoles: authSelectors.getRoles(state)
  };
};

const MapsPage = connect(mapStateToProps)(
  withStyles(styles)(MapsPageComponent)
);
MapsPage.getInitialProps = MapsPageComponent.getInitialProps;

export default MapsPage;
