import { graphql, createFragmentContainer } from "react-relay";
import StatComponent from "./Stat";

const ClientsStat = createFragmentContainer(StatComponent, {
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
