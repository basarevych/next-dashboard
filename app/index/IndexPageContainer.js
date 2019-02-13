import { connect } from "react-redux";
import { authSelectors } from "../auth/state";
import IndexPageComponent from "./IndexPage";

const mapStateToProps = state => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state)
  };
};

const IndexPage = connect(mapStateToProps)(IndexPageComponent);
IndexPage.getInitialProps = IndexPageComponent.getInitialProps;

export default IndexPage;
