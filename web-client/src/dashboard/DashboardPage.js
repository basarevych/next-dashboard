import React from "react";
import DashboardQuery, { query as dashboardQuery } from "./DashboardQuery";
import { query as stateSalesQuery } from "./sales/StateSalesQuery";
import { query as deptEmployeesQuery } from "./employees/DeptEmployeesQuery";
import { dashboardSelectors } from "./state";

function DashboardPage() {
  return <DashboardQuery />;
}

DashboardPage.getInitialProps = async ({ isExported, store, fetchQuery }) => {
  if (!isExported) {
    const stateSalesState = dashboardSelectors.getState(store.getState());
    const deptEmployeesParams = dashboardSelectors.getTableParams(
      store.getState()
    );
    await Promise.all([
      fetchQuery(dashboardQuery),
      fetchQuery(stateSalesQuery, { stateName: stateSalesState }),
      fetchQuery(deptEmployeesQuery, deptEmployeesParams)
    ]);
  }
};

export default DashboardPage;
