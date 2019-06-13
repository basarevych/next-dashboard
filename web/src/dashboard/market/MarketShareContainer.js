import { injectIntl } from "react-intl";
import { withStyles, withTheme } from "@material-ui/styles";
import { graphql, createRefetchContainer } from "react-relay";
import MarketShareComponent, { styles } from "./MarketShare";

const MarketShare = createRefetchContainer(
  withStyles(styles)(withTheme(injectIntl(MarketShareComponent))),
  {
    viewer: graphql`
      fragment MarketShareContainer_viewer on Viewer
        @argumentDefinitions(country: { type: "ID" }) {
        marketSharesByCountry(country: $country) {
          id
          country {
            name
          }
          shares {
            vendor
            name
            values
          }
        }
      }
    `
  },
  graphql`
    query MarketShareContainerQuery($country: ID) {
      viewer {
        ...MarketShareContainer_viewer @arguments(country: $country)
      }
    }
  `
);

export default MarketShare;
