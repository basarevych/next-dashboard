import { graphql, createFragmentContainer } from "react-relay";
import StatContainer from "./StatContainer";

const ProfitStat = createFragmentContainer(StatContainer, {
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
