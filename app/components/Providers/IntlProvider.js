import React from "react";
import PropTypes from "prop-types";
import { IntlProvider as Provider, addLocaleData } from "react-intl";

import l10n from "../../../common/locales";
_.forEach(l10n.getLocaleData(), data => addLocaleData(data));

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
    return (
      <Provider
        key={this.props.locale}
        locale={this.props.locale}
        messages={l10n.messages[this.props.locale]}
        initialNow={this.props.created}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default IntlProvider;
