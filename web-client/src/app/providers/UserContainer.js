import { graphql, createRefetchContainer } from "react-relay";
import UserComponent from "./User";

const User = createRefetchContainer(
  UserComponent,
  {
    viewer: graphql`
      fragment UserContainer_viewer on Viewer {
        me {
          isAuthenticated
          userId
          name
          email
          isEmailVerified
          roles
          providers {
            name
            isLinked
          }
        }
      }
    `
  },
  graphql`
    query UserContainerQuery {
      viewer {
        ...UserContainer_viewer
      }
    }
  `
);

export default User;
