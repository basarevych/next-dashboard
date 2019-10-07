import { graphql, createFragmentContainer } from "react-relay";
import StateSalesComponent from "./StateSales";

const StateSales = createFragmentContainer(StateSalesComponent, {
  viewer: graphql`
    fragment StateSalesContainer_viewer on Viewer
      @argumentDefinitions(stateName: { type: "String" }) {
      stateCities: usCities(stateName: $stateName, limit: 8) {
        edges {
          node {
            id
            name
            stateName
            population
          }
        }
        otherPopulation
      }
    }
  `
});

export default StateSales;
