import { graphql, createFragmentContainer } from "react-relay";
import StatComponent from "./Stat";

const OperationsStat = createFragmentContainer(StatComponent, {
  data: graphql`
    fragment OperationsStatContainer_data on OperationsValueConnection {
      edges {
        node {
          date
          value: operations
        }
      }
    }
  `
});

export default OperationsStat;
