import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import { appSelectors } from "../../app/state";
import SalesMapComponent, { styles } from "./SalesMap";

const mapStateToProps = state => {
  return {
    theme: appSelectors.getTheme(state),
    mapboxToken: appSelectors.getMapboxToken(state)
  };
};

const SalesMap = withStyles(styles)(
  connect(mapStateToProps)(SalesMapComponent)
);

export default SalesMap;
