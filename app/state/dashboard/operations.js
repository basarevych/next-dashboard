import * as actions from "./actions";
import { appOperations } from "../app";

export const loadCountries = ({ req } = {}) => async dispatch => {
  let countries;
  if (req) {
    countries = await req.di.get("repository.dashboard").getCountries(req);
  } else {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          query {
            countries {
              code
              name
              callingCode
            }
          }
        `
      )
    );
    countries = response && _.get(response, "data.countries");
  }
  await dispatch(actions.setCountries({ countries }));
};

export const loadEmployees = ({ req } = {}) => async dispatch => {
  let employees;
  if (req) {
    employees = await req.di.get("repository.dashboard").getEmployees(req);
  } else {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          query {
            employees {
              id
              checked
              name
              dept
              title
              country
              salary
            }
          }
        `
      )
    );
    employees = response && _.get(response, "data.employees");
  }
  await dispatch(actions.setEmployees({ employees }));
};

export const loadProfit = ({ req } = {}) => async dispatch => {
  let profit;
  if (req) {
    profit = await req.di.get("repository.dashboard").getProfit(req);
  } else {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          query {
            profit {
              date
              revenues
              expenses
              profit
            }
          }
        `
      )
    );
    profit = response && _.get(response, "data.profit");
  }
  await dispatch(actions.setProfit({ profit }));
};

export const loadSales = ({ req } = {}) => async dispatch => {
  let sales;
  if (req) {
    sales = await req.di.get("repository.dashboard").getSales(req);
  } else {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          query {
            sales {
              date
              sales
            }
          }
        `
      )
    );
    sales = response && _.get(response, "data.sales");
  }
  await dispatch(actions.setSales({ sales }));
};

export const loadClients = ({ req } = {}) => async dispatch => {
  let clients;
  if (req) {
    clients = await req.di.get("repository.dashboard").getClients(req);
  } else {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          query {
            clients {
              date
              clients
            }
          }
        `
      )
    );
    clients = response && _.get(response, "data.clients");
  }
  await dispatch(actions.setClients({ clients }));
};

export const loadAvgTime = ({ req } = {}) => async dispatch => {
  let avgTime;
  if (req) {
    avgTime = await req.di.get("repository.dashboard").getAvgTime(req);
  } else {
    let response = await dispatch(
      appOperations.gqlQuery(
        `
          query {
            avgTime {
              date
              avgTime
            }
          }
        `
      )
    );
    avgTime = response && _.get(response, "data.avgTime");
  }
  await dispatch(actions.setAvgTime({ avgTime }));
};
