import { graphql, createFragmentContainer } from "react-relay";
import StatComponent from "./Stat";

const MemoryStat = createFragmentContainer(StatComponent, {
  data: graphql`
    fragment MemoryStatContainer_data on MemoryValueConnection {
      edges {
        node {
          date
          value: memory
        }
      }
    }
  `
});

export default MemoryStat;
