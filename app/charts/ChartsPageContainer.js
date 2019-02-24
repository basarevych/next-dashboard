import { withStyles } from "@material-ui/core/styles";
import ChartsPageComponent, { styles } from "./ChartsPage";

const ChartsPage = withStyles(styles, { withTheme: true })(ChartsPageComponent);
ChartsPage.getInitialProps = ChartsPageComponent.getInitialProps;

export default ChartsPage;
