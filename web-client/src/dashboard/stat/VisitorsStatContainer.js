import { graphql, createFragmentContainer } from "react-relay";
import StatComponent from "./Stat";

const VisitorsStat = createFragmentContainer(StatComponent, {
  data: graphql`
    fragment VisitorsStatContainer_data on VisitorsValueConnection {
      edges {
        node {
          date
          value: visitors
        }
      }
    }
  `
});

export default VisitorsStat;
