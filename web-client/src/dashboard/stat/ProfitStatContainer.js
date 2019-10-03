import { graphql, createFragmentContainer } from "react-relay";
import StatComponent from "./Stat";

const ProfitStat = createFragmentContainer(StatComponent, {
  data: graphql`
    fragment ProfitStatContainer_data on ProfitValueConnection {
      edges {
        node {
          date
          value: profit
        }
      }
    }
  `
});

export default ProfitStat;
