import React from "react";
import UsersQuery, { query } from "./UsersQuery";
import { usersSelectors } from "./state";

function UsersPage() {
  return <UsersQuery />;
}

UsersPage.getInitialProps = async ({
  isSsr,
  isExported,
  store,
  fetchQuery
}) => {
  const params = usersSelectors.getTableParams(store.getState());
  if (isSsr && !isExported) await fetchQuery(query, params);
};

export default UsersPage;
