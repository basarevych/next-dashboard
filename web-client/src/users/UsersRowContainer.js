import { graphql, createFragmentContainer } from "react-relay";
import UsersRowComponent from "./UsersRow";

const UsersRow = createFragmentContainer(UsersRowComponent, {
  node: graphql`
    fragment UsersRowContainer_node on User {
      id
      email
      name
      roles
    }
  `
});

export default UsersRow;
