import { connect } from "react-redux";
import { appSelectors } from "../../state/app";
import DateProviderComponent from "../../components/Providers/Date";

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
