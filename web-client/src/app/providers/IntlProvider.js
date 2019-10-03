import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { IntlProvider as Provider } from "react-intl";
import { messages } from "../../../common/locales";
import { appSelectors } from "../state";

function IntlProvider(props) {
  const locale = useSelector(state => appSelectors.getLocale(state));
  const created = useSelector(state => appSelectors.getCreated(state));

  return (
    <Provider
      key={locale}
      locale={locale}
      messages={messages[locale]}
      initialNow={created}
    >
      {props.children}
    </Provider>
  );
}

IntlProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default IntlProvider;
