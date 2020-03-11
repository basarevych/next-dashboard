import React from "react";
import UsersQuery, { query } from "./UsersQuery";
import { usersSelectors } from "./state";

function UsersPage() {
  return <UsersQuery />;
}

UsersPage.getInitialProps = async ({ isExported, store, fetchQuery }) => {
  if (!isExported) {
    const params = usersSelectors.getTableParams(store.getState());
    await fetchQuery(query, params);
  }
};

export default UsersPage;
