import { connect } from "react-redux";
import { appSelectors } from "../state";
import StylesProviderComponent from "./Styles";

const mapStateToProps = state => {
  return {
    theme: appSelectors.getTheme(state)
  };
};

const StylesProvider = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(StylesProviderComponent);

export default StylesProvider;
