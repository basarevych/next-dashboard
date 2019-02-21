import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { authSelectors } from "../auth/state";
import ChartsPageComponent, { styles } from "./ChartsPage";

const mapStateToProps = state => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state)
  };
};

const ChartsPage = connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(ChartsPageComponent)
);
ChartsPage.getInitialProps = ChartsPageComponent.getInitialProps;

export default ChartsPage;
