import { graphql, createFragmentContainer } from "react-relay";
import StatComponent from "./Stat";

const LoadStat = createFragmentContainer(StatComponent, {
  data: graphql`
    fragment LoadStatContainer_data on LoadValueConnection {
      edges {
        node {
          date
          value: load
        }
      }
    }
  `
});

export default LoadStat;
