import { graphql, createFragmentContainer } from "react-relay";
import StatComponent from "./Stat";

const SalesStat = createFragmentContainer(StatComponent, {
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
