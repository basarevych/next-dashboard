import { graphql, createFragmentContainer } from "react-relay";
import StatContainer from "./StatContainer";

const ClientsStat = createFragmentContainer(StatContainer, {
  data: graphql`
    fragment ClientsStatContainer_data on ClientsValueConnection {
      edges {
        node {
          date
          value: clients
        }
      }
    }
  `
});

export default ClientsStat;
