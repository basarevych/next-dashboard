"use strict";

const getService = (state, props) => {
  let di = state.getIn(["app", "di"]);
  return di ? di.get(props.service, ...(props.params || [])) : null;
};

module.exports = {
  getService
};
