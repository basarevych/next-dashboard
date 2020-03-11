import React from "react";
import EmployeesQuery, { query } from "./EmployeesQuery";
import { employeesSelectors } from "./state";

function TablesPage() {
  return <EmployeesQuery />;
}

TablesPage.getInitialProps = async ({ isExported, store, fetchQuery }) => {
  if (!isExported) {
    const params = employeesSelectors.getTableParams(store.getState());
    await fetchQuery(query, params);
  }
};

export default TablesPage;
