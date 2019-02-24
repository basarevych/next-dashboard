import { injectIntl } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import IconsPageComponent, { styles } from "./IconsPage";

const IconsPage = withStyles(styles, { withTheme: true })(
  injectIntl(IconsPageComponent)
);
IconsPage.getInitialProps = IconsPageComponent.getInitialProps;

export default IconsPage;
