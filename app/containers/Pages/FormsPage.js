import { connect } from "react-redux";
import { authSelectors } from "../../state/auth";
import FormsPageComponent from "../../components/Pages/FormsPage";

const mapStateToProps = state => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state)
  };
};

const FormsPage = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(FormsPageComponent);

FormsPage.getInitialProps = FormsPageComponent.getInitialProps;

export default FormsPage;
