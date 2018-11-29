import UsersPage from "../app/containers/Pages/UsersPage";
import { usersOperations } from "../app/state/users";

UsersPage.getInitialProps = async ({ store, req }) => {
  await store.dispatch(usersOperations.load({ req }));
};

export default UsersPage;
