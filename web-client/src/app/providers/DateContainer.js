import { connect } from "react-redux";
import { appSelectors } from "../state";
import DateProviderComponent from "./Date";

const mapStateToProps = state => {
  return {
    locale: appSelectors.getLocale(state)
  };
};

const DateProvider = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(DateProviderComponent);

export default DateProvider;
