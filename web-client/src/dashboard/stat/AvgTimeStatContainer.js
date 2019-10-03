import { graphql, createFragmentContainer } from "react-relay";
import StatComponent from "./Stat";

const AvgTimeStat = createFragmentContainer(StatComponent, {
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
