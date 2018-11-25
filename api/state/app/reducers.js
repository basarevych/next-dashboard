"use strict";

const { combineReducers } = require("redux-immutable");
const types = require("./types");

/* State Shape
Map({
  di: DiContainer,
})
*/

const diReducer = (state = null, action) => {
  switch (action.type) {
    case types.INIT:
      if (!_.isUndefined(action.di)) return action.di;
      break;
  }
  return state;
};

module.exports = combineReducers({
  di: diReducer
});
