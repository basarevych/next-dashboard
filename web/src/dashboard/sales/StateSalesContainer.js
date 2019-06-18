import { withStyles, withTheme } from "@material-ui/styles";
import { injectIntl } from "react-intl";
import { graphql, createRefetchContainer } from "react-relay";
import StateSalesComponent, { styles } from "./StateSales";

const StateSales = createRefetchContainer(
  withStyles(styles)(withTheme(injectIntl(StateSalesComponent))),
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
