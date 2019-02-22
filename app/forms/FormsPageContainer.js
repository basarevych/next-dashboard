import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { authSelectors } from "../auth/state";
import FormsPageComponent, { styles } from "./FormsPage";

const mapStateToProps = state => {
  return {
    userRoles: authSelectors.getRoles(state)
  };
};

const FormsPage = withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    null,
    null,
    { pure: false }
  )(FormsPageComponent)
);

FormsPage.getInitialProps = FormsPageComponent.getInitialProps;

export default FormsPage;
