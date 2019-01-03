import { List, fromJS } from "immutable";
import { combineReducers } from "redux-immutable";
import * as types from "./types";

/* State Shape
Map({
  countries: List([]),
  employees: List([]),
  profit: List([]),
  sales: List([]),
  clients: List([]),
  avgTime: List([]),
})
*/

const countriesReducer = (state = List([]), action) => {
  switch (action.type) {
    case types.SET_COUNTRIES:
      if (!_.isUndefined(action.countries)) return fromJS(action.countries);
      break;
  }
  return state;
};

const employeesReducer = (state = List([]), action) => {
  switch (action.type) {
    case types.SET_EMPLOYEES:
      if (!_.isUndefined(action.employees)) return fromJS(action.employees);
      break;
  }
  return state;
};

const profitReducer = (state = List([]), action) => {
  switch (action.type) {
    case types.SET_PROFIT:
      if (!_.isUndefined(action.profit)) return fromJS(action.profit);
      break;
  }
  return state;
};

const salesReducer = (state = List([]), action) => {
  switch (action.type) {
    case types.SET_SALES:
      if (!_.isUndefined(action.sales)) return fromJS(action.sales);
      break;
  }
  return state;
};

const clientsReducer = (state = List([]), action) => {
  switch (action.type) {
    case types.SET_CLIENTS:
      if (!_.isUndefined(action.clients)) return fromJS(action.clients);
      break;
  }
  return state;
};

const avgTimeReducer = (state = List([]), action) => {
  switch (action.type) {
    case types.SET_AVG_TIME:
      if (!_.isUndefined(action.avgTime)) return fromJS(action.avgTime);
      break;
  }
  return state;
};

const reducer = combineReducers({
  countries: countriesReducer,
  employees: employeesReducer,
  profit: profitReducer,
  sales: salesReducer,
  clients: clientsReducer,
  avgTime: avgTimeReducer
});

export default reducer;
