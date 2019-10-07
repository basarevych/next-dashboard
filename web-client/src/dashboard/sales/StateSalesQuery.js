import React, { useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { graphql } from "react-relay";
import { QueryRenderer } from "../../app/providers/RelayProvider";
import ErrorMessage from "../../app/errors/ErrorMessage";
import StateSales from "./StateSalesContainer";
import { dashboardSelectors } from "../state";

export const query = graphql`
  query StateSalesQueryQuery($stateName: String) {
    viewer {
      ...StateSalesContainer_viewer @arguments(stateName: $stateName)
    }
  }
`;

function StateSalesQuery() {
  const state = useSelector(dashboardSelectors.getState);
  const params = useMemo(() => ({ stateName: state }), [state]);

  const renderQuery = useCallback(({ error, props: renderProps, retry }) => {
    if (error) return <ErrorMessage error={error} />;

    return (
      <StateSales viewer={renderProps && renderProps.viewer} retry={retry} />
    );
  }, []);

  return (
    <QueryRenderer query={query} variables={params} render={renderQuery} />
  );
}

export default StateSalesQuery;
