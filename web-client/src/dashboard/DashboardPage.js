import React from "react";
import DashboardQuery, { query as dashboardQuery } from "./DashboardQuery";
import { query as stateSalesQuery } from "./sales/StateSalesQuery";
import { query as deptEmployeesQuery } from "./employees/DeptEmployeesQuery";
import { dashboardSelectors } from "./state";

function DashboardPage() {
  return <DashboardQuery />;
}

DashboardPage.getInitialProps = async ({
  isSsr,
  isExported,
  store,
  fetchQuery
}) => {
  if (isSsr && !isExported) {
    const stateSalesState = dashboardSelectors.getState(store.getState());
    const deptEmployeesParams = dashboardSelectors.getTableParams(
      store.getState()
    );
    await Promise.all([
      fetchQuery(dashboardQuery),
      fetchQuery(stateSalesQuery, { state: stateSalesState }),
      fetchQuery(deptEmployeesQuery, deptEmployeesParams)
    ]);
  }
};

export default DashboardPage;
