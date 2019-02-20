import { injectIntl } from "react-intl";
import DemoTableComponent, {
  defaultDept,
  pageSize,
  sortBy,
  sortDir
} from "./DemoTable";

const DemoTable = injectIntl(DemoTableComponent);

export { defaultDept, pageSize, sortBy, sortDir };
export default DemoTable;
