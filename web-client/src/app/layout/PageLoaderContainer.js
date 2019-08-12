import { withStyles } from "@material-ui/styles";
import PageLoaderComponent, { styles } from "./PageLoader";
export { query } from "./PageLoader";

const PageLoader = withStyles(styles)(PageLoaderComponent);

export default PageLoader;
