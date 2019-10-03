import React, { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { fetchQuery as doFetch } from "relay-runtime";
import QueryLookupRenderer from "relay-query-lookup-renderer";

export const RelayContext = createContext({});

export const fetchQuery = environment => (query, variables) =>
  doFetch(environment, query, variables);

export function QueryRenderer(props) {
  const { environment } = useContext(RelayContext);
  const { children, ...restProps } = props;

  return (
    <QueryLookupRenderer lookup environment={environment} {...restProps}>
      {children}
    </QueryLookupRenderer>
  );
}

QueryRenderer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

function RelayProvider(props) {
  const context = useMemo(() => ({ environment: props.environment }), [
    props.environment
  ]);

  return (
    <RelayContext.Provider value={context}>
      {props.children}
    </RelayContext.Provider>
  );
}

RelayProvider.propTypes = {
  environment: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default RelayProvider;
