import React from "react";
import PropTypes from "prop-types";
import { IntlProvider as Provider } from "react-intl";
import { messages } from "../../../common/locales";
class IntlProvider extends React.Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
  };

  render() {
    const { locale, created, children } = this.props;
    return (
      <Provider
        key={locale}
        locale={locale}
        messages={messages[locale]}
        initialNow={created}
      >
        {children}
      </Provider>
    );
  }
}

export default IntlProvider;
