import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import { appSelectors } from "../app/state";
import MapsDemoComponent, { styles } from "./MapsDemo";

const mapStateToProps = state => {
  return {
    theme: appSelectors.getTheme(state),
    mapboxToken: appSelectors.getMapboxToken(state)
  };
};

const MapsDemo = connect(mapStateToProps)(
  withStyles(styles)(MapsDemoComponent)
);
export default MapsDemo;
