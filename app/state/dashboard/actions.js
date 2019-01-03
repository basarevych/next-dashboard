import * as types from "./types";

export const setCountries = ({ countries }) => ({
  type: types.SET_COUNTRIES,
  countries
});

export const setEmployees = ({ employees }) => ({
  type: types.SET_EMPLOYEES,
  employees
});

export const setProfit = ({ profit }) => ({
  type: types.SET_PROFIT,
  profit
});

export const setSales = ({ sales }) => ({
  type: types.SET_SALES,
  sales
});

export const setClients = ({ clients }) => ({
  type: types.SET_CLIENTS,
  clients
});

export const setAvgTime = ({ avgTime }) => ({
  type: types.SET_AVG_TIME,
  avgTime
});
