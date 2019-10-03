import { graphql, createRefetchContainer } from "react-relay";
import StateSalesComponent from "./StateSales";

const StateSales = createRefetchContainer(
  StateSalesComponent,
  {
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
  },
  graphql`
    query StateSalesContainerQuery($stateName: String) {
      viewer {
        ...StateSalesContainer_viewer @arguments(stateName: $stateName)
      }
    }
  `
);

export default StateSales;
