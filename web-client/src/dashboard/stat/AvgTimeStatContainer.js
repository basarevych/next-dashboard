import { graphql, createFragmentContainer } from "react-relay";
import StatContainer from "./StatContainer";

const AvgTimeStat = createFragmentContainer(StatContainer, {
  data: graphql`
    fragment AvgTimeStatContainer_data on AvgTimeValueConnection {
      edges {
        node {
          date
          value: avgTime
        }
      }
    }
  `
});

export default AvgTimeStat;
