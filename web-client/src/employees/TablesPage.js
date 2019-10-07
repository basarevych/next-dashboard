import React from "react";
import EmployeesQuery, { query } from "./EmployeesQuery";
import { employeesSelectors } from "./state";

function TablesPage() {
  return <EmployeesQuery />;
}

TablesPage.getInitialProps = async ({
  isSsr,
  isExported,
  store,
  fetchQuery
}) => {
  const params = employeesSelectors.getTableParams(store.getState());
  if (isSsr && !isExported) await fetchQuery(query, params);
};

export default TablesPage;
