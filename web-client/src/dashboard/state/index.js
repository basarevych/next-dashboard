import dashboardReducer, { defaultState } from "./reducers";

import * as dashboardTypes from "./types";
import * as dashboardOperations from "./operations";
import * as dashboardSelectors from "./selectors";

export {
  dashboardTypes,
  dashboardOperations,
  dashboardSelectors,
  defaultState
};
export default dashboardReducer;
