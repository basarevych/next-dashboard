import { graphql, createFragmentContainer } from "react-relay";
import StatContainer from "./StatContainer";

const SalesStat = createFragmentContainer(StatContainer, {
  data: graphql`
    fragment SalesStatContainer_data on SalesValueConnection {
      edges {
        node {
          date
          value: sales
        }
      }
    }
  `
});

export default SalesStat;
